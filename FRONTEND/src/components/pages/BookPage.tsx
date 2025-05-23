/* import { useParams } from "react-router-dom";
import { Box, Container, Typography, Grid2 } from "@mui/material";
import theme from "../../theme/Theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SolidButton from "../uiComp/button/SolidButton";
import BannerBox from "../uiComp/banner/BannerBox";
import books from "../../data/books.json"; // Importar el listado de libros

export default function BookPage() {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const book = books.find((b) => b.id === Number(id)); // Buscar el libro en la lista

  if (!book) {
    return (
      <Container disableGutters>
        <Typography variant="h6" color="error">
          Libro no encontrado
        </Typography>
      </Container>
    ); // Manejo de error si no se encuentra el libro
  }

  return (
    <Container disableGutters>
      <Grid2 container columnSpacing={"2rem"}>
        <Grid2 component="img" src={book.img} size={4}></Grid2>
        <Grid2
          size={4}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: theme.palette.secondary.main,
            }}
          >
            {book.title}
          </Typography>
          <Typography>
            Autor:{" "}
            <Box
              component="a"
              href="#"
              sx={{
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              {book.autor}
            </Box>
          </Typography>
          <Typography>Categoría: {book.cathegory}</Typography>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            $ {book.price}
          </Typography>

          <Box display="flex" gap="2rem">
            <Box component="a" display="flex" alignItems="center">
              <LocalShippingIcon
                sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }}
              />
              Formas de envío
            </Box>
            <Box component="a" display="flex" alignItems="center">
              <PaymentIcon
                sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }}
              />
              Formas de pago
            </Box>
          </Box>

          <Box display="flex" justifyContent="end" gap="1rem">
            <SolidButton text="Comprar ahora" />
            <SolidButton text="Agregar al carrito" style="light" />
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <BannerBox flexDirection="column" />
        </Grid2>
        <Grid2 container sx={{ py: "2rem" }}>
          <Grid2 size={2}>
            <Typography
              sx={{ fontWeight: "600", color: theme.palette.secondary.main }}
            >
              Descripción
            </Typography>
          </Grid2>
          <Grid2 size={10}>
            <Typography>{book.description}</Typography>
          </Grid2>
          <Grid2 size={2}>
            <Typography
              sx={{ fontWeight: "600", color: theme.palette.secondary.main }}
            >
              Especificaciones
            </Typography>
          </Grid2>
          <Grid2 size={10}>
            <Typography></Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}
 */

import { useParams } from "react-router-dom";
import { Box, Container, Typography, Grid2 } from "@mui/material";
import theme from "../../theme/Theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SolidButton from "../uiComp/button/SolidButton";
import BannerBox from "../uiComp/banner/BannerBox";
import books from "../../data/books.json"; // Importar el listado de libros

export default function BookPage() {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const book = books.find((b) => b.id === (Number(id) || id)); // Buscar el libro en la lista

  console.log("ID en la URL:", id);
  console.log("ID del libro encontrado:", book?.id);

  return (
    <Container disableGutters>
      {!book ? (
        // Si no se encuentra el libro, renderizar algo vacío o diferente
        <Typography variant="h6" color="error">
          Libro no encontrado
        </Typography>
      ) : (
        <Grid2 container columnSpacing={"2rem"}>
          <Grid2 component="img" src={book.img} size={4}></Grid2>
          <Grid2
            size={4}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                color: theme.palette.secondary.main,
              }}
            >
              {book.title}
            </Typography>
            <Typography>
              Autor:{" "}
              <Box
                component="a"
                href="#"
                sx={{
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                }}
              >
                {book.autor}
              </Box>
            </Typography>
            <Typography>Categoría: {book.cathegory}</Typography>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              $ {book.price}
            </Typography>

            <Box display="flex" gap="2rem">
              <Box
                component="a"
                display="flex"
                alignItems="center"
                /*    sx={{
                  py: "0.2rem",
                  px: "0.5rem",
                  border: `2px solid ${theme.palette.secondary.main}`,
                  borderRadius: "5px",
                }} */
              >
                <LocalShippingIcon
                  sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }}
                />
                Formas de envío
              </Box>
              <Box
                component="a"
                display="flex"
                alignItems="center"
                /*  sx={{
                  py: "0.2rem",
                  px: "0.5rem",
                  border: `2px solid ${theme.palette.secondary.main}`,
                  borderRadius: "5px",
                }} */
              >
                <PaymentIcon
                  sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }}
                />
                Formas de pago
              </Box>
            </Box>

            <Box display="flex" justifyContent="end" gap="1rem">
              <SolidButton text="Comprar ahora" />
              <SolidButton text="Agregar al carrito" style="light" />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <BannerBox flexDirection="column" />
          </Grid2>
          <Grid2 container sx={{ py: "2rem" }}>
            <Grid2 size={2}>
              <Typography
                sx={{ fontWeight: "600", color: theme.palette.secondary.main }}
              >
                Descripción
              </Typography>
            </Grid2>
            <Grid2 size={10}>
              <Typography>{book.description}</Typography>
            </Grid2>
            <Grid2 size={2}>
              <Typography
                sx={{ fontWeight: "600", color: theme.palette.secondary.main }}
              >
                Especificaciones
              </Typography>
            </Grid2>
            <Grid2 size={10}>
              <Typography></Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      )}
    </Container>
  );
}
