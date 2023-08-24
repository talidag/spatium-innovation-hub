import "./WhoWeDoCard.scss";

const WhoWeDoCard = ({ title, text, className }) => {
  return (
    <div className={`whoWeDo__card ${className}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WhoWeDoCard;
