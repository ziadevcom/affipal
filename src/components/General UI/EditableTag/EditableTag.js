import "./EditableTag.css";
import { useState, useContext, useRef } from "react";
import { Context } from "../../Editor/Editor";
import useDidMountEffect from "../../CustomHooks/useDidMountEffect";
function EditableTag({ children, domProps, type, value }) {
  const { setEl, setStylesRef, DesignTheme, setElementValueRef } = useContext(
    Context
  );
  const [Styles, setStyles] = useState(null);
  const [ElementValue, setElementValue] = useState(value);
  const Tag = type;
  const thisElement = useRef();
  // console.log(ElementValue);
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
    setStylesRef.current = setStyles;
    setEl({ selectedElement: thisElement.current });
    setElementValueRef.current = { setElementValue, ElementValue };
  }

  return (
    <Tag
      ref={thisElement}
      {...domProps}
      onClick={setElement}
      editable="true"
      style={{ ...Styles }}
    >
      {ElementValue ? ElementValue : children}
    </Tag>
  );
}

export default EditableTag;
