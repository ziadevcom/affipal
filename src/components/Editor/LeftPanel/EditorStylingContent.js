import { InputCard } from "../InputCard/InputCard";
import EditorNumberInput from "../EditorInputs/EditorNumberInput/EditorNumberInput";
import ScopeStyles from "../ScopeStyles/ScopeStyles";
import SelectedElement from "../EditorInputs/SelectedElement/SelectedElement";
import ColorPickerInput from "../EditorInputs/ColorPickerInput/ColorPickerInput";
import ThemeChanger from "../EditorInputs/ThemeChanger/ThemeChanger";
import { useContext } from "react";
import { Context } from "../Editor";

export default function EditorStylingContent() {
  const { El, setPreview, Preview } = useContext(Context);

  return (
    <>
      <ScopeStyles setPreview={setPreview} preview={Preview} />
      <InputCard title="Global Options">
        <ThemeChangers />
      </InputCard>
      <FontCustomizer element={El} />
      <InputCard title="Width Styles">
        <EditorNumberInput name="width" label="Change Width:" />
      </InputCard>
    </>
  );
}

const FontCustomizer = ({ element }) => {
  const { setStylesRef, Preview } = useContext(Context);
  const updateStyles = setStylesRef.current;

  function changeFontSize(DesktopValue, MobileValue) {
    console.log({ DesktopValue, MobileValue, Preview });
    if (Preview == "mobile") {
      updateStyles((prevStyles) => {
        console.log("mobile func");
        return { ...prevStyles, "--mobileFontSize": MobileValue };
      });
      return;
    }
    updateStyles((prevStyles) => {
      console.log("desktop func");
      return { ...prevStyles, "--desktopFontSize": DesktopValue };
    });
  }

  function changeColor(color) {
    updateStyles((prevStyles) => {
      return { ...prevStyles, "--fontColor": color };
    });
  }

  return element && element.nodeName !== "IMG" ? (
    <InputCard title="Font Styles">
      <ColorPickerInput
        title="Choose Color"
        sideEffect={changeColor}
        element={element}
      />
      <EditorNumberInput
        name="fontSize"
        element={element}
        sideEffect={changeFontSize}
        label="Change Font Size:"
        step="0.2"
        min="0.1"
        preview={Preview}
      />
    </InputCard>
  ) : null;
};

const ThemeChangers = () => {
  const { setDesignTheme } = useContext(Context);
  function changeTheme(color) {
    setDesignTheme({ theme: color });
  }
  return (
    <>
      <ColorPickerInput
        title="Customize Global Theme"
        sideEffect={changeTheme}
      />
      <div id="themeChangers">
        <ThemeChanger theme="#27AE60" />
        <ThemeChanger theme="#0083fe" />
        <ThemeChanger theme="#400093" />
        <ThemeChanger theme="#F47C00" />
        <ThemeChanger theme="#BC081B" />
        <ThemeChanger theme="#121317" />
        <ThemeChanger theme="#95a2ff" />
      </div>
    </>
  );
};
