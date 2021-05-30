import { useState } from "react";
import useDidMountEffect from "../../../CustomHooks/useDidMountEffect";
import "./EditorNumberInput.css";

function EditorNumberInput({
  sideEffect,
  name,
  element,
  label,
  step,
  preview,
}) {
  const [inputValue, setInputValue] = useState("");
  const [MobileInputValue, setMobileInputValue] = useState("");
  const [CSSUnit, setCSSUnit] = useState("px");
  const [DesktopValue, setDesktopValue] = useState("");
  const [MobileValue, setMobileValue] = useState("");
  useDidMountEffect(() => {
    if (!element) return;
    sideEffect(element, DesktopValue, MobileValue, preview);
  }, [DesktopValue, MobileValue]);

  useDidMountEffect(() => {
    if (inputValue > 0 || MobileInputValue > 0) {
      if (preview == "mobile") {
        setMobileValue(`${MobileInputValue}${CSSUnit}`);
      } else {
        setDesktopValue(`${inputValue}${CSSUnit}`);
      }
    }
  }, [inputValue, CSSUnit, MobileInputValue]);

  function onClickHandler(e) {
    setCSSUnit(e.target.innerText);
  }
  function onChangeHandler(e) {
    if (preview == "mobile") {
      return setMobileInputValue(e.target.value);
    }
    setInputValue(e.target.value);
  }
  return (
    <div className="editorNumberInput">
      <label htmlFor={name} className="editorNumberInput__label">
        {label}
      </label>
      <div className="editorNumberInput__input--wrapper">
        <input
          step={step}
          id={name}
          className="editorNumberInput__input"
          type="number"
          placeholder="25"
          onChange={onChangeHandler}
          min="1"
          value={preview == "mobile" ? MobileInputValue : inputValue}
        />
        <button
          id={CSSUnit == "vw" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          vw
        </button>
        <button
          id={CSSUnit == "px" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          px
        </button>
        <button
          id={CSSUnit == "em" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          em
        </button>
      </div>
    </div>
  );
}

export default EditorNumberInput;
