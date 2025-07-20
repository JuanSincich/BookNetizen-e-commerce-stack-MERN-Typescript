import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import theme from "../../theme/Theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
/* import FormLabel from "@mui/material/FormLabel"; */
import SolidButton from "../uiComp/button/SolidButton";
import BannerBox from "../uiComp/banner/BannerBox";

const Librery = {
  id: 1,
  title: "La fuerza de su mirada",
  autor: "Tim Powers",
  img: "/public/libros/Tim_Powers_Gigamesh_Corominas_la_fuerza_de_su_mirada.jpg",
  cathegory: "salud",
  price: "1000",
  pages: "480",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum et ex at finibus. Nullam eget libero vel nisi tincidunt mattis at sed ante. Praesent vestibulum dictum nulla. Fusce at tellus viverra, egestas enim ut, blandit mauris. Pellentesque laoreet dolor a lorem volutpat ornare. Sed efficitur ipsum nisi, tempor vehicula mauris cras.",
};

export default function BookDelivPage() {
  return (
    <Container disableGutters>
      <Grid2
        id="payPage"
        container
        spacing={2}
        sx={{
          padding: "1rem",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "5px",
        }}
      >
        <Grid2 size={8}>
          <Stack spacing={2}>
            {/* Datos de producto */}
            <Box sx={{}}>
              <Typography variant="h5"> Datos del producto</Typography>
            </Box>
            <Box
              id="productDates"
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <Box
                component="img"
                src={Librery.img}
                sx={{ width: "160px", maxHeight: "320" }}
              ></Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography sx={{ display: "flex", gap: 1 }}>
                  {"Título: "}
                  <Box sx={{ textTransform: "uppercase" }}>{Librery.title}</Box>
                </Typography>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  {"Precio: "}
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      color: theme.palette.primary.main,
                    }}
                  >
                    ${Librery.price}
                  </Box>
                </Typography>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  {"Cantidad: "}
                  <Box sx={{ textTransform: "uppercase" }}></Box>
                </Typography>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  {"Subtotal: "}
                  <Box sx={{ textTransform: "uppercase" }}></Box>
                </Typography>
              </Box>
            </Box>
            {/* Forma de envío*/}
            <Box sx={{ paddingBottom: "1rem" }}>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Selecciona la forma de envío
              </Typography>
              <Box component="form">
                <FormControl sx={{ width: "100%" }}>
                  <RadioGroup
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      width: "100%",
                    }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="delivery"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        borderRadius: "5px",
                        width: "100%",
                        padding: "0.5rem",
                        margin: "0",
                      }}
                      value="delivery"
                      control={
                        <Radio sx={{ marginLeft: "0rem", flexShrink: 0 }} />
                      }
                      label={
                        <Box sx={{ width: "100%" }}>Envío a domicilio</Box> //
                      }
                    />
                    <Box
                      component="a"
                      href=""
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        fontSize: "0.8rem",
                      }}
                    >
                      Editar o combiar domicilio de entrega
                    </Box>
                    <FormControlLabel
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        borderRadius: "5px",
                        width: "100%", // 🔹 Ocupa todo el ancho
                        padding: "0.5rem",
                        margin: "0",
                      }}
                      value="postal-pickup"
                      control={
                        <Radio sx={{ marginLeft: "0rem", flexShrink: 0 }} />
                      }
                      label={
                        <Box sx={{ width: "100%" }}>
                          Retiro en sucursal de correo
                        </Box> // 🔹 Mantiene el label alineado
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            {/* Forma de pago */}
            <Box sx={{}}>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Selecciona la forma de pago
              </Typography>
              <Box component="form">
                <FormControl sx={{ width: "100%" }}>
                  <RadioGroup
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      width: "100%",
                    }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="delivery"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        borderRadius: "5px",
                        width: "100%",
                        padding: "0.5rem",
                        margin: "0",
                      }}
                      value="delivery"
                      control={
                        <Radio sx={{ marginLeft: "0rem", flexShrink: 0 }} />
                      }
                      label={
                        <Box sx={{ width: "100%" }}>
                          Tajeta de crédito o débito
                        </Box> //
                      }
                    />

                    <FormControlLabel
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        borderRadius: "5px",
                        width: "100%", // 🔹 Ocupa todo el ancho
                        padding: "0.5rem",
                        margin: "0",
                      }}
                      value="postal-pickup"
                      control={
                        <Radio sx={{ marginLeft: "0rem", flexShrink: 0 }} />
                      }
                      label={
                        <Box sx={{ width: "100%" }}>Mercado pago</Box> // 🔹 Mantiene el label alineado
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <SolidButton text="Continuar" style="light" />
            </Box>
          </Stack>
        </Grid2>
        {/* Total del carrito */}
        <Grid2
          size={4}
          component="div"
          sx={{
            paddingLeft: "1rem",
            /* paddingRight: "1rem", */
            borderLeft: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h5" paddingBottom="16px">
              Total del carrito
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between  ",
                alignItems: "center",
              }}
            >
              <Typography>Subtotal del carrito</Typography>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.main }}
              >
                ${Librery.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between  ",
                alignItems: "center",
              }}
            >
              <Typography>Envío</Typography>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.main }}
              ></Typography>
            </Box>
            <Box
              sx={{
                paddingTop: "1rem",
                borderTop: `2px solid ${theme.palette.primary.main}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between  ",
                alignItems: "center",
              }}
            >
              <Typography>Total</Typography>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.main }}
              >
                ${Librery.price}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SolidButton text="Continuar" style="light" />
            </Box>

            <BannerBox flexDirection="column" />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
