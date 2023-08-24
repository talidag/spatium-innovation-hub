import "./Newsletter.scss";
import newsletter from "../../../assets/newsletter.svg";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <img src={newsletter} alt="" />
      <h1>Subcribe to our Newsletter</h1>
      <div className="newsletter__subscribe">
        <input
          type="email"
          className="newsletter__input"
          placeholder="Your Email"
        />
        <button className="newsletter__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
