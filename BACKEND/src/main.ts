// src/main.ts

import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("¡Conectado a MongoDB Atlas con éxito!"); // Mensaje de éxito
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error.message); // Mensaje de error
    process.exit(1); // Sale de la aplicación si no se puede conectar a la DB
  });

app.use(express.json());

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
