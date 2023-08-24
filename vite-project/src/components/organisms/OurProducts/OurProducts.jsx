import "./OurProducts.scss";
import TovaERP from "../../../assets/TovaERP.png";
import Jornyman from "../../../assets/Jornyman.png";
import ProductsCard from "../../molecules/ProductsCard/ProductsCard";

const OurProducts = () => {
  const ourProductsTitle = "Our Products";
  const ourProductsData = [
    {
      image: Jornyman,
      title: "Jornyman",
      about:
        "The Jornyman is an affordable new way to get your errands done quickly and save time.",
      description:
        "The Jornyman is not your regular market place. You go to a regular market place, but The Jornyman comes to you. And it brings the complete market place experience with it.",
      description2: "See more at https://jornyman.com/",
    },
    {
      image: TovaERP,
      title: "TovaERP",
      about:
        "Tova is an enterprise resource planning solution that enables organisations to manage their resources and automate their business activities and processes.",
      description:
        "Tova is made up of different software solutions that are integrated as a single business solution or as stand-alone modules catering to specific aspects of your business. You can also combine different modules to meet your needs",
    },
  ];
  const btnData = "Request Demo";
  return (
    <section className="our__products">
      <h1 className="our__products__title">{ourProductsTitle}</h1>
      <div className="our__products__cards">
        {ourProductsData.map((product, index) => {
          return (
            <ProductsCard
              {...product}
              key={index}
              className={`product-${index}`}
            />
          );
        })}
      </div>
      <button className="products__btn">{btnData}</button>
    </section>
  );
};

export default OurProducts;
