import { Card, CardContent, CardMedia, Typography, Grid2 } from "@mui/material";

const reviews = [
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-infeliz-joven-caucasico-camiseta-azul-buen-peinado-barba-haciendo-expresion-extremadamente-asustada-pensando-saltarse-conferencia-profesor-enojado_176420-10359.jpg", // URL de la imagen
    name: "Juan Pérez",
    review:
      "Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/08/25/21/45/thinking-2681494_1280.jpg",
    name: "María González",
    review:
      "Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/hombre-caucasico-guapo-camiseta-roja-sonriendo-felizmente-aplaudiendo-sorprendio-regalo-cumpleanos-amigos-retrato-primer-individuo-afeitar-que-comparte-vibraciones-positivas_176420-10245.jpg",
    name: "Carlos López",
    review:
      "Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP. Acá se redacta una experiencia de usuario haciendo referencia a una de las userStories del MVP",
  },
];

const ReviewCards = () => {
  return (
    <Grid2 container spacing={3} justifyContent="center" paddingTop={2} margin={2}>
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
              <Typography variant="body2" color="text.secondary">
                {review.review}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ReviewCards;
