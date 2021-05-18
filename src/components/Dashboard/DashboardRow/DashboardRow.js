import "./DashboardRow.css";
import PropTypes from "prop-types";
function DashboardRow({ children, style }) {
  return (
    <div className="db__body__row" style={style}>
      {children}
    </div>
  );
}

DashboardRow.defaultProps = {
  style: null,
};

export default DashboardRow;
