import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Box,
  Container,
} from "@mui/material";
import theme from "../../../theme/Theme";

const reviews = [
  {
    image:
      "https://img.freepik.com/foto-gratis/vista-lateral-personas-leyendo-juntas_23-2150059010.jpg?t=st=1741668596~exp=1741672196~hmac=5a1f1ba3529e90bd6897797f47961182c8b243cef87bfeea3dc5a30028152459&w=1060", // URL de la imagen
    name: "Juana Barahona",
    review:
      "Usar Book Netizen fue súper fácil y eficiente.  La plataforma es intuitiva y me dio mucha confianza en todo momento. ¡La recomiendo a cualquiera que busque libros físicos!",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/bonita-pareja-leyendo-libros-mientras-esta-sentado-suelo_114579-58552.jpg?t=st=1741668670~exp=1741672270~hmac=9b295010406774c3183cffe7b162217c175a838f9963dfc7aaebb83390290e19&w=1060",
    name: "julieta  Novikova",
    review:
      "Book Netizen fue la solución perfecta para encontrar libros. Me encantaron las herramientas para filtrar las opciones según mis necesidades. Además, la experiencia fue muy segura. ¡Definitivamente volveré a usarla!",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/alegre-joven-descansando-cafe-leyendo-libro-interesante-bebiendo-te_8353-6242.jpg?t=st=1741668755~exp=1741672355~hmac=1aedd6b7a874d87f5534862c59f6e6a35efb7fa42dac0d80b6f2f825794103bb&w=1060",
    name: "Diego Masri ",
    review:
      "La mejor decisión fue usar Book Netizen para buscar libros. Me sorprendió lo fácil que es encontrar libros. ¡10/10!",
  },
];

const ReviewCards = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        py: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Container disableGutters>
        <Grid2 container spacing={3} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={review.image}
                  alt={review.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {review.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {review.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default ReviewCards;
