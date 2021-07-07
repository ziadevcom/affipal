import "./SelectedElement.css";
import parser from "html-react-parser";
import { Context } from "../../Editor";
import { useContext } from "react";

function SelectedElement({ element }) {
  const { setElementValueRef } = useContext(Context);
  const { ElementValue } = setElementValueRef.current;
  return (
    <div className="selectedElement">
      <div className="selectedElement__row">
        <div>Element Type:</div>
        <div className="selectedElement__node">{`<${element.constructor.name}/>`}</div>
      </div>
      <div className="selectedElement__row">
        <div>Element Value:</div>
        <div className="selectedElement__value">
          {element.innerText || ElementValue || parser(element.outerHTML)}
        </div>
      </div>
    </div>
  );
}

export default SelectedElement;
