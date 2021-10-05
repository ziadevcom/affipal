import { parser } from "../../../../General UI/Functions/Funcs";
import minifyCssString from "minify-css-string";
import fs from "fs";
import EditableTag from "../../../../General UI/EditableTag/EditableTag";
import ProductDescription from "../../../../General UI/ProductDescription/ProductDescription";
const css = minifyCssString(
  fs.readFileSync(
    "src/components/Dashboard/Product Card/Product Cards/Theme1/Theme1.css",
    "utf8"
  )
);
import ProductRating from "../../../../General UI/ProductRating/ProductRating";
import ProductImage from "../../../../General UI/ProductImage/ProductImage";
function Theme1({ DesignData, DesignWrapper, DesignTheme, setEl }) {
  const {
    productDescription,
    productTitle,
    productURL,
    productReviews,
    productRating,
    productTax,
    productImage,
    productPrice,
  } = DesignData;
  console.log({
    productDescription,
    productTitle,
    productURL,
    productReviews,
    productRating,
    productTax,
    productImage,
    productPrice,
  });
  let description = parser(productDescription);

  return (
    <div
      id="productCard"
      className="product-card"
      ref={DesignWrapper}
      style={DesignTheme && { "--productCardColor1": DesignTheme.theme }}
      // editable="true"
    >
      <style>{css}</style>
      <EditableTag
        type="div"
        domProps={{ className: "product__card__badge" }}
        value="Top Selling"
      />
      <div className="product-card__image">
        <ProductImage size="150px" src={productImage} />
        <div className="product-card__rating">
          <ProductRating rating={productRating} />
          <EditableTag
            type="p"
            value={`${productReviews} Reviews`}
            domProps={{
              className: "product-card__reviews",
            }}
          />
        </div>
      </div>
      <div className="product-card__features">
        <EditableTag
          type="p"
          domProps={{
            className: "product__card__price",
          }}
          value={`$${productPrice}`}
        />

        <h1 className="product-card__features__title">
          <EditableTag
            domProps={{
              href: productURL,
              target: "_blank",
              rel: "noreferrer",
            }}
            type="a"
            value={productTitle}
          />
        </h1>
        <ProductDescription className="product-card__description">
          {description}
        </ProductDescription>
        <EditableTag
          domProps={{ href: "#", className: "product__card__button" }}
          type="a"
          value="Buy Now"
        />
      </div>
      <div className="product-card__tax">
        <EditableTag
          type="p"
          domProps={{ className: "product-card__tax_p" }}
          value={productTax}
        />
      </div>
    </div>
  );
}

export default Theme1;
