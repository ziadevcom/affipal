import { useState } from "react";
import useDidMountEffect from "../../../CustomHooks/useDidMountEffect/";
import "./ColorPickerInput.css";

function ColorPickerInput({ title, sideEffect, preview, element }) {
  const [mobileColor, setMobileColor] = useState("#248cdb");
  const [desktopColor, setDesktopColor] = useState("#248cdb");

  useDidMountEffect(() => {
    sideEffect(desktopColor, mobileColor, preview);
  }, [mobileColor, desktopColor]);

  function onChangeColor(e) {
    if (preview == "mobile") {
      return setMobileColor(e.target.value);
    }
    setDesktopColor(e.target.value);
  }
  return (
    <div className="colorInput">
      <label className="colorInput__title" htmlFor="color">
        {title}
      </label>
      <input
        onChange={onChangeColor}
        type="color"
        className="colorInput__input"
        id="color"
        value={preview == "mobile" ? mobileColor : desktopColor}
      ></input>
    </div>
  );
}

export default ColorPickerInput;
