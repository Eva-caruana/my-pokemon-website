import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div>
        <Link to="/">
          <img src={logo} alt="logo pokemon" />
        </Link>
      </div>
      <div className="right-side-header">
        <Link to="/pokemon">
          <nav>Personnages</nav>
        </Link>
        <Link to="/type">
          <nav>Types</nav>
        </Link>
      </div>
    </header>
  );
};

export default Header;
