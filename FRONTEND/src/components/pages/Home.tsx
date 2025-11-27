import SearchBar from "../uiComp/searchBar/searchBar";
import Hero from "../uiComp/hero/Hero";
import Carousel from "../uiComp/carousel/Carousel";
import ReviewCards from "../uiComp/reviewsSection/Reviews";
import BannerHome from "../uiComp/banner/BannerHome";

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
