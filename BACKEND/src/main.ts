// src/main.ts

import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./db/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authenticateToken from "./middleware/authMiddleware";
import cors from "cors";
import Book from "./db/models/Book";

const app = express();
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("¡Conectado a MongoDB Atlas con éxito!");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error.message);
    process.exit(1);
  });

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors());

app.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    //1ro verificar si el usuario/email ya existe
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(409).json({ message: "El email ya está registrado" });
      }
      if (existingUser.username === username) {
        return res
          .status(409)
          .json({ message: "El nombre de usuario ya está registrado" });
      }
    }

    //hashear constraseña
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    //guardado de usuario
    const newUser = new User({
      username,
      email,
      passwordHash,
    });
    await newUser.save();

    console.log("Intento de registro", {
      username,
      email,
      password,
      passwordHash,
    });

    res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.error("Error de intento de registro");
    res.status(500).json({
      message: "Error interno del servidor al registrar usuario.",
      error: error.message,
    });
  }
});

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>¡El servidor está funcionando correctamente!</h1>");
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    //busqueda de usuario

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "credenciales inválidas" });
    }

    //comparación de contraseñas
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(400).json({
        message: "Credenciales inválidas (email o contraseña incorrectos).",
      });
    }

    // Asegurarse de que JWT_SECRET esté definido en .env
    if (!process.env.JWT_SECRET) {
      console.error(
        "JWT_SECRET no está definido en el archivo .env. Error de configuración."
      );
      return res.status(500).json({
        message:
          "Error interno del servidor: configuración de autenticación incompleta.",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "¡Login exitoso!",
      token,
      user: {
        id: user._id, // ← AGREGAR ID (MongoDB usa _id)
        username: user.username,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error("Error en el intento de login:", error);
    res.status(500).json({
      message: "Error interno del servidor al intentar iniciar sesión.",
    });
  }
});

interface AuthenticatedRequest extends Request {
  user?: { id: string; username: string };
}

app.get("/profile", authenticateToken, (req: Request, res: Response) => {
  const authReq = req as AuthenticatedRequest;

  res.status(200).json({
    message: `¡Bienvenido a tu perfil, ${authReq.user?.username}!`,
    userId: authReq.user?.id,
    data: "Esta es información confidencial solo para usuarios autenticados.",
  });
});

app.post("/books", async (req: Request, res: Response) => {
  try {
    const bookData = req.body;

    const newBook = new Book(bookData);
    await newBook.save();

    res.status(201).json({
      message: "Libro creado exitosamente",
      book: newBook,
    });
  } catch (error: any) {
    console.error("Error al crear libro:", error);
    res.status(500).json({
      message: "Error interno del servidor al crear libro",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
