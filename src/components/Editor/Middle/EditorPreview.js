import Theme1 from "../../Dashboard/Product Card/Product Cards/Theme1/Theme1";
import "./EditorPreview.css";
import Frame from "react-frame-component";

export default function EditorPreview({ formData, setEl, preview }) {
  return (
    <div className="editor__preview">
      <PreviewFrame preview={preview}>
        <Theme1 data={formData} setEl={setEl} />
      </PreviewFrame>
    </div>
  );
}

function PreviewFrame({ children, preview, stylesheet }) {
  const widths = { mobile: "400px", desktop: "100%" };
  const CSS = `html {
    height: 100%;
  }
  
  body {
    width: 100%;
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
  }
  body * {
    padding: 0;
    margin: 0;
  }
  .frame-content {
    display: grid;
    place-items: center;
    padding: 1rem;
    box-sizing: border-box;
    overflow: visible;
    padding:30px;
  }
  [editable="true"]:hover {
    outline: 2px dashed green;
    outline-offset: 5px;
    cursor: pointer;
    opacity: 0.7;
    transition:none !important;
  }
  `;

  return (
    <Frame
      style={{ width: widths[preview] }}
      head={[<style key="css">{CSS}</style>, stylesheet]}
    >
      {children}
    </Frame>
  );
}
