import "./DesignMember.scss";

const DesignMember = ({ image, name, description }) => {
  return (
    <div className="design__member">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DesignMember;
