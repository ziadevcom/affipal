import "./TextInput.css";
import PropTypes from "prop-types";

function TextInput({
  id,
  type,
  placeholder,
  onChange,
  value,
  error,
  label,
  step,
  min,
  max,
  className,
}) {
  return (
    <div className={`input ${className ? className : null}`}>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="input__field"
        step={step}
        min={min}
        max={max}
      />
      {/* <div className="input__error">{error && <p>{error}</p>}</div> */}
    </div>
  );
}

TextInput.defaultProps = {
  type: "text",
  className: "",
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
