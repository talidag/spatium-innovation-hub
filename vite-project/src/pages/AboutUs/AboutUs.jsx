import "./AboutUs.scss";
import Description from "../../components/atoms/Description/Description";
import aboutUsHeading from "../../assets/about-us-main.png";
import DesignMember from "../../components/organisms/DesignMember/DesignMember";
import designMemberPhoto from "../../assets/about-us-photo.png";

const AboutUs = () => {
  const designMemberData = {
    image: designMemberPhoto,
    name: "Masiyer Dakol",
    description:
      "He is the Lead UI/UX Designer. He is a big fan of English Football club Manchester United and loves to walk his dog at recreational hours",
  };
  return (
    <section className="aboutUs">
      <div className="aboutUs__title">
        <img src={aboutUsHeading} alt="" />
        <h1>About Us</h1>
      </div>
      <div className="aboutUs__heading">
        <h2>Our Product Design Team</h2>
      </div>
      <div className="aboutUs__team">
        <div className="aboutUs__member">
          <DesignMember {...designMemberData} />
        </div>
        <div className="aboutUs__description">
          <Description text="THE PRODUCT DESIGN TEAM" />
          <h4>
            Our focus is on creating highly usable and accessible products for
            our users
          </h4>
          <p className="aboutUs__description__text">
            As designers working as a team, we try to understand the context in
            which users may use our products. Then we identify and specify the
            users requirements. We base our projects upon an explicit
            understanding of the users, their tasks and environment so as to
            capture the whole user experience.
          </p>
          <p className="aboutUs__description__text">
            Here at Spatium at every phase of the design our product design team
            has User-Centered Design(UCD) implemented as an integral part of the
            development model. With a combination of User research, sketches,
            wireframes, user flows, wirefolws, customer journey maps and
            prototypes, our products are sure to stand out.
          </p>
          <a href="">click here to see our case studies</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
