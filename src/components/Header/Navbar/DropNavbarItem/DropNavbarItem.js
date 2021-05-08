import "./DropNavbarItem.css";
import Arrow from "./arrow.svg";
import { useState } from "react";

function DropNavbarItem({ text, children }) {
  const [showChild, setShowChild] = useState(false);

  function onClickDropableListItem() {
    setShowChild((prevState) => !prevState);
  }

  return (
    <button className="dropableNavbarItem" onClick={onClickDropableListItem}>
      <div>
        <p>{text}</p>
        <img src={Arrow} alt=" " className={showChild ? "rotate" : null} />
      </div>
      {showChild && <ul className="dropableNavbarItem__list">{children}</ul>}
    </button>
  );
}

export default DropNavbarItem;
