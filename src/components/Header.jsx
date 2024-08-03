import { Link } from "react-router-dom";

function Header() {
  return (
      <nav className={`page-header teal lighten-2`}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Website Recipes</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>
      </nav>
  );
}

export default Header;
