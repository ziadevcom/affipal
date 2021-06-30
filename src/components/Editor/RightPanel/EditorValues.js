import "./EditorValues.css";
import { EditorHeader, ClosePanel } from "../Editor";
import { useState } from "react";
import EditorValuesContent from "./EditorValuesContent";
function EditorValues({ parentElement, formData, setDesignData, DesignData }) {
  const [ShowPanel, setShowPanel] = useState(true);

  return (
    <div className={`editor__values ${ShowPanel ? "" : " width0"}`}>
      <div className="overflow-wrap">
        <EditorHeader heading="Text Editor" img="/write.svg" />
        <EditorValuesContent
          formData={formData}
          setDesignData={setDesignData}
          DesignData={DesignData}
        />
        <ClosePanel setShowPanel={setShowPanel} />
      </div>
    </div>
  );
}

export default EditorValues;
