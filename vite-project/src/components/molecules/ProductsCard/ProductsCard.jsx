import "./ProductsCard.scss";

const ProductsCard = ({
  image,
  title,
  about,
  description,
  className,
  description2,
}) => {
  return (
    <div className={`product__card ${className}`}>
      <div className="product__card__text">
        <h1 className="product__card__title">{title}</h1>
        <p className="product__card__about">{about}</p>
        <p className="product__card__description">{description}</p>
        {description2 && (
          <p className="product__card__description">{description2}</p>
        )}
      </div>
      <img src={image} alt="" className="product__card__image" />
    </div>
  );
};

export default ProductsCard;
