import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css"; // Import the custom CSS file

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="container">
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 0",
            listStyle: "none",
          }}
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            <li>
              <Link
                to="/"
                className={`nav-link ${isDarkMode ? "dark" : "light"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${isDarkMode ? "dark" : "light"}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isDarkMode ? "dark" : "light"}`}
              >
                Contact
              </Link>
            </li>
          </div>
          <li>
            <button onClick={toggleTheme} className="btn">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
