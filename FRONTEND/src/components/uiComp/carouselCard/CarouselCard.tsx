import { Link } from "react-router-dom"; // Importa Link
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "../../../theme/Theme";

// Definimos la interfaz para las props
interface CarouselCardProps {
  id: number; // Asegúrate de recibir el id como propiedad
  img: string;
  title: string;
  autor: string;
  price: number;
}

export default function CarouselCard({
  id,
  img,
  title,
  autor,
  price,
}: CarouselCardProps) {
  return (
    <Box>
      <Card sx={{ maxWidth: 180, width: "100%", marginBottom: "0.2rem" }}>
        <Link to={`/book/${id}`} style={{ textDecoration: "none" }}>
          {" "}
          {/* Agregar enlace */}
          <Box sx={{ height: "320px" }}>
            <CardMedia
              component="img"
              image={img}
              title={title}
              sx={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                textTransform: "uppercase",
                margin: "0px",
                height: "48px",
                color: theme.palette.secondary.main,
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ py: "0.5rem" }}>{autor}</Typography>
            <Typography
              sx={{ color: theme.palette.primary.main, fontWeight: "600" }}
            >
              ${price},00
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
}
