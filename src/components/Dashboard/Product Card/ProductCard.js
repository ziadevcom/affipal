import "./ProductCard.css";
import DashboardRow from "../DashboardRow/DashboardRow";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { Route } from "react-router-dom";
import Form from "./Form/Form";
function ProductCard() {
  return (
    <Route path="/product-card">
      <DashboardRow>
        <DashboardTitle text="Product Card" />
      </DashboardRow>
      <DashboardRow>
        <Form />
      </DashboardRow>
    </Route>
  );
}

export default ProductCard;
