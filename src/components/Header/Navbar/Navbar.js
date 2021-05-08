import { useState } from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import DropNavbarItem from "./DropNavbarItem/DropNavbarItem";
import hamburger from "./square.svg";
import "./Navbar.css";
function Navbar({ className }) {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  function onClickHamburger() {
    setshowMobileMenu((previousState) => !previousState);
  }

  return (
    <>
      <button onClick={onClickHamburger} className="navbar__hamburger">
        <img
          alt="open menu"
          className="navbar__hamburger-image"
          src={hamburger}
        />
      </button>
      <nav
        style={showMobileMenu ? { display: "flex" } : null}
        className={`header__navbar animated fadeInLeft ${className || null}`}
      >
        <ul className="navbarItems">
          <NavbarItem link="#" text="Contact Us" />
          <NavbarItem link="google.com" text="Pricing" />
          <NavbarItem link="google.com" text="Login" />
          <DropNavbarItem text="Demo">
            <NavbarItem link="google.com" text="Product Cards" />
            <NavbarItem link="google.com" text="Tables" />
            <NavbarItem link="google.com" text="Top 3" />
          </DropNavbarItem>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
