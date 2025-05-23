import { Box, Container, Grid2, Typography } from "@mui/material";

import SingleButton from "../button/SingleButton";
import theme from "../../../theme/Theme";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        marginBottom: "2rem",
      }}
    >
      <Container sx={{ py: "2rem" }} disableGutters>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid2 container spacing={2} columnSpacing={8}>
            <Grid2
              size={6}
              component="img"
              src="public\still-life-books-versus-technology.jpg"
              id="imagenDiv"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "2rem",
                overflow: "hidden",
              }}
            >
              {/* <Box
                component="div"
                id="imagenDiv"
                boxSizing="border-box"
                sx={{
                  borderRadius: "2rem",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={heroImg}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box> */}
            </Grid2>
            <Grid2
              size={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: " 400" }}>
                La librería del cibernauta
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: " 400" }}>
                Una librería en línea para los amantes de los libros en la era
                digital.
              </Typography>
              <SingleButton text="Conocer más" />
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}
