import { Context } from "../../Editor";
import { useContext } from "react";
import "./ThemeChanger.css";
function ThemeChanger({ theme }) {
  const { setDesignTheme } = useContext(Context);
  function changeTheme() {
    setDesignTheme({ theme });
  }
  return (
    <div
      role="button"
      onClick={changeTheme}
      className="themeChanger"
      style={{ backgroundColor: theme, bordereRadius: "5px" }}
    ></div>
  );
}

export default ThemeChanger;
