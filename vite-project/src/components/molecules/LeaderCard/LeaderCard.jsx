import "./LeaderCard.scss";
import addBtn from "../../../assets/add-button.svg";

const LeaderCard = ({ image, name, title }) => {
  return (
    <div className="leader">
      <img className="leader__img" src={image} alt="" />
      <div className="leader__text">
        <p className="leader__name">{name}</p>
        <p className="leader__title">{title}</p>
        <img className="leader__addBtn" src={addBtn} alt="" />
      </div>
    </div>
  );
};

export default LeaderCard;
