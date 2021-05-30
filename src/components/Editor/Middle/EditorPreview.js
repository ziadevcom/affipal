import Theme1 from "../../Dashboard/Product Card/Product Cards/Theme1/Theme1";
import "./EditorPreview.css";
import Frame from "react-frame-component";
function EditorPreview({ formData, setEl, preview }) {
  const widths = { mobile: "400px", desktop: "100%" };
  return (
    <div className="editor__preview">
      <Frame
        style={{ width: widths[preview] }}
        head={<link rel="stylesheet" href="/css.css" />}
      >
        <Theme1 data={formData} setEl={setEl} />
      </Frame>
    </div>
  );
}

export default EditorPreview;
