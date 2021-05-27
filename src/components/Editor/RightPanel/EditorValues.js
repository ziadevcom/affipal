import "./EditorValues.css";
import { EditorHeader, ClosePanel } from "../Editor";
import { useState } from "react";
import EditorValuesContent from "./EditorValuesContent";
function EditorValues() {
  const [ShowPanel, setShowPanel] = useState(true);

  return (
    <div className={`editor__values ${ShowPanel ? "" : " width0"}`}>
      <div className="overflow-wrap">
        <EditorHeader heading="Elements Text" img="/write.svg" />
        <div className="panel-content-wrapper respect-overflow">
          <EditorValuesContent />
        </div>
        <ClosePanel setShowPanel={setShowPanel} />
      </div>
    </div>
  );
}

export default EditorValues;
