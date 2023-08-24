import "./WhoWeDoCard.scss";

const WhoWeDoCard = ({ title, text }) => {
  return (
    <div className="whoWeDo__card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WhoWeDoCard;
