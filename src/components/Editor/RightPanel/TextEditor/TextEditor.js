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
  console.log(ElementValue);
  useEffect(() => {
    setElementValue(textareaValue);
  }, [textareaValue]);

  useEffect(() => {
    TextEditorRef.current.focus();
    setTextareaValue(ElementValue);
  }, [ElementValue, setElementValue]);
  console.log(ElementValue);
  function onChangeHandler(e) {
    setTextareaValue(e.target.value);
  }

  return (
    <div className="editor__values__textEditor">
      <InputCard title="Edit Text">
        {type !== "quill" ? (
          <textarea
            ref={TextEditorRef}
            value={textareaValue}
            onChange={onChangeHandler}
          />
        ) : (
          <RichTextEditor
            reference={TextEditorRef}
            text={ElementValue}
            onChange={(value) => {
              setElementValue(value);
            }}
          />
        )}
      </InputCard>
    </div>
  );
}

export default TextEditor;
