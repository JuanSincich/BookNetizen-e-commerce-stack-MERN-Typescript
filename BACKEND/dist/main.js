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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware_1 = __importDefault(require("./middleware/authMiddleware"));
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
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        //busqueda de usuario
        const user = await User_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "credenciales inválidas" });
        }
        //comparación de contraseñas
        const isMatch = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({
                message: "Credenciales inválidas (email o contraseña incorrectos).",
            });
        }
        // Asegurarse de que JWT_SECRET esté definido en .env
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET no está definido en el archivo .env. Error de configuración.");
            return res.status(500).json({
                message: "Error interno del servidor: configuración de autenticación incompleta.",
            });
        }
        const payload = {
            id: user.id,
            username: user.username,
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            message: "¡Login exitoso!",
            token,
            user: {
                username: user.username,
                email: user.email, // Solo devuelve información segura
            },
        });
    }
    catch (error) {
        console.error("Error en el intento de login:", error);
        res.status(500).json({
            message: "Error interno del servidor al intentar iniciar sesión.",
        });
    }
});
app.get("/profile", authMiddleware_1.default, (req, res) => {
    // Aquí, sabemos que 'req.user' existe porque authenticateToken ya lo verificó y adjuntó.
    // Usamos 'as AuthenticatedRequest' para ayudar a TypeScript.
    const authReq = req;
    res.status(200).json({
        message: `¡Bienvenido a tu perfil, ${authReq.user?.username}!`, // Accedemos al username del token
        userId: authReq.user?.id, // Accedemos al ID del usuario del token
        data: "Esta es información confidencial solo para usuarios autenticados.",
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
//# sourceMappingURL=main.js.map