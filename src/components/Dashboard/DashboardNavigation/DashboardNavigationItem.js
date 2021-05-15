import React from "react";
import "./DashboardNavigationItem.css";
import { Link } from "react-router-dom";

function DashboardNavigationItem({ imageURL, link, alt, name }) {
  return (
    <Link className="db__navigation__link user-selection-disabled" to={link}>
      <img src={imageURL} alt={alt} />
      <span className="db__navigation__link__tooltip">{name}</span>
    </Link>
  );
}

export default DashboardNavigationItem;
