import DashboardNavigationItem from "./DashboardNavigationItem";
import "./DashboardNavigation.css";
function Sidebar() {
  return (
    <nav className="db__navigation">
      <DashboardNavigationItem
        imageURL="/card.svg"
        name="Product Cards"
        link="/product-card"
      />
      <DashboardNavigationItem
        imageURL="/pros-and-cons.svg"
        name="Pros & Cons"
        link="/pros-cons"
      />
      <DashboardNavigationItem
        imageURL="/top-three.svg"
        name="Top Three"
        link="/top-3"
      />
      <DashboardNavigationItem
        imageURL="/list.svg"
        name="Product Tables"
        link="/product-tables"
      />
      <DashboardNavigationItem
        imageURL="/help.svg"
        name="Support"
        link="/support"
      />
    </nav>
  );
}

export default Sidebar;
