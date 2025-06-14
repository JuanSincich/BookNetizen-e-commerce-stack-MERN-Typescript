"use strict";
// src/main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("./db/models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("¡Conectado a MongoDB Atlas con éxito!");
})
    .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error.message); //Mensaje de error
    process.exit(1); //Sale de la aplicación si no se puede conectar a la DB
});
app.use(express_1.default.json());
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        //1ro verificar si el usuario/email ya existe
        const existingUser = await User_1.default.findOne({ $or: [{ email }, { username }] });
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
        const salt = await bcryptjs_1.default.genSalt(10);
        const passwordHash = await bcryptjs_1.default.hash(password, salt);
        //guardado de usuario
        const newUser = new User_1.default({
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
    }
    catch (error) {
        console.error("Error de intento de registro");
        res.status(500).json({
            message: "Error interno del servidor al registrar usuario.",
            error: error.message,
        });
    }
});
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