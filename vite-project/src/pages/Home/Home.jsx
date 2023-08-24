import "./Home.scss";
import Navbar from "../../components/molecules/Navbar/Navbar";
import HeaderContact from "../../components/molecules/HeaderContact/HeaderContact";

const Home = () => {
  return (
    <div>
      <HeaderContact />
      <Navbar />
    </div>
  );
};

export default Home;
