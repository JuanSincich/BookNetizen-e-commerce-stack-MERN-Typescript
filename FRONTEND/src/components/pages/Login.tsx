import { Box, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import SolidButton from "../uiComp/button/SolidButton";

export default function Login() {
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
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField id="email" label="Correo electrónico" type="email" />
        <TextField id="password" label="Contraseña" type="password" />
        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
          sx={{ fontSize: "0.875rem" }}
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <SolidButton text="Ingresar" width="400px" align="center" />
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
        >
          Registrarse
        </Link>
      </Box>
    </Box>
  );
}
