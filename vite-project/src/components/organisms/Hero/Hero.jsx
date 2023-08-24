import "./Hero.scss";
import Button from "../../atoms/Button/Button";
import heroBottomBar from "../../../assets/hero-bottom-bar.svg";

const Hero = () => {
  const heroHeading = "Find The Perfect Digital Solution for your Business";
  const heroDescription =
    "Grow your business with our state of the art technology";
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__text">
          <h1>{heroHeading}</h1>
          <p>{heroDescription}</p>
        </div>
        <Button text="Learn More" />
      </div>
      <img src={heroBottomBar} alt="" className="hero__bar" />
    </section>
  );
};

export default Hero;
