import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlogList from "./pages/BlogList/BlogList";
import Blog from "./pages/Blog/Blog";
import Button from "./components/atoms/Button/Button";
import HeaderContact from "./components/molecules/HeaderContact/HeaderContact";
import Navbar from "./components/molecules/Navbar/Navbar";
import Footer from "./components/organisms/Footer/Footer";

const App = () => {
  return (
    <>
      <HeaderContact />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/blog/" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
