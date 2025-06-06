"use strict";
// src/main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("¡Conectado a MongoDB Atlas con éxito!"); // Mensaje de éxito
})
    .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error.message); // Mensaje de error
    process.exit(1); // Sale de la aplicación si no se puede conectar a la DB
});
app.use(express_1.default.json());
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