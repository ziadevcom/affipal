import { useState } from "react";
import "./InputCard.css";

export function InputCard({ title, children, type, layout, isOpen }) {
  if (!children) {
    console.warn("<InputCard/> Component should have at least one children.");
    return null;
  }
  const [Show, setShow] = useState(
    layout == "inside" || isOpen == false ? false : true
  );
  function toggleBody() {
    setShow(!Show);
  }
  return (
    <div
      className={`inputCard fadeIn  animated${
        layout == "inside" ? " inputCard-inside" : ""
      }`}
    >
      <div className="inputCard__header">
        <div>
          <b>{title || "Provide a title"}</b>
        </div>
        <button onClick={toggleBody} title={Show ? "Hide" : "Show"}>
          <svg
            viewBox="0 0 61 58"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" fill="none" fillRule="evenodd">
              <g id="071---Eye" fillRule="nonzero">
                <path
                  id="Shape"
                  d="m58.272 33.419c2.2448665-2.5183502 2.2448665-6.3196498 0-8.838-5.163-5.89-15.458-15.581-27.316-15.581s-22.156 9.691-27.317 15.581c-2.24486654 2.5183502-2.24486654 6.3196498 0 8.838 5.161 5.89 15.461 15.581 27.317 15.581s22.153-9.691 27.316-15.581z"
                  fill="#ecf0f1"
                />
                <circle id="Oval" cx="30.956" cy="29" fill="#2980ba" r="15" />
                <path
                  id="Shape"
                  d="m30.956 50c-12.278 0-22.856-9.976-28.069-15.922-2.57890016-2.8941907-2.57890016-7.2618093 0-10.156 5.213-5.946 15.791-15.922 28.069-15.922s22.855 9.976 28.068 15.922c2.5789002 2.8941907 2.5789002 7.2618093 0 10.156-5.213 5.946-15.791 15.922-28.068 15.922zm0-40c-11.49 0-21.576 9.549-26.565 15.24-1.90902252 2.1431992-1.90902252 5.3768008 0 7.52 4.989 5.691 15.075 15.24 26.565 15.24s21.575-9.549 26.564-15.24c1.9090225-2.1431992 1.9090225-5.3768008 0-7.52-4.989-5.691-15.075-15.24-26.564-15.24z"
                  fill="#f9c795"
                />
                <path
                  id="Shape"
                  d="m20 30c-.5522847 0-1-.4477153-1-1-.0005105-.7199762.0637484-1.4385387.192-2.147.0985828-.5434482.6190518-.9040828 1.1625-.8055s.9040828.6190518.8055 1.1625c-.1066068.5907013-.1601536 1.1897558-.16 1.79 0 .2652165-.1053568.5195704-.2928932.7071068s-.4418903.2928932-.7071068.2928932z"
                  fill="#fff"
                />
                <path
                  id="Shape"
                  d="m29.031 19.178c-.5177842.0004316-.9502617-.3944531-.9967882-.9101429-.0465264-.5156897.3082882-.9816053.8177882-1.0738571.7086712-.1294089 1.4276103-.194341 2.148-.194.5522847 0 1 .4477153 1 1s-.4477153 1-1 1c-.5996112.0001833-1.1980012.0540652-1.788.161-.0596278.0116026-.1202545.0172968-.181.017z"
                  fill="#fff"
                />
                <circle id="Oval" cx="31" cy="29" fill="#2c2f38" r="6" />
                <path
                  id="Shape"
                  className={Show ? null : "d-none"}
                  d="m59.12 57.12c-.5617198.5632738-1.3245087.8798486-2.12.8798486s-1.5582802-.3165748-2.12-.8798486l-52-52c-1.10143544-1.18203902-1.0689355-3.02403889.0735128-4.1664872 1.14244831-1.1424483 2.98444818-1.17494824 4.1664872-.0735128l11.46 11.46 4.15 4.15 2.91 2.91 5.61 5.61 27.87 27.87c1.1698135 1.1712702 1.1698135 3.0687298 0 4.24z"
                  fill="#c03a2b"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div
        className="inputCard__body"
        id={Show ? null : "inputCard__body-hidden"}
      >
        {children}
      </div>
    </div>
  );
}
