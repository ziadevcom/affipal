import affipalLogo from "../../../../static/affipal-logo.png";
import "./Logo.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Logo({ className, logoSize }) {
  return (
    <Link to="/">
      <div className={`header__logo ${className || ""}`}>
        <img src={affipalLogo} alt="affipal logo" style={{ width: logoSize }} />
      </div>
    </Link>
  );
}

export default Logo;
