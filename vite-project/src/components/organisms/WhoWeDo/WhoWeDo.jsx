import Description from "../../atoms/Description/Description";
import WhoWeDoCard from "../../molecules/WhoWeDoCard/WhoWeDoCard";
import "./WhoWeDo.scss";

const WhoWeDo = () => {
  const whoWeDoDescription = "WHO WE DO";
  const whoWeDoHeading = "We Create Innovative Solutions for Industries";
  const whoWeDoText =
    "Here at Spatium Innovation Hub we know the importance of technology as a source of innovation and as a critical success factor for increased market competitiveness";
  const whoWeDoSmallText =
    "We provide professional and exemptional database management, process automation and enterprise applications. We offer a vast range of IT services and digital solutions such as web/multimedia design and mobile and web application development.";

  const whoWeDoCards = [
    {
      title: "Identity Management & Verification",
      text: "Our Identity Management solution is the authentication process of determining whether a person is who he or she claims to be.",
    },
    {
      title: "UI/UX Design",
      text: "Our team of trusted Web Designers help businesses create effective online presence that support their growth.",
    },
    {
      title: "Software Development",
      text: "Our Team Design and Develop Web-based and mobile applications for different sectors of the economy.",
    },
    {
      title: "IT Consulting & Advisory Services",
      text: "We offer IT consultancy to companies in the area of Business Intelligence (BI) and Enterprise Resource Planning (ERP).",
    },
  ];

  return (
    <section className="whoWeDo">
      <div className="whoWeDo__left">
        <Description text={whoWeDoDescription} />
        <h1>{whoWeDoHeading}</h1>
        <p className="whoWeDo__left__text">{whoWeDoText}</p>
        <p className="whoWeDo__left__small">{whoWeDoSmallText}</p>
      </div>
      <div className="whoWeDo__right">
        {whoWeDoCards.map((card, index) => {
          const { title, text } = card;
          return <WhoWeDoCard title={title} text={text} key={index} />;
        })}
      </div>
    </section>
  );
};

export default WhoWeDo;
