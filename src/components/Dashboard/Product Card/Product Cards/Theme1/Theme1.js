import "./Theme1.css";
import parse from "html-react-parser";

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

  function setElement(e) {
    e.preventDefault();
    setEl(e.target);
  }

  return (
    <div className="product-card">
      <div className="product__card__badge">Top Pick</div>
      <div className="product-card__image">
        <img src={productImage} alt="" />
        <div className="product-card__rating">
          <span href="#" className="rating__star-bg">
            <span style={{ width: `${productRating * 20}%` }}></span>
          </span>
          <small onClick={setElement} className="product-card__reviews">
            {productReviews} Reviews
          </small>
        </div>
      </div>
      <div className="product-card__features">
        <p className="product__card__price" onClick={setElement}>
          ${productPrice}
        </p>
        <h1 className="product-card__features__title">
          <a
            href={productURL}
            target="_blank"
            rel="noreferrer"
            onClick={setElement}
          >
            {productTitle}
          </a>
        </h1>
        {parse(productDescription)}
        <a href="#" className="product__card__button" onClick={setElement}>
          Buy Now
        </a>
      </div>
      <small onClick={setElement} className="product-card__tax">
        {productTax}
      </small>
    </div>
  );
}

export default Theme1;
