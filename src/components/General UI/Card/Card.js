import "./Card.css";
import { Link } from "react-router-dom";
function Card({ title, children, link }) {
  let card = (
    <div className="card">
      <div className="card__header">
        <h2 className="card__header__h2">{title}</h2>
      </div>
      <div className="card__body">{children}</div>
    </div>
  );

  // adding a href wrapper if link props is provided
  if (link && typeof link === "string") {
    card = (
      <Link className="card-link-wrap nolink" to={link}>
        {card}
      </Link>
    );
  }

  return card;
}
export default Card;
