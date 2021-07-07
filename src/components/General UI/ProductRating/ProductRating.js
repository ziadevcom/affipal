import React from "react";
import { useState, useContext, useRef } from "react";
import { Context } from "../../Editor/Editor";
import useDidMountEffect from "../../CustomHooks/useDidMountEffect";
import "./ProductRating.css";
function ProductRating({ rating = 5, className }) {
  const { setEl, setStylesRef, DesignTheme, setElementValueRef } = useContext(
    Context
  );
  const [ElementValue, setElementValue] = useState(rating);
  const [Styles, setStyles] = useState({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "block",
    backgroundImage: "url(/star-yellow.svg)",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "left center",
    height: "var(--size)",
    backgroundSize: "var(--size) var(--size)",
    width: `calc(var(--size)*${ElementValue})`,
  });
  const [render, forceRender] = useState();
  const thisElement = useRef();

  useDidMountEffect(() => {
    setStyles((prevStyles) => {
      return { ...prevStyles, width: `calc(var(--size)*${ElementValue})` };
    });
  }, [ElementValue]);

  useDidMountEffect(() => {
    setElementValueRef.current = {
      setElementValue,
      ElementValue,
      type: "number",
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
      className={`product-rating ${className ? className : ""}`}
      style={{ "--size": "16px" }}
    >
      <div
        className="product-rating-bg"
        style={{
          position: "relative",
          display: "inline-block",
          backgroundImage: "url(/star.svg)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "left center",
          verticalAlign: "middle",
          height: "var(--size)",
          width: "80px",
          backgroundSize: "var(--size) var(--size)",
          textAlign: "center",
          margin: "auto",
          width: "calc(var(--size)*5)",
        }}
      >
        <div ref={thisElement} onClick={setElement} style={Styles}></div>
      </div>
    </div>
  );
}

export default ProductRating;
