import "./IconCheckbox.css";

function IconCheckbox({ label, icon, id, onClick, name, checked }) {
  function onChangeHandler(e) {
    onClick(e);
  }

  const inputOnly = (
    <label className="iconCheckbox__input-wrapper">
      <input
        onChange={onChangeHandler}
        id={id}
        type="radio"
        className="iconCheckbox__input"
        name={name}
        checked={checked}
      />
      <div className="inputCheckbox__svg-wrap">
        <img src={icon} alt="" />
      </div>
    </label>
  );
  if (!label) {
    return inputOnly;
  }
  return (
    <div className="iconCheckbox">
      <label className="iconCheckbox__label" htmlFor="unique">
        Scope Styles
      </label>
      {inputOnly}
    </div>
  );
}

export default IconCheckbox;
