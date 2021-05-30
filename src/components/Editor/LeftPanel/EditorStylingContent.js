import { InputCard } from "../InputCard/InputCard";
import EditorNumberInput from "../EditorInputs/EditorNumberInput/EditorNumberInput";
import ScopeStyles from "../ScopeStyles/ScopeStyles";
export default function EditorStylingContent({ element, setPreview, preview }) {
  function changeFontSize(element, DesktopValue, MobileValue, preview) {
    if (preview == "mobile") {
      return element.style.setProperty("--mobileFontSize", MobileValue);
    }
    element.style.setProperty("--desktopFontSize", DesktopValue);
  }

  return (
    <>
      <InputCard title="Font Size">
        <ScopeStyles setPreview={setPreview} preview={preview} />
        <EditorNumberInput
          name="fontSize"
          element={element}
          sideEffect={changeFontSize}
          label="Use vw unit for better responsive design."
          step="0.1"
          preview={preview}
        />
      </InputCard>
      <InputCard title="Width">
        <EditorNumberInput name="width" element={element} />
      </InputCard>
    </>
  );
}
