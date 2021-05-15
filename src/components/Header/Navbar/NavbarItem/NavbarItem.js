import "./NavbarItem.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
function NavbarItem({ link, text }) {
  return (
    // <Router>
    <li className="navbarItem">
      <Link className="navbarItem__link" to={link || "#"}>
        {text}
      </Link>
    </li>
    // </Router>
  );
}

export default NavbarItem;
