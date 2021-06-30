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
  min,
}) {
  const [inputValue, setInputValue] = useState("");
  const [MobileInputValue, setMobileInputValue] = useState("");
  const [CSSUnit, setCSSUnit] = useState("px");
  const [DesktopValue, setDesktopValue] = useState("");
  const [MobileValue, setMobileValue] = useState("");
  useDidMountEffect(() => {
    if (!element) return;
    sideEffect(DesktopValue, MobileValue);
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
          step={step || 0.1}
          id={name}
          className="editorNumberInput__input"
          type="number"
          placeholder="25"
          onChange={onChangeHandler}
          value={preview == "mobile" ? MobileInputValue : inputValue}
          min={min || 0.1}
        />
        <button
          id={CSSUnit == "px" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          px
        </button>
        <button
          id={CSSUnit == "rem" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          rem
        </button>
        <button
          id={CSSUnit == "vw" ? "editorNumberInputButtonActive" : null}
          onClick={onClickHandler}
          className="editorNumberInputButton"
        >
          vw
        </button>
      </div>
    </div>
  );
}

export default EditorNumberInput;
