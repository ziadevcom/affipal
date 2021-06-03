import { InputCard } from "../InputCard/InputCard";
import EditorNumberInput from "../EditorInputs/EditorNumberInput/EditorNumberInput";
import ScopeStyles from "../ScopeStyles/ScopeStyles";
import SelectedElement from "../EditorInputs/SelectedElement/SelectedElement";
import ColorPickerInput from "../EditorInputs/ColorPickerInput/ColorPickerInput";

export default function EditorStylingContent({ element, setPreview, preview }) {
  return (
    <>
      <InputCard title="Global Options">
        <ScopeStyles setPreview={setPreview} preview={preview} />
        {element && (
          <InputCard title="Selected Element" layout="inside">
            <SelectedElement element={element} />
          </InputCard>
        )}
      </InputCard>
      <FontCustomizer element={element} preview={preview} />
      <InputCard title="Width">
        <EditorNumberInput
          name="width"
          element={element}
          label="Change Width:"
        />
      </InputCard>
    </>
  );
}

const FontCustomizer = ({ element, preview }) => {
  function changeFontSize(DesktopValue, MobileValue, preview) {
    if (preview == "mobile") {
      return element.style.setProperty("--mobileFontSize", MobileValue);
    }
    element.style.setProperty("--desktopFontSize", DesktopValue);
  }
  function changeColor(DesktopValue, MobileValue, preview) {
    if (preview == "mobile") {
      return element.style.setProperty("--mobileFontColor", MobileValue);
    }
    element.style.setProperty("--desktopFontColor", DesktopValue);
  }
  return element && element.nodeName !== "IMG" ? (
    <InputCard title="Font Styles">
      <ColorPickerInput
        title="Choose Color"
        preview={preview}
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
        preview={preview}
      />
    </InputCard>
  ) : null;
};
