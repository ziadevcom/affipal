import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

function Header({ className }) {
  return (
    <div className="header-container">
      <header className={`header ${className || ""}`}>
        <Logo logoSize="180px" />
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
