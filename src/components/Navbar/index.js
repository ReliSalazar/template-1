import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="py-2">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="logo mb-2 sm:mb-0">
          <NavLink to="/" className="brand">
            <img
              src="https://via.placeholder.com/150x50/FF70A6/000000"
              alt=""
            />
          </NavLink>
        </div>

        <div
          className="links flex gap-2 items-center sm:justify-end sm:ml-auto text-sm
        sm:text-base"
        >
          <NavLink
            to="/"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/portfolio"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/blog"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
