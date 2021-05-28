import { InputCard } from "../InputCard/InputCard";
import EditorNumberInput from "../EditorInputs/EditorNumberInput/EditorNumberInput";
export default function EditorStylingContent({ element }) {
  function changeFontSize(element, value, ForMobile) {
    if (ForMobile) {
      console.log("for mobile turned on");
      return element.style.setProperty("--mobileFontSize", value);
      // ["--mobileFontSize"] = value);
    }
    element.style.setProperty("--desktopFontSize", value);
  }

  return (
    <>
      <InputCard title="Font Size">
        <EditorNumberInput
          name="fontSize"
          element={element}
          sideEffect={changeFontSize}
          label="Use vw unit for better responsive design."
          step="0.1"
        />
      </InputCard>
      {/* <InputCard title="Width">
        <EditorNumberInput name="width" element={element} />
      </InputCard> */}
    </>
  );
}
