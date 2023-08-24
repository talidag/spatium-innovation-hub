import "./Home.scss";
import Navbar from "../../components/molecules/Navbar/Navbar";
import HeaderContact from "../../components/molecules/HeaderContact/HeaderContact";
import Hero from "../../components/organisms/Hero/Hero";
import WhoWeAre from "../../components/organisms/WhoWeAre/WhoWeAre";
import WhoWeDo from "../../components/organisms/WhoWeDo/WhoWeDo";
import OurProducts from "../../components/organisms/OurProducts/OurProducts";
import OurLeadership from "../../components/organisms/OurLeadership/OurLeadership";

const Home = () => {
  return (
    <div>
      <HeaderContact />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhoWeDo />
      <OurProducts />
      <OurLeadership />
    </div>
  );
};

export default Home;
