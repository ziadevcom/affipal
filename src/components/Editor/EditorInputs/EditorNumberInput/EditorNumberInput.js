import { useState } from "react";
import useDidMountEffect from "../../../CustomHooks/useDidMountEffect";
// import PropTypes from "prop-types";
import "./EditorNumberInput.css";

function EditorNumberInput({ sideEffect, name, element, label, step }) {
  const [inputValue, setInputValue] = useState("");
  const [CSSUnit, setCSSUnit] = useState("px");
  const [FinalValue, setFinalValue] = useState("");
  const [ForMobile, setForMobile] = useState(false);

  useDidMountEffect(() => {
    if (!element) return;
    sideEffect(element, FinalValue, ForMobile);
  }, [FinalValue]);

  useDidMountEffect(() => {
    if (inputValue > 0) {
      setFinalValue(`${inputValue}${CSSUnit}`);
    }
  }, [inputValue, CSSUnit]);

  function onClickHandler(e) {
    setCSSUnit(e.target.innerText);
  }
  function onChangeHandler(e) {
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
          value={inputValue}
          onChange={onChangeHandler}
          min="1"
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
      <label>
        Mobile
        <input type="checkbox" onChange={() => setForMobile((prev) => !prev)} />
      </label>
    </div>
  );
}

export default EditorNumberInput;
