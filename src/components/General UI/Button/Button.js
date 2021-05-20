import "./Button.css";
import PropTypes from "prop-types";
function Button({ onClick, style, children, variant }) {
  return (
    <button
      className={`affipal__button${
        variant == "white" ? " affipal__button--white" : ""
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Button;
