import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticateRequest extends Request {
  user?: { id: string; username: string };
}

//función del middleware de autenticación
const authenticateToken = (
  req: AuthenticateRequest,
  res: Response,
  next: NextFunction
) => {
  //Obtener el token del encabezado 'Authorization' de la petición
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    // 401 Unauthorized (No autorizado)
    return res
      .status(401)
      .json({ message: "Acceso denegado. Token no proporcionado." });
  }

  if (!process.env.JWT_SECRET) {
    console.error(
      "JWT_SECRET no está definido en el archivo .env. Error de configuración."
    );
    return res.status(500).json({
      message:
        "Error interno del servidor: configuración de autenticación incompleta.",
    });
  }

  // Verificar el token usando la clave secreta
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Error al verificar el token:", err.message);
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          message: "Token expirado. Por favor, inicie sesión de nuevo.",
        });
      }
      return res
        .status(403)
        .json({ message: "Token inválido o no autorizado." });
    }

    req.user = user as { id: string; username: string };

    next();
  });
};

export default authenticateToken;
