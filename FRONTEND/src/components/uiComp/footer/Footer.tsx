import { Container, Grid2, Typography, Box } from "@mui/material";
import theme from "../../../theme/Theme";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        padding: "4rem",
        paddingBottom: "0",
        marginTop: "4rem",
      }}
    >
      <Container>
        <Grid2 container spacing={6} justifyContent="center">
          {/* Columna 1: Acerca de */}
          <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Acerca de
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Quiénes somos
            </Typography>
          </Grid2>

          {/* Columna 2: Ayuda */}
          <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Ayuda
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Buscar libro
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Publicar libro
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Configuracion de mi cuenta
            </Typography>
          </Grid2>

          {/* Columna 3: Otros sitios */}
          <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Otros sitios
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Mis libros
            </Typography>
          </Grid2>

          {/* Columna 4: Redes sociales */}
          <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Redes sociales
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Facebook
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Twitter
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Instagram
            </Typography>
          </Grid2>

          {/* Columna 5: Mi cuenta */}
          <Grid2 size={{ xs: 12, sm: 8, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Mi cuenta
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Iniciar sesión
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Registrarse
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Configuración
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography
            variant="body2"
            align="center"
            p={5}
            sx={{ color: theme.palette.secondary.main }}
          >
            Copyright 2025 Book Netizen todos los derechos reservados. No
            country Grupo s24-47-n-webapp
          </Typography>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Footer;
