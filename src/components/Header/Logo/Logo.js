import affipalLogo from "../../../../static/affipal-logo.png";
import "./Logo.css";
function Logo({ className, logoSize }) {
  return (
    <a href="/">
      <div className={`header__logo ${className || ""}`}>
        <img src={affipalLogo} alt="affipal logo" style={{ width: logoSize }} />
      </div>
    </a>
  );
}

export default Logo;
