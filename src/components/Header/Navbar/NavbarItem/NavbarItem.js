import "./NavbarItem.css";

function NavbarItem({ link, text }) {
  return (
    <li className="navbarItem">
      <a className="navbarItem__link" href={link || "#"}>
        {text}
      </a>
    </li>
  );
}

export default NavbarItem;
