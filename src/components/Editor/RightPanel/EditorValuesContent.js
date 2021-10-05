import TextInput from "../../General UI/TextInput/TextInput";
import { InputCard } from "../InputCard/InputCard";
import SelectedElement from "../EditorInputs/SelectedElement/SelectedElement";
import TextEditor from "./TextEditor/TextEditor";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Editor";

function EditorValuesContent({ setDesignData, DesignData }) {
  const { El, DesignWrapper } = useContext(Context);
  const [url, seturl] = useState(DesignData.productURL);
  useEffect(
    function () {
      setDesignData((prev) => {
        return { ...prev, productURL: url };
      });
    },
    [url]
  );
  function getCode() {
    let input = document.createElement("textarea");
    console.log(input);
    input.innerHTML = DesignWrapper.current.outerHTML;
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
      <div className="editor__values__textEditor">
        <InputCard title="Product URL">
          <input
            type="text"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
            style={{ width: "100%" }}
          />
        </InputCard>
      </div>

      {El && (
        <>
          <TextEditor />
          <InputCard title="Selected Element" isOpen={true}>
            <SelectedElement element={El} />
          </InputCard>
        </>
      )}
      <button className="getCode" onClick={getCode}>
        Get Code
      </button>
    </div>
  );
}
export default EditorValuesContent;
