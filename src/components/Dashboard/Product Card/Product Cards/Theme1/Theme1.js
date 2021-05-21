import "./Theme1.css";

function Theme1() {
  return (
    <div className="product-card">
      <div className="product__card__badge">Top Pick</div>
      <div className="product-card__image">
        <img src="/demoimage.png" alt="" />
        <div className="product-card__rating">
          <span href="#" className="rating__star-bg">
            <span style={{ width: "86%" }}> </span>
          </span>
          <small className="product-card__reviews">3648 Reviews</small>
        </div>
      </div>
      <div className="product-card__features">
        <p className="product__card__price">$24.95</p>
        <h1 className="product-card__features__title">
          <a href="#" target="_blank">
            Glycolic Acid 20% Resurfacing Pads for Face &amp; Body with Vitamins
            B5, C &amp; E
          </a>
        </h1>
        <ul className="product-card__features__list">
          <li>
            Powerful antioxidants that will leave your skin fully hydrated and
            that will help repair photo-damage from UV rays.
          </li>
          <li>
            Allantoin helps to soothe and protect the skin while Green Tea and
            Calendula extracts act as anti-inflammatory and antioxidant agents.
          </li>
          <li>
            Each jar comes with 50 professional-grade non-woven textured pads
            with a convenient finger notch for easy application.
          </li>
          <li>
            QRxLabs products are Made in the USA in an FDA-registered facility.
            We only use professional-grade ingredients and never any silicone or
            parabens.
          </li>
        </ul>
        <a href="#" className="product__card__button">
          Buy Now
        </a>
      </div>
      <small className="product-card__tax">
        Price incl. tax, excl. shipping
      </small>
    </div>
  );
}

export default Theme1;
