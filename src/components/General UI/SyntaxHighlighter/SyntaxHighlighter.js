import Highlight from "react-highlight";
import "./SyntaxHighlighter.css";
import { useRef } from "react";

function SyntaxHighlighter({ code, lang }) {
  const codeElement = useRef(null);

  function copyCode() {
    const el = document.createElement("textarea");
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    codeElement.current.textContent = "Copied";
    setTimeout(() => {
      codeElement.current.textContent = "Copy";
    }, 1000);
  }

  return (
    <div className="syntaxHiglighter">
      <Highlight className={`${lang ? lang + " " : ""}syntax-highlight`}>
        {code}
      </Highlight>
      <button
        ref={codeElement}
        onClick={copyCode}
        type="button"
        className="syntaxHiglighter__copy"
      >
        Copy
      </button>
    </div>
  );
}

export default SyntaxHighlighter;
