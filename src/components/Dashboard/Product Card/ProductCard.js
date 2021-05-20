import { useState, useEffect } from "react";
import "./ProductCard.css";
import DashboardRow from "../DashboardRow/DashboardRow";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { Route } from "react-router-dom";
import Form from "./Form/Form";
function ProductCard() {
  const [formData, setFormData] = useState({
    "product-title": "",
    "product-price": "",
    "product-tax-statement": "",
    "product-rating": "",
    "product-image": "",
    "no-of-reviews": "",
    "product-description": "",
  });

  return (
    <Route path="/product-card">
      <DashboardRow>
        <DashboardTitle text="Product Card" />
      </DashboardRow>
      <DashboardRow>
        <Form formData={formData} updateformData={setFormData} />
      </DashboardRow>
    </Route>
  );
}

export default ProductCard;
