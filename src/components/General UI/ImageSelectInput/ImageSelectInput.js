import "./ImageSelectInput.css";
export default function ImageSelectInput({
  formData,
  updateformData,
  image,
  name,
  value,
  style,
}) {
  const { cardTheme = 1 } = formData;

  function onChange(e) {
    const { value } = e.target;
    updateformData((previousState) => {
      const obj = { ...previousState };
      obj[name] = value;
      return obj;
    });
  }
  return (
    <div className="ImageSelectInput">
      <label className="ImageSelectInput__label" style={style}>
        <input
          className="option-input radio"
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={value == cardTheme ? true : false}
        />
        <img className="ImageSelectInput__image" src={image} alt="" />
      </label>
    </div>
  );
}

export function ImageSelectInputWrapper({ children, style }) {
  return (
    <div className="imageSelectInput-wrapper" style={style}>
      {children}
    </div>
  );
}
