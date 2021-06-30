import { useState } from "react";
import useDidMountEffect from "../../../CustomHooks/useDidMountEffect/";
import "./ColorPickerInput.css";

function ColorPickerInput({ title, sideEffect }) {
  const [Color, setColor] = useState("#248cdb");

  useDidMountEffect(() => {
    sideEffect(Color);
  }, [Color]);

  function onChangeColor(e) {
    setColor(e.target.value);
  }
  return (
    <div className="colorInput">
      {title && (
        <label className="colorInput__title" htmlFor="color">
          {title}
        </label>
      )}
      <input
        onChange={onChangeColor}
        type="color"
        className="colorInput__input"
        id="color"
        value={Color}
      ></input>
    </div>
  );
}

export default ColorPickerInput;
