"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001; // Usamos la variable de entorno PORT o por defecto 3001
app.use(express_1.default.json()); // Middleware para parsear el cuerpo de las peticiones en formato JSON
// Ruta de prueba
app.get("/", (req, res) => {
    res.send("<h1>¡El servidor está funcionando correctamente!</h1>");
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Simulamos un usuario válido:
    const userValido = {
        email: "usuario@correo.com",
        password: "123456",
    };
    if (email === userValido.email && password === userValido.password) {
        return res.status(200).json({ message: "Login exitoso", user: { email } });
    }
    else {
        return res.status(401).json({ message: "Email o contraseña incorrectos" });
    }
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
//# sourceMappingURL=main.js.map