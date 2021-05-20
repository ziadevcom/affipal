import "./FormInput.css";
import PropTypes from "prop-types";

function FormInput({
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
}) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}{" "}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={error && { border: "solid 1px red" }}
        className="input__field"
        step={step}
        min={min}
        max={max}
      />
      <div className="input__error">{error && <p>{error}</p>}</div>
    </div>
  );
}

FormInput.defaultProps = {
  type: "text",
  className: "",
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
