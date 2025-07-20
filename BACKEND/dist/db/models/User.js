"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true, // El email es obligatorio
        unique: true, // Cada email debe ser único en la base de datos
        lowercase: true, // Guarda el email siempre en minúsculas (útil para consistencia)
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true, // El hash de la contraseña es obligatorio
    },
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map