import "./ProductDescription.css";
import { useState, useContext, useRef } from "react";
import { Context } from "../../Editor/Editor";
import parse from "html-react-parser";
import useDidMountEffect from "../../CustomHooks/useDidMountEffect";
function ProductDescription({ className, children }) {
  const { setEl, setStylesRef, DesignTheme, setElementValueRef } = useContext(
    Context
  );
  const [Styles, setStyles] = useState(null);
  const [ElementValue, setElementValue] = useState();
  const [render, forceRender] = useState();
  const thisElement = useRef();

  useDidMountEffect(() => {
    setElementValueRef.current = {
      setElementValue,
      ElementValue,
      type: "quill",
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
    setElementValue(thisElement.current.innerHTML);
    setStylesRef.current = setStyles;
    forceRender(Math.random());
  }
  return (
    <>
      <div
        ref={thisElement}
        id="product-description"
        className={className}
        onClick={setElement}
        editable="true"
        style={{ ...Styles }}
      >
        {ElementValue ? parse(ElementValue) : children}
      </div>
    </>
  );
}

export default ProductDescription;
