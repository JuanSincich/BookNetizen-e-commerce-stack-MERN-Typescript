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

  // 4. Verificar el token usando la clave secreta
  // jwt.verify(token, claveSecreta, callback)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // Si hay un error al verificar el token (ej. token inválido, expirado, malformado)
    if (err) {
      console.error("Error al verificar el token:", err.message);
      // Podemos dar mensajes más específicos para el cliente
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({
            message: "Token expirado. Por favor, inicie sesión de nuevo.",
          });
      }
      // Para cualquier otro error de token (inválido, malformado, etc.)
      return res
        .status(403)
        .json({ message: "Token inválido o no autorizado." });
    }

    // Si el token es válido, adjuntamos la información del usuario a la petición (req.user)
    // El 'user' que obtenemos aquí es el payload del token que firmamos (id, username).
    req.user = user as { id: string; username: string }; // Casteamos para asegurar el tipo en TypeScript

    // Finalmente, pasamos el control al siguiente middleware o a la función de la ruta
    next();
  });
};

export default authenticateToken;
