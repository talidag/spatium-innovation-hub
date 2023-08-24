import "./Hero.scss";
import Button from "../../atoms/Button/Button";

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
    </section>
  );
};

export default Hero;
