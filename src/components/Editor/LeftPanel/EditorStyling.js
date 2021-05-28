import "./EditorStyling.css";
import { EditorHeader, ClosePanel } from "../Editor";
import { useState } from "react";
import EditorStylingContent from "./EditorStylingContent";

function EditorStyling({ El }) {
  const [ShowPanel, setShowPanel] = useState(true);

  return (
    <div className={`editor__styles${ShowPanel ? "" : " width0"}`}>
      <div className="overflow-wrap">
        <EditorHeader heading="CSS Styles" img="/colors.svg" />
        <div className="panel-content-wrapper respect-overflow">
          <EditorStylingContent element={El} />
        </div>
        <ClosePanel setShowPanel={setShowPanel} />
      </div>
    </div>
  );
}

export default EditorStyling;
