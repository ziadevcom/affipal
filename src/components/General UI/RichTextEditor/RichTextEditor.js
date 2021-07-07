import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
import React from "react";

function RichTextEditor({ label, text, onChange, reference }) {
  // console.log(onChange, text,  reference)
  return (
    <div className="richTextEditor">
      {label && <p className="richTextEditor__label">{label}</p>}
      <ReactQuill
        value={text}
        onChange={onChange}
        ref={reference}
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
          ],
        }}
      />
    </div>
  );
}

export default RichTextEditor;
