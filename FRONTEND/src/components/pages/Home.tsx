import SearchBar from "../uiComp/searchBar/searchBar";
import Hero from "../uiComp/hero/Hero";
import Carousel from "../uiComp/carousel/Carousel";
import ReviewCards from "../uiComp/reviewsSection/Reviews";
import BannerHome from "../uiComp/banner/BannerHome";

/* import Login from "./Login";
import Register from "./Register"; */
// import BookPage from "./BookPage";
/* import BookDelivPage from "./BookDelivPage"; */

export default function Home() {
  return (
    <>
      <SearchBar />
      {/*      <AddBookPage /> */}
      <Hero />
      <Carousel title="Los mas visitados" />
      <Carousel title="Los más vendidos" />
      <BannerHome />
      <ReviewCards />
      <Carousel title="¡Porque te gusta la Ciencia Ficción!" />
    </>
  );
}
