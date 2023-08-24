import "./WhoWeAre.scss";
import whoWeAre from "../../../assets/whoWeAre.png";
import whoWeAreEllipse from "../../../assets/whoWeAre-ellipse.svg";
import Description from "../../atoms/Description/Description";
import upArrow from "../../../assets/up-arrow.svg";

const WhoWeAre = () => {
  const whoWeAreDescription = "WHO WE ARE";
  const whoWeAreHeading =
    "We are a Team with Focus on Innovation and Improving Business Processes, People, and Systems";
  const whoWeAreText =
    "Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation, at scale.";
  return (
    <section className="whoWeAre">
      <div className="whoWeAre__img">
        <img src={whoWeAre} alt="" className="phone__img" />
        <img src={whoWeAreEllipse} alt="" className="ellipse" />
        <img src={upArrow} alt="" className="up__arrow" />
      </div>
      <div className="whoWeAre__text">
        <Description text={whoWeAreDescription} />
        <h1>{whoWeAreHeading}</h1>
        <p className="whoWeAre__text_p">{whoWeAreText}</p>
      </div>
    </section>
  );
};

export default WhoWeAre;
