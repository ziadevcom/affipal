import { useState } from "react";
import "./ScopeStyles.css";
import IconCheckbox from "../../General UI/CustomIconCheckbox/IconCheckbox";

function ScopeStyles({ setPreview, preview }) {
  function onChangePreview(e) {
    setPreview(e.target.id);
  }
  return (
    <div className="scopeStyles">
      <div className="scopeStyles__title">Change Preview</div>
      <div className="scopeStyles__body">
        <IconCheckbox
          icon="/mobile.svg"
          id="mobile"
          name="scopestyles"
          onClick={onChangePreview}
          checked={preview == "mobile" ? true : false}
        />
        <IconCheckbox
          icon="/desktop.svg"
          id="desktop"
          name="scopestyles"
          onClick={onChangePreview}
          checked={preview == "desktop" ? true : false}
        />
      </div>
    </div>
  );
}

export default ScopeStyles;
