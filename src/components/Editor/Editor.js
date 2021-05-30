import "./Editor.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import EditorPreview from "./Middle/EditorPreview";
import EditorStyes from "./LeftPanel/EditorStyling";
import EditorValues from "./RightPanel/EditorValues";

export default function Editor(props) {
  const [Preview, setPreview] = useState("desktop");
  const [El, setEl] = useState();
  // const location = useLocation();
  // const { response: formData } = location.state;
  const formData = {
    productTitle: "Essentialism: The Disciplined Pursuit of Less",
    productImage:
      "https://images-na.ssl-images-amazon.com/images/I/41TVwg27ujL._SY344_BO1,204,203,200_.jpg",
    productURL: "https://www.amazon.com/dp/0804137382",
    productDescription:
      "<p>The Way of the Essentialist isn’t about getting more done in less time. It’s not about getting less done. It’s about getting only the right things done. It’s about the pursuit of the right thing, in the right way, at the right time.</p><ul><li>Good Read</li><li>Sasaki Lorem Ipsum Koni</li><li>Lorem Ipsum Shine</li></ul>",
    productTax:
      "We earn a commission if you click this link and make a purchase at no additional cost to you. 05/25/2021 08:04 pm GMT ",
    productPrice: "24.99",
    productReviews: "141",
    productRating: "4.5",
  };
  return (
    <div className="editor">
      <EditorStyes El={El} preview={Preview} setPreview={setPreview} />
      <EditorPreview formData={formData} setEl={setEl} preview={Preview} />
      <EditorValues />
    </div>
  );
}

export function EditorHeader({ heading, img }) {
  return (
    <div className="editorHeader respect-overflow">
      <img src={img} alt="" />
      {heading}
    </div>
  );
}
export function ClosePanel({ setShowPanel }) {
  function togglePanel() {
    setShowPanel((prev) => !prev);
  }

  return (
    <button onClick={togglePanel} className="closePanel">
      <img src="/arrow.svg" alt="" />
    </button>
  );
}
