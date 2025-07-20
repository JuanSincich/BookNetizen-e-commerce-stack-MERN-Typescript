import { Box } from "@mui/material";
import theme from "../../../theme/Theme";

const AutoCarousel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden", // Oculta el contenido que se desborda
        whiteSpace: "nowrap", // Evita que el texto se divida en varias líneas
        backgroundColor: "#000000", // Color de fondo
        color: theme.palette.secondary.main,
        fontWeight: "700",
        py: 1, // Padding vertical
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: "marquee 18s linear infinite", // Aplica la animación
          "@keyframes marquee": {
            "0%": {
              transform: "translateX(0%)", // Comienza desde la posición inicial
            },
            "100%": {
              transform: "translateX(-50%)", // Desplaza el contenido a la izquierda
            },
          },
        }}
      >
        {/* Contenido original */}
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>

        {/* Contenido duplicado */}
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Envios a Toda Argentina🚛
        </Box>
        <Box component="span" sx={{ mr: 4 }}>
          Paga en 3 o 6 Cuotas Sin Interes💳
        </Box>
      </Box>
    </Box>
  );
};

export default AutoCarousel;
