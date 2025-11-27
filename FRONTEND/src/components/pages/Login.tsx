import { Box, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import SolidButton from "../uiComp/button/SolidButton";
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";
import { useAuth } from "../../auth/AuthContext";

interface LoginProps {
  onCloseModal: () => void; // Función para cerrar el modal
}

export default function Login({ onCloseModal }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  // Capturamos los datos del formulario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log("REspuesta backend: ", response.data);
      const userData = response.data.user;
      login({
        id: userData.id, // ← Esto vendrá del backend
        username: userData.username,
        email: userData.email,
      });
      onCloseModal();
    } catch (err: any) {
      console.error("Error en login:", err);
      if (err.response && err.response.status === 401) {
        setError("Email o contraseña incorrectos");
      } else {
        setError("Error al intentar iniciar sesión");
      }
    }
  };

  // Llamada al backend
  /*   }; */
  return (
    <Box
      component="div"
      sx={{
        /* position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500, */
        width: "100%", // Usa 100% para que se adapte al contenedor padre del modal
        maxWidth: 500,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Accedé a Book Netizen
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          id="email"
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}
        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
          sx={{ fontSize: "0.875rem" }}
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <SolidButton
          type="submit"
          text="Ingresar"
          width="400px"
          align="center"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography variant="h5" textAlign="center">
          ¿No tenés cuenta?
        </Typography>
        <Link
          component={RouterLink}
          to="/Register"
          underline="hover"
          sx={{ fontSize: "1.2rem", fontWeight: "500" }}
          onClick={onCloseModal}
        >
          Registrarse
        </Link>
      </Box>
    </Box>
  );
}
