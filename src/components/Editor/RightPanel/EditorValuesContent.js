import TextInput from "../../General UI/TextInput/TextInput";
import { InputCard } from "../InputCard/InputCard";
import SelectedElement from "../EditorInputs/SelectedElement/SelectedElement";
import TextEditor from "./TextEditor/TextEditor";
import { useContext, useState } from "react";
import { Context } from "../Editor";

function EditorValuesContent({ setDesignData, DesignData }) {
  const { El } = useContext(Context);

  // const onChange = (e) => {
  //   let key = e.target.name;
  //   let value = e.target.value;
  //   setDesignData((prevState) => {
  //     let previousFormData = prevState;
  //     previousFormData[key] = value;
  //     return { ...previousFormData };
  //   });
  // };
  function getCode() {
    let input = document.createElement("textarea");
    input.innerHTML = parentElement.current.outerHTML;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand("copy");
    document.body.removeChild(input);
    alert("Copied");
    return result;
  }

  return (
    <div className="panel-content-wrapper respect-overflow">
      {!El && (
        <div className="editor__values__note">
          <img src="/hello.svg" alt=" " />
          <p>Click on the element you want to customize to get started.</p>
        </div>
      )}

      {El && (
        <>
          <TextEditor />
          <InputCard title="Selected Element" isOpen={true}>
            <SelectedElement element={El} />
          </InputCard>
          <button className="getCode" onClick={getCode}>
            Get Code
          </button>
        </>
      )}
    </div>
  );
}
export default EditorValuesContent;
