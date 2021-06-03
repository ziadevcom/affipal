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
    <div id="productCard" className="product-card">
      <style>{css}</style>
      <div
        editable="true"
        onClick={setElement}
        className="product__card__badge"
      >
        Top Pick
      </div>
      <div className="product-card__image">
        <img onClick={setElement} editable="true" src={productImage} alt="" />
        <div className="product-card__rating">
          <span href="#" className="rating__star-bg">
            <span style={{ width: `${productRating * 20}%` }}></span>
          </span>
          <p
            editable="true"
            onClick={setElement}
            className="product-card__reviews"
          >
            {productReviews} Reviews
          </p>
        </div>
      </div>
      <div className="product-card__features">
        <p
          editable="true"
          className="product__card__price"
          onClick={setElement}
        >
          ${productPrice}
        </p>
        <h1 className="product-card__features__title">
          <a
            href={productURL}
            target="_blank"
            rel="noreferrer"
            onClick={setElement}
            editable="true"
          >
            {productTitle}
          </a>
        </h1>
        <div
          className="product-card__description"
          editable="true"
          onClick={setElement}
        >
          {parse(productDescription)}
        </div>
        <a
          editable="true"
          href="#"
          className="product__card__button"
          onClick={setElement}
        >
          Buy Now
        </a>
      </div>
      <div className="product-card__tax">
        <p editable="true" onClick={setElement}>
          {productTax}
        </p>
      </div>
    </div>
  );
}

export default Theme1;

const css = /*css*/ `
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700;800;900&display=swap");

  .product-card {
    --productCardColor1: #27ae60;
    --productCardColor2: #fff;
    --width: 100%;
    --card-font: "Poppins", arial;
    --card-font-2: "Montserrat", arial;
    margin-top: 2rem;
    width: var(--width);
    display: flex;
    padding: calc(var(--width) / 20) 1rem;
    border-radius: 5px;
    background-color: var(--productCardColor2);
    position: relative;
    align-items: center;
    border: 1px solid var(--silver);
  }
  .product-card *{
  color: var(--desktopFontColor);
  } 
  .product-card__image {
    margin-top: 1rem;
    width: 25%;
    text-align: center;
    align-self: flex-start;
  }
  .product-card__image img {
    max-width: 60%;
  }
  .product-card__features {
    width: 65%;
    margin-left: 20px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }
  .product-card__features__title a {
    --desktopFontSize: clamp(1rem, 1rem + 2vw, 24px);
    --desktopFontColor: var(--productCardColor1);
    font-size: var(--desktopFontSize);
    line-height: 1.5;
    font-weight: 700;
    font-family: var(--card-font);
    text-decoration: none;
  }
  .product-card__features__title {
    display: block;
    margin-bottom: 10px;
  }
  .product-card__description {
    --desktopFontSize:1rem;
    --desktopFontColor: unset;
    font-family: var(--card-font-2);
  }
  .product-card__description * {
    pointer-events:none;
  }
  .product-card__description p {
    font-size: var(--desktopFontSize);
    font-family: var(--card-font-2);
    line-height: 1.7;
    margin: 0.5rem 0;
  }
  .product-card__description ul,
  .product-card__description ol {
    list-style-position: inside;
    font-family: var(--card-font-2);
    margin: 0.6rem 0;
  }
  .product-card__description ul li,
  .product-card__description ol li {
    font-size: var(--desktopFontSize);
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .product__card__price {
    --desktopFontSize: 1.3rem;
    font-size: var(--desktopFontSize);
    font-family: var(--card-font-2);
    --desktopFontColor: unset;
    font-weight: bold;
    margin-bottom: 5px;
  }

  /* Star Rating */
  .product-card__rating {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 12px;
    flex-direction: column;
    align-self: flex-end;
  }
  .rating__star-bg {
    position: relative;
    display: inline-block;
    background-image: url(/star.svg);
    background-repeat: repeat-x;
    background-position: left center;
    vertical-align: middle;
    height: 16px;
    width: 80px;
    background-size: 16px 16px;
    text-align: center;
    margin: auto;
  }
  .rating__star-bg span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-image: url(/star-yellow.svg);
    background-repeat: repeat-x;
    background-position: left center;
    height: 16px;
    width: 80px;
    background-size: 16px 16px;
  }
  .product-card__reviews {
    --desktopFontSize: 10px;
    font-size: var(--desktopFontSize);
    font-family: var(--card-font-2);
    padding-top: 10px;
  }

  /* Tax */
  .product-card__tax p {
    --desktopFontSize: 10px;
    --desktopFontColor: rgb(75, 79, 82);
    font-size: var(--desktopFontSize);
    font-family: var(--card-font-2);
    position: absolute;
    bottom: 15px;
    left: 25px;
    font-style: italic;
  }

  /* Button */
  .product__card__button {
    background-color: var(--productCardColor1);
    --desktopFontSize: 15px;
    --desktopFontColor: white;
    font-size: var(--desktopFontSize);
    border: none;
    cursor: pointer;
    padding: 15px 25px;
    font-family: var(--card-font);
    font-weight: 500;
    border-radius: 50px;
    text-align: right;
    text-decoration: none;
    align-self: flex-end;
    overflow: hidden;
  }
  a.product__card__button:active {
    transform: scale(0.9);
  }

  .product__card__badge {
    --desktopFontSize: 15px;
    --desktopFontColor: white;
    font-size: var(--desktopFontSize);
    font-family: var(--card-font-2);
    position: absolute;
    top: -18px;
    left: -10px;
    display: inline-block;
    background-color: var(--productCardColor1);
    z-index: 500;
    padding: 10px 15px;
    line-height: 1rem;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.14);
    font-weight: bold;
  }
  .product__card__badge::after {
    content: " ";
    display: block;
    position: absolute;
    left: -10px;
    bottom: -7px;
    border-color: transparent var(--productCardColor1) transparent transparent;
    border-style: inset solid inset inset;
    border-width: 0 10px 7px;
    filter: brightness(50%);
  }

  @media screen and (max-width: 768px) {
    .product-card {
      width: 100% !important;
      flex-wrap: wrap;
    }
   
    .product__card__price {
      order: 2;
    }
    
    .product-card__image,
    .product-card__features {
      width: 100% !important;
      text-align: left;
    }
    .product-card__features {
      margin-left: 0;
    }
    
    .product-card__image img {
      width: 150px;
    }

    .product-card__tax,
    .product-card__rating,
    .product__card__badge {
      display: none;
    }
    /*button */
    .product__card__button {
      margin-top: 5px;
      border-radius: 5px;
      width: 100%;
      align-self: flex-start;
      text-align: center;
      order: 3;
      padding: 15px 0px;
    }
    
   /*description - Tax - Title - Price*/
   .product-card__description p, .product-card__description ul li,
   .product-card__description ol li, .product-card__tax p, .product-card__features__title a, .product__card__price, .product__card__button {
     --mobileFontColor:var(--desktopFontColor);
     --mobileFontSize:inherit;
     font-size: var(--mobileFontSize);
     color:var(--mobileFontColor);
   }
  }

  /* Themes #card-theme-purple {
  --productCardColor1: #400093 !important;
}
#card-theme-blue {
  --card-color: #0083fe !important;
}
#card-theme-green {
  --card-color: #27ae60 !important;
}
#card-theme-green2 {
  --card-color: #00c200 !important;
}
#card-theme-black {
  --card-color: #121317 !important;
}
#card-theme-red {
  --card-color: #bc081b !important;
}
#card-theme-pink {
  --card-color: #fe0084 !important;
}
#card-theme-orange {
  --card-color: #f47c00 !important;
}

/* Misc */
  /* .theme-color {
  height: 40px;
  width: 40px;
  background: var(--card-color);
  margin: 10px 6px 0px 0px;
  border-radius: 2px;
}
*/

  /* Theme 1 */
  .card-theme-1 {
    padding: 2rem 1rem !important;
    box-shadow: none !important;
    border: 1px solid var(--silver) !important;
  }
  .card-theme-1 .image-section {
    /* align-self: center; */
    order: 1 !important;
  }
  .card-theme-1 .features {
    margin-left: 40px !important;
  }
  .card-theme-1 .features p {
    text-align: left !important;
    padding-top: 10px;
  }
  .card-theme-1 .card-price,
  .card-theme-1 .star-rating,
  .card-theme-1 .tax,
  .card-theme-1 .card-badge {
    display: none !important;
  }
`;
