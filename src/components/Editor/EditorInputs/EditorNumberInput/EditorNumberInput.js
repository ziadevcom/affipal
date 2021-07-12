import { useState } from "react";
import useDidMountEffect from "../../../CustomHooks/useDidMountEffect";
import "./EditorNumberInput.css";

function EditorNumberInput({
  sideEffect,
  name,
  element,
  label,
  step,
  id,
  preview,
  min,
  multiple,
}) {
  const [inputValue, setInputValue] = useState(
    multiple ? { top: 0, right: 0, bottom: 0, left: 0 } : ""
  );
  const [DesktopValue, setDesktopValue] = useState("");
  const [MobileInputValue, setMobileInputValue] = useState(
    multiple ? { top: 0, right: 0, bottom: 0, left: 0 } : ""
  );
  const [MobileValue, setMobileValue] = useState("");
  const [CSSUnit, setCSSUnit] = useState("px");
  const [isMultiple, setIsMultiple] = useState(multiple);
  const [chained, setChained] = useState({ isChained: true, chainedValue: 0 });
  useDidMountEffect(() => {
    if (!element) return;
    sideEffect(DesktopValue, MobileValue);
  }, [DesktopValue, MobileValue]);

  useDidMountEffect(() => {
    if (isMultiple) {
      if (preview == "mobile") {
        setMobileValue(() => {
          return Object.values(MobileInputValue)
            .map((value) => {
              return `${value}${CSSUnit}`;
            })
            .join(" ");
        });
      } else {
        setDesktopValue(() => {
          return Object.values(inputValue)
            .map((value) => {
              return `${value}${CSSUnit}`;
            })
            .join(" ");
        });
      }
      return;
    }
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

  function multiInputOnChangeHandler(e) {
    function updateMultiInputState(prevState) {
      if (chained) {
        for (let key in prevState) {
          prevState[key] = e.target.value;
        }
        setChained((prev) => {
          return { ...prev, chainedValue: e.target.value };
        });
        return { ...prevState };
      }
      prevState[e.target.name] = e.target.value;
      return { ...prevState };
    }
    if (preview == "mobile") {
      return setMobileInputValue(updateMultiInputState);
    }
    return setInputValue(updateMultiInputState);
  }

  const props = {
    single: {
      step: step || 0.1,
      id: name,
      className: "editorNumberInput__input",
      type: "number",
      placeholder: "25",
      onChange: onChangeHandler,
      value: preview == "mobile" ? MobileInputValue : inputValue,
      min: min || 0.1,
    },
    multiple: {
      step: step || 0.1,
      id: name || id,
      className: "editorNumberInput__input editorNumberInput__input--multiple",
      type: "number",
      placeholder: "25",
      min: min || 0.1,
      onChange: multiInputOnChangeHandler,
      value: function (name) {
        if (chained.isChained) {
          return chained.chainedValue;
        }
        if (preview == "mobile") {
          return MobileInputValue[name];
        }
        return inputValue[name];
      },
    },
  };

  const inputJSX = !multiple ? (
    <input {...props.single} />
  ) : (
    <>
      <div className="multiInputWrapper">
        <input
          {...props.multiple}
          name="top"
          value={props.multiple.value("top")}
        />
        <p>Top</p>
      </div>
      <div className="multiInputWrapper">
        <input
          {...props.multiple}
          name="right"
          value={props.multiple.value("right")}
        />
        <p>Right</p>
      </div>
      <div className="multiInputWrapper">
        <input
          {...props.multiple}
          name="bottom"
          value={props.multiple.value("bottom")}
        />
        <p>Bottom</p>
      </div>
      <div className="multiInputWrapper">
        <input
          {...props.multiple}
          name="left"
          value={props.multiple.value("left")}
        />
        <p>Left</p>
      </div>
    </>
  );

  return (
    <div
      className={`editorNumberInput ${
        multiple ? "editorNumberInput--multiInput" : ""
      }`}
    >
      <label htmlFor={name} className="editorNumberInput__label">
        {label}
      </label>
      <div className="editorNumberInput__input--wrapper">
        {inputJSX}
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
        {multiple && (
          <button
            className="multiInputLinkButton"
            id={chained ? "multiInputLinkButtonActive" : null}
            onClick={() => setChained((prev) => !prev)}
          >
            <img alt=" " src="/link.svg" />
          </button>
        )}
      </div>
    </div>
  );
}

export default EditorNumberInput;
