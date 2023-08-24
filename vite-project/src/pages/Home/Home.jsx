import "./Home.scss";
import Navbar from "../../components/molecules/Navbar/Navbar";
import HeaderContact from "../../components/molecules/HeaderContact/HeaderContact";
import Hero from "../../components/organisms/Hero/Hero";

const Home = () => {
  return (
    <div>
      <HeaderContact />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
