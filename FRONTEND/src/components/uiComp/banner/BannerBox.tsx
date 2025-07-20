import { Box, Typography } from "@mui/material";
import theme from "../../../theme/Theme";

interface BannerBoxProps {
  flexDirection: string;
}

export default function BannerBox({ flexDirection }: BannerBoxProps) {
  return (
    <Box
      sx={{
        border: `2px solid ${theme.palette.primary.main} `,
        display: "flex",
        flexDirection: { flexDirection },
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: "2rem",
        marginBottom: "2rem",
        padding: "1rem",
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, white)`, // Usando los colores del tema
        backgroundSize: "400% 400%",
        animation: "backgroundAnimation 3s ease infinite",
        "@keyframes backgroundAnimation": {
          "0%": {
            backgroundPosition: "0% 100%", // Empieza desde la esquina inferior derecha
          },
          "50%": {
            backgroundPosition: "0% 0%", // Llega a la esquina superior izquierda
          },
          "100%": {
            backgroundPosition: "0% 100%", // Vuelve a la esquina inferior derecha
          },
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{ textTransform: "uppercase", fontWeight: "500" }}
      >
        banner
      </Typography>
      <Typography
        variant="h2"
        sx={{ textTransform: "uppercase", fontWeight: "500" }}
      >
        banner
      </Typography>
      <Typography
        variant="h2"
        sx={{ textTransform: "uppercase", fontWeight: "500" }}
      >
        banner
      </Typography>
    </Box>
  );
}
