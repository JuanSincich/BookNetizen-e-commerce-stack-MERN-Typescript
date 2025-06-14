// src/main.ts

import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./db/models/User";
import bcrypt from "bcryptjs";
import { log } from "console";

const app = express();
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("¡Conectado a MongoDB Atlas con éxito!");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error.message); //Mensaje de error
    process.exit(1); //Sale de la aplicación si no se puede conectar a la DB
  });

app.use(express.json());

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

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Simulamos un usuario válido:
  const userValido = {
    email: "usuario@correo.com",
    password: "123456",
  };

  if (email === userValido.email && password === userValido.password) {
    return res.status(200).json({ message: "Login exitoso", user: { email } });
  } else {
    return res.status(401).json({ message: "Email o contraseña incorrectos" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
