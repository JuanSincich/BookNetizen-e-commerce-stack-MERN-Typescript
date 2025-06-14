import { Schema, model } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  passwordHash: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
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
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
