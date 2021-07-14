import React from "react";
import { useState, useContext, useRef } from "react";
import { Context } from "../../Editor/Editor";
import useDidMountEffect from "../../CustomHooks/useDidMountEffect";
import "./ProductImage.css";
function ProductImage({
  src = "/affipal-image-404.png",
  className,
  alt = "product image",
  size = "150px",
}) {
  const { setEl, setStylesRef, DesignTheme, setElementValueRef } = useContext(
    Context
  );
  const [ElementValue, setElementValue] = useState(src);
  const [Styles, setStyles] = useState({
    maxWidth: size,
  });
  const [render, forceRender] = useState();
  const thisElement = useRef();

  useDidMountEffect(() => {
    setElementValueRef.current = {
      setElementValue,
      ElementValue,
    };
    setEl({ selectedElement: thisElement.current });
  }, [render]);

  useDidMountEffect(() => {
    setStyles((prev) => {
      if (!prev) return null;
      const color = "--fontColor";
      const { [color]: removedProperty, ...newState } = prev;
      return { ...newState };
    });
  }, [DesignTheme]);

  function setElement(e) {
    e.preventDefault();
    setElementValue(ElementValue);
    setStylesRef.current = setStyles;
    forceRender(Math.random());
  }

  return (
    <div
      editable="true"
      className={`product-image-wrapper ${className ? className : ""}`}
    >
      <img
        onClick={setElement}
        ref={thisElement}
        src={ElementValue}
        alt={alt}
        style={Styles}
        onError={() => setElementValue("/affipal-image-404.png")}
      />
    </div>
  );
}

export default ProductImage;
