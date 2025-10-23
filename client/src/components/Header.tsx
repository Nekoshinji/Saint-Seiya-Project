import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <div className="header-content">
      <Link to={"/"}>
        <img id="domain-sanctuaire" src="/public\SEIYA-LOGO .png" alt="Logo" />
      </Link>
    </div>
  );
}

export default Header;
