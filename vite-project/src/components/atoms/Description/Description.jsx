import "./Description.scss";
import circle from "../../../assets/circle.svg";

const Description = ({ text }) => {
  return (
    <div className="description">
      <img src={circle} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Description;
