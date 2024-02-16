import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="navigate">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
      <p className="copyright">
      © 2023 Ayoub hayda. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
