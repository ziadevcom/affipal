import "./TextEditor.css";
import { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../../Editor";
import { InputCard } from "../../InputCard/InputCard";
import RichTextEditor from "../../../General UI/RichTextEditor/RichTextEditor";
function TextEditor() {
  const { setElementValueRef } = useContext(Context);
  const {
    setElementValue,
    ElementValue,
    type = "textarea",
  } = setElementValueRef.current;
  const [textareaValue, setTextareaValue] = useState();
  const TextEditorRef = useRef();
  let conditionalJSX;
  useEffect(() => {
    setElementValue(textareaValue);
  }, [textareaValue]);

  useEffect(() => {
    TextEditorRef.current.focus();
    setTextareaValue(ElementValue);
  }, [setElementValue]);

  function onChangeHandler(e) {
    setTextareaValue(e.target.value);
  }

  if (type == "quill") {
    conditionalJSX = (
      <RichTextEditor
        reference={TextEditorRef}
        text={textareaValue}
        onChange={(value) => {
          setElementValue(value);
        }}
      />
    );
  } else if (type == "number") {
    conditionalJSX = (
      <input
        type="number"
        ref={TextEditorRef}
        value={textareaValue}
        onChange={onChangeHandler}
        style={{ width: "100%" }}
        max="5"
        min="0.1"
        step="0.1"
      />
    );
  } else {
    conditionalJSX = (
      <input
        typee="text"
        ref={TextEditorRef}
        value={textareaValue}
        onChange={onChangeHandler}
        style={{ width: "100%" }}
      />
    );
  }

  return (
    <div className="editor__values__textEditor">
      <InputCard title="Edit Text">{conditionalJSX}</InputCard>
    </div>
  );
}

export default TextEditor;
