import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SolidButton from "../uiComp/button/SolidButton";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      id="registro"
      component="div"
      sx={{
        maxWidth: 500,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
          <TextField
            id="outlined-basic"
            label="Correo electrónico"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Nombre de usuario"
            variant="outlined"
          />
          <FormControl /* sx={{ m: 1, width: "25ch" }} */ variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
          </FormControl>
          <FormControl /* sx={{ m: 1, width: "25ch" }} */ variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Repite la Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword2 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword2
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Repite la contraseña"
            />
          </FormControl>
          <SolidButton
            type="submit"
            text="Registrarse"
            width="400px"
            align="center"
          />
        </Box>
      </Box>
    </Box>
  );
}
