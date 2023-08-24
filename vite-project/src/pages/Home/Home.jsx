import "./Home.scss";
import Navbar from "../../components/molecules/Navbar/Navbar";
import HeaderContact from "../../components/molecules/HeaderContact/HeaderContact";
import Hero from "../../components/organisms/Hero/Hero";
import WhoWeAre from "../../components/organisms/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <HeaderContact />
      <Navbar />
      <Hero />
      <WhoWeAre />
    </div>
  );
};

export default Home;
