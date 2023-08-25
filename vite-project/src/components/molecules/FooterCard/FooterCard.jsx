import "./FooterCard.scss";

const FooterCard = ({ title, p1, p2, p3, p4 }) => {
  return (
    <div className="footer__card">
      <h3>{title}</h3>
      <p>{p1}</p>
      {p2 && <p>{p2}</p>}
      {p3 && <p>{p3}</p>}
      {p4 && <p>{p4}</p>}
    </div>
  );
};

export default FooterCard;
