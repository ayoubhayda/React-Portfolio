import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [ShowModel, setShowModel] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("mode", dark ? "dark" : "light");
    if (dark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [dark]);

  return (
    <header className="header">
      <button
        onClick={() => {
          setShowModel(true);
        }}
        className="btn-modal icon-menu"
      />

      <div />

      <nav className="navbar">
        <ul className="navigate">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {ShowModel && (
        <div className="glass">
          <ul className="model">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>

            <button
              onClick={() => {
                setShowModel(false);
              }}
              className="btn-close-modal icon-clear"
            />
          </ul>
        </div>
      )}

      <button
        onClick={() => {
          setDark(!dark);
        }}
        className={`btn-mode ${dark? 'icon-sun1': 'icon-moon'}`}
      />
    </header>
  );
};

export default Header;
