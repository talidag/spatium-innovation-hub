import "./Footer.scss";
import FooterCard from "../../molecules/FooterCard/FooterCard";
import logoB from "../../../assets/logo-b.svg";
import twitterC from "../../../assets/twitter-c.svg";
import facebookC from "../../../assets/facebook-c.svg";
import instagramC from "../../../assets/instagram-c.svg";
import linkedinC from "../../../assets/linkedin-c.svg";

const Footer = () => {
  const aboutUs = {
    title: "About Us",
    p1: "Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation.",
  };
  const contactUs = {
    title: "Contact Us",
    span1: "Address",
    p1: ": Global Plaza, Jabi. Abuja. Nigeria",
    span2: "Phone",
    p2: ": +4522516882",
    span3: "Email",
    p3: ": spatiuminnovation@gmail.com",
  };
  const footerData = [
    {
      title: "Serivces",
      p1: "Software Development",
      p2: "Identity Management & Verification",
      p3: "IT Consulting & Advisory Services",
      p4: "UI/UX Design",
    },
    {
      title: "Quicklinks",
      p1: "Careers",
      p2: "Resources",
      p3: "Products",
      p4: "Blog",
    },
  ];

  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__aboutUs">
          <h3>{aboutUs.title}</h3>
          <img src={logoB} alt="" className="footer__aboutUs__logo" />
          <p>{aboutUs.p1}</p>
          <div className="aboutUs__socials">
            <img src={twitterC} alt="" />
            <img src={facebookC} alt="" />
            <img src={instagramC} alt="" />
            <img src={linkedinC} alt="" />
          </div>
        </div>
        <div className="footer__contactUs">
          <h3>{contactUs.title}</h3>
          <p>
            <span>{contactUs.span1}</span>
            {contactUs.p1}
          </p>
          <p>
            <span>{contactUs.span2}</span>
            {contactUs.p2}
          </p>
          <p>
            <span>{contactUs.span3}</span>
            {contactUs.p3}
          </p>
        </div>
        {footerData.map((item, index) => (
          <FooterCard {...item} key={index} />
        ))}
      </div>
      <hr></hr>
      <p className="footer__bottom">
        Copyright 2020. Spatium Innovation Hub. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
