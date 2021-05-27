import "./Theme1.css";
import parse from "html-react-parser";
import { useContext } from "react";

function Theme1({ data, setEl }) {
  const {
    productDescription,
    productTitle,
    productURL,
    productReviews,
    productRating,
    productTax,
    productImage,
    productPrice,
  } = data;

  return (
    <div className="product-card">
      <div className="product__card__badge">Top Pick</div>
      <div className="product-card__image">
        <img src={productImage} alt="" />
        <div className="product-card__rating">
          <span href="#" className="rating__star-bg">
            <span style={{ width: `${productRating * 20}%` }}></span>
          </span>
          <small className="product-card__reviews">
            {productReviews} Reviews
          </small>
        </div>
      </div>
      <div className="product-card__features">
        <p className="product__card__price" onClick={(e) => setEl(e.target)}>
          ${productPrice}
        </p>
        <h1 className="product-card__features__title">
          <a href={productURL} target="_blank" rel="noreferrer">
            {productTitle}
          </a>
        </h1>
        {parse(productDescription)}
        <a href="#" className="product__card__button">
          Buy Now
        </a>
      </div>
      <small className="product-card__tax">{productTax}</small>
    </div>
  );
}

export default Theme1;
