import { InputCard } from "../InputCard/InputCard";
import EditorNumberInput from "../EditorInputs/EditorNumberInput/EditorNumberInput";
import ScopeStyles from "../ScopeStyles/ScopeStyles";
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
      <BackgroundCustomizer element={El} />
      <PaddingCustomizer element={El} />
      <MarginCustomizer element={El} />
    </>
  );
}

const FontCustomizer = ({ element }) => {
  const { setStylesRef, Preview } = useContext(Context);
  const updateStyles = setStylesRef.current;

  function changeFontSize(DesktopValue, MobileValue) {
    if (Preview == "mobile") {
      updateStyles((prevStyles) => {
        return { ...prevStyles, "--mobileFontSize": MobileValue };
      });
      return;
    }
    updateStyles((prevStyles) => {
      return { ...prevStyles, "--desktopFontSize": DesktopValue };
    });
  }

  function changeColor(color) {
    updateStyles((prevStyles) => {
      return { ...prevStyles, color: color };
    });
  }

  function changeLineHeight(value) {
    updateStyles((prevStyles) => {
      return { ...prevStyles, lineHeight: value };
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
        step="0.1"
        min="0.1"
        preview={Preview}
      />
      <EditorNumberInput
        name="lineHeight"
        element={element}
        sideEffect={changeLineHeight}
        label="Change Line Height:"
        step="0.1"
        min="0.1"
        preview={Preview}
      />
    </InputCard>
  ) : null;
};
const MarginCustomizer = ({ element }) => {
  const { setStylesRef, Preview } = useContext(Context);
  const updateStyles = setStylesRef.current;

  function changeMargin(DesktopValue, MobileValue) {
    if (Preview == "mobile") {
      updateStyles((prevStyles) => {
        return { ...prevStyles, "--m-margin": MobileValue };
      });
      return;
    }
    updateStyles((prevStyles) => {
      return { ...prevStyles, "--d-margin": DesktopValue };
    });
  }

  return element ? (
    <InputCard title="Margin Styles">
      <EditorNumberInput
        id="margin"
        element={element}
        sideEffect={changeMargin}
        label="Change Margin:"
        step="0.1"
        min="0"
        preview={Preview}
        multiple={true}
      />
    </InputCard>
  ) : null;
};
const PaddingCustomizer = ({ element }) => {
  const { setStylesRef, Preview } = useContext(Context);
  const updateStyles = setStylesRef.current;

  function changePadding(DesktopValue, MobileValue) {
    if (Preview == "mobile") {
      updateStyles((prevStyles) => {
        return { ...prevStyles, "--m-padding": MobileValue };
      });
      return;
    }
    updateStyles((prevStyles) => {
      return { ...prevStyles, "--d-padding": DesktopValue };
    });
  }

  return element ? (
    <InputCard title="Padding Styles">
      <EditorNumberInput
        id="padding"
        element={element}
        sideEffect={changePadding}
        label="Change Padding:"
        step="0.1"
        min="0"
        preview={Preview}
        multiple={true}
      />
    </InputCard>
  ) : null;
};
const BackgroundCustomizer = ({ element }) => {
  const { setStylesRef } = useContext(Context);
  const updateStyles = setStylesRef.current;

  function changeBackgroundColor(color) {
    updateStyles((prevStyles) => {
      return { ...prevStyles, background: color };
    });
  }
  return element ? (
    <InputCard title="Background Color">
      <ColorPickerInput
        title="Choose Background Color"
        sideEffect={changeBackgroundColor}
        element={element}
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
