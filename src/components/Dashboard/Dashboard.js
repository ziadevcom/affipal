import DashboardNavigation from "./DashboardNavigation/DashboardNavigation";
import DashboardContent from "./DahboardContent/DashboardContent";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="db">
      <DashboardNavigation />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
