import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Register from "./components/pages/Register";
import BookPage from "./components/pages/BookPage";
import Favourites from "./components/pages/Favourites";
import Layout from "./layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="register" element={<Register />} />
        <Route path="book/:id" element={<BookPage />} />
      </Route>
    </Routes>
  );
}

export default App;
