import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import SolidButton from "../uiComp/button/SolidButton";
import axios from "axios";
import { API_URL } from "../../config/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (pass: string, confPass: string) => {
    if (pass === confPass) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const validateEmail = (emailToCheck: string) => {
    // Regex para un formato básico de email (puedes buscar regex más complejos si lo necesitas)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailToCheck));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    if (!isEmailValid) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      setLoading(false);
      return;
    }

    if (!passwordsMatch) {
      setErrorMessage("Las contraseñas no coinciden. Por favor, corrígelas.");
      setLoading(false);
      return;
    }

    const MIN_PASSWORD_LENGTH = 6; // Puedes ajustar este valor si lo deseas
    if (password.length < MIN_PASSWORD_LENGTH) {
      setErrorMessage(
        `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`
      );
      setLoading(false);
      return;
    }

    const formData = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      // ¡IMPORTANTE: ELIMINA ESTA LÍNEA en tu código final cuando tengas un backend real!
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Registro exitoso:", response.data);
      setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");

      // Opcional: Limpiar el formulario después de un registro exitoso
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(
            error.response.data.message || "Error del servidor al registrar."
          );
          console.error(
            "Error de respuesta del servidor:",
            error.response.data
          );
        } else if (error.request) {
          setErrorMessage(
            "No se pudo conectar con el servidor. Verifica tu conexión a internet."
          );
          console.error("No se recibió respuesta del servidor:", error.request);
        } else {
          // Algo más causó el error al configurar la solicitud
          setErrorMessage("Error al preparar la solicitud de registro.");
          console.error("Error al configurar la solicitud:", error.message);
        }
      }
    } finally {
      setLoading(false); // Desactivar la carga
    }

    /*     console.log("Datos del formulario de registro:");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword); */
  };

  return (
    <Box
      id="register-page-container"
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          maxWidth: 800,
          p: 4,
          /*   boxShadow: 3,
          borderRadius: 2, */
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Registrate en Book Netizen
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
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <TextField
            fullWidth
            id="register-email"
            label="Correo electrónico"
            variant="outlined"
            required
            value={email}
            onChange={handleEmailChange}
            error={!isEmailValid && email.length > 0} // Error si no es válido y ya se escribió algo
            helperText={
              !isEmailValid && email.length > 0
                ? "Ingresa un correo electrónico válido."
                : ""
            }
          />
          <TextField
            fullWidth
            id="register-username"
            label="Nombre de usuario"
            variant="outlined"
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="register-password">Contraseña</InputLabel>
            <OutlinedInput
              id="register-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    /*  onMouseUp={handleMouseUpPassword} */
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              error={
                !passwordsMatch &&
                password.length > 0 &&
                confirmPassword.length > 0
              }
            />
            {!passwordsMatch &&
              password.length > 0 &&
              confirmPassword.length > 0 && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ ml: 2, mt: 0.5 }}
                >
                  Las contraseñas no coinciden.
                </Typography>
              )}
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="register-confirm-password">
              Repite la Contraseña
            </InputLabel>
            <OutlinedInput
              id="register-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showConfirmPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    /* onMouseUp={handleMouseUpPassword} */
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Repite la contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </FormControl>
          <SolidButton
            type="submit"
            text={
              loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Registrarse"
              )
            }
            width="100%"
            align="center"
            disabled={loading}
          />
        </Box>
      </Box>
    </Box>
  );
}
