/* import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import theme from "../../theme/Theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SolidButton from "../uiComp/button/SolidButton";
import BannerBox from "../uiComp/banner/BannerBox";

const Librery = {
  id: 1,
  title: "La fuerza de su mirada",
  autor: "Tim Powers",
  img: "/public/libros/Tim_Powers_Gigamesh_Corominas_la_fuerza_de_su_mirada.jpg",
  cathegory: "Salud",
  price: "1000",
  pages: "480",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum et ex at finibus. Nullam eget libero vel nisi tincidunt mattis at sed ante. Praesent vestibulum dictum nulla. Fusce at tellus viverra, egestas enim ut, blandit mauris. Pellentesque laoreet dolor a lorem volutpat ornare. Sed efficitur ipsum nisi, tempor vehicula mauris cras.",
};

export default function BookPage({}) {
  return (
    <Container disableGutters>
      <Grid2 container columnSpacing={"2rem"}>
        <Grid2 component="img" src={Librery.img} size={4}></Grid2>
        <Grid2
          size={4}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          
          <Typography { useParams } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
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
    return <Typography>Libro no encontrado</Typography>; // Manejo de error si no se encuentra el libro
  }

  return (
    <Container disableGutters>
      <Box display="flex" gap="2rem">
        <Box component="img" src={book.img} width="200px" />

        <Box display="flex" flexDirection="column" gap="1rem">
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", color: theme.palette.secondary.main }}
          >
            {book.title}
          </Typography>
          <Typography>
            Autor:{" "}
            <Box component="a" href="#" sx={{ color: theme.palette.secondary.main, textDecoration: "none" }}>
              {book.autor}
            </Box>
          </Typography>
          <Typography>Categoría: {book.cathegory}</Typography>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            $ {book.price}
          </Typography>

          <Box display="flex" gap="2rem">
            <Box component="a" display="flex" alignItems="center">
              <LocalShippingIcon sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }} />
              Formas de envío
            </Box>
            <Box component="a" display="flex" alignItems="center">
              <PaymentIcon sx={{ color: theme.palette.secondary.main, mr: "0.5rem" }} />
              Formas de pago
            </Box>
          </Box>

          <Box display="flex" justifyContent="end" gap="1rem">
            <SolidButton text="Comprar ahora" />
            <SolidButton text="Agregar al carrito" style="light" />
          </Box>
        </Box>
      </Box>

      <Box py="2rem">
        <Typography sx={{ fontWeight: "600", color: theme.palette.secondary.main }}>
          Descripción
        </Typography>
        <Typography>{book.description}</Typography>
      </Box>
    </Container>
  );
}
 
            variant="h5"
            id="book-title"
            sx={{
              textTransform: "uppercase",
              color: theme.palette.secondary.main,
            }}
          >
            {Librery.title}
          </Typography>
          <Typography id="book-autor">
            Autor:{" "}
            <Box
              component={"a"}
              href=""
              sx={{
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              {Librery.autor}
            </Box>
          </Typography>
          <Typography id="book-category">
            Categoría: {Librery.cathegory}
          </Typography>
          <Typography
            id="book-price"
            variant="h5"
            sx={{ color: theme.palette.primary.main }}
          >
            $ {Librery.price}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <Box
              component="a"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {
                <LocalShippingIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              }
              Formas de envío
            </Box>
            <Box
              component="a"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {<PaymentIcon sx={{ color: theme.palette.secondary.main }} />}
              Formas de pago
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",

              justifyContent: "end",
            }}
          >
            <SolidButton text="Comprar ahora"></SolidButton>
            <SolidButton text="Agregar al carrito" style="light"></SolidButton>
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
            <Typography>{Librery.description}</Typography>
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
