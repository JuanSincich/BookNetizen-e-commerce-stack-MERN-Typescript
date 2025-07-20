import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import CarouselCard from "../carouselCard/CarouselCard";
import Librery from "../../Librery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../../theme/Theme";

interface CarouselProps {
  title: string;
}

export default function Carousel(props: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <Container
      id="carousel"
      disableGutters
      sx={{
        borderColor: theme.palette.secondary.main,
        overflow: "visible",
        px: 0,
        marginBottom: "2rem",
        "& .slick-track": {
          display: "flex",
          flexWrap: "nowrap",
        },
        "& .slick-slide": {
          display: "flex",
          justifyContent: "center",
          width: "230px",
        },
        "& .slick-dots": {
          position: "relative",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingBottom: "1rem",
          color: theme.palette.primary.main,
          fontWeight: "500",
        }}
      >
        {props.title}
      </Typography>
      <Box
        sx={{
          padding: "0.625rem 0rem 2rem 0rem",
          boxSizing: "border-box",
          border: "2px solid",
          borderColor: theme.palette.primary.main,
          borderRadius: "10px",
        }}
      >
        <Slider {...settings}>
          {Librery.map((libreyAtrib) => (
            <CarouselCard
              key={libreyAtrib.id}
              id={libreyAtrib.id}
              title={libreyAtrib.title}
              autor={libreyAtrib.autor}
              img={libreyAtrib.img}
              price={Number(libreyAtrib.price)}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
