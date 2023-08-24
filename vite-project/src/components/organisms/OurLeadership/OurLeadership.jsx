import "./OurLeadership.scss";
import LeaderCard from "../../molecules/LeaderCard/LeaderCard";
import blessing from "../../../assets/blessing.png";
import famodimu from "../../../assets/famodimu.png";
import nanle from "../../../assets/nanle.png";
import ikotun from "../../../assets/ikotun.png";

const OurLeadership = () => {
  const ourLeadershipTitle = "PROFESSIONAL PEOPLE";
  const ourLeadershipHeading = "Our Leadership Team";
  const ourLeadershipText =
    "We have experience working with large and small businessesand are ready to develop a targeted strategy and plan that’s right for you";
  const leadersData = [
    {
      image: ikotun,
      name: "Ikotun Adejuigbe Emmanuel",
      title: "CEO/MD",
    },
    {
      image: famodimu,
      name: "Famodimu Olusegun",
      title: "CFO",
    },
    {
      image: blessing,
      name: "Blessing Ehizojie- Philips",
      title: "Project Manager",
    },
    {
      image: nanle,
      name: "Nanle Luke Precious",
      title: "CTO",
    },
  ];
  return (
    <section className="our__leadership">
      <div className="our__leadership__wrapper">
        <p className="our__leadership__title">{ourLeadershipTitle}</p>
        <h2>{ourLeadershipHeading}</h2>
        <p className="our__leadership__text">{ourLeadershipText}</p>
      </div>
      <div className="our__leaders">
        {leadersData.map((leader, index) => (
          <LeaderCard {...leader} key={index} />
        ))}
      </div>
    </section>
  );
};

export default OurLeadership;
