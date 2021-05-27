import Theme1 from "../../Dashboard/Product Card/Product Cards/Theme1/Theme1";
import "./EditorPreview.css";

function EditorPreview({ formData, setEl }) {
  return (
    <div className="editor__preview">
      <Theme1 data={formData} setEl={setEl} />
    </div>
  );
}

export default EditorPreview;
