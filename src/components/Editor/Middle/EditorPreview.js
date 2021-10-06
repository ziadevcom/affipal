// import Theme1 from "../../Dashboard/Product Card/Product Cards/Theme1/Theme1";
import Theme2 from "../../Dashboard/Product Card/Product Cards/Theme2/Theme2";
import "./EditorPreview.css";
import Frame from "react-frame-component";
import { Context } from "../Editor";
import { useContext } from "react";

export default function EditorPreview({}) {
  const { DesignTheme, DesignData, Preview, DesignWrapper } = useContext(
    Context
  );

  return (
    <div className="editor__preview">
      <PreviewFrame preview={Preview}>
        <Theme2
          DesignWrapper={DesignWrapper}
          DesignData={DesignData}
          DesignTheme={DesignTheme}
        />
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
    box-sizing: border-box;
  }
  .frame-content {
    display: grid;
    place-items: center;
    padding: 1rem;
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
    <>
      <Frame
        style={{ width: widths[preview] }}
        head={[
          <style key="css">{CSS}</style>,
          <link rel="stylesheet" href="/globalstyles.css" />,
        ]}
      >
        {children}
      </Frame>
      <a
        target="_blank"
        className="feedback"
        href="https://forms.gle/N2v8qnC8woJBKzZp8"
      >
        Click on this link for Complaint or Feedback
      </a>
    </>
  );
}
