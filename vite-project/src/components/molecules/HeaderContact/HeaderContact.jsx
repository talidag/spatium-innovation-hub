import "./HeaderContact.scss";
import instagram from "../../../assets/Instagram.svg";
import twitter from "../../../assets/Twitter.svg";
import linkedin from "../../../assets/Linkedin.svg";
import facebook from "../../../assets/Facebook.svg";
import location from "../../../assets/location.svg";
import envelope from "../../../assets/envelope.svg";

const HeaderContact = () => {
  const socialLinks = [twitter, facebook, linkedin, instagram];
  const contactInfo = [
    {
      icon: location,
      text: "Global Plaza, Jabi. Abuja. NIG",
    },
    {
      icon: envelope,
      text: "spatiuminnovationhub@gmail.com",
    },
  ];

  return (
    <div className="header__contact">
      <ul className="social__links">
        {socialLinks.map((socialLink, index) => (
          <li key={index}>
            <img src={socialLink} alt="" />
          </li>
        ))}
        <div className="contact__us">
          {contactInfo.map((item, index) => {
            const { icon, text } = item;
            return (
              <div className="contact__us__element" key={index}>
                <img src={icon} />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default HeaderContact;
