import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="links">
      <h3 className="links__title">
        Join us on social media or contact us directly:
      </h3>
      <a
        href="https://github.com/JulienChevreauPro/my_hp_app/tree/main"
        target="_blank"
        className="links__button"
      >
        <img
          src="src/assets/images/icon_github.png"
          alt="GitHub logo"
          className="links__logo"
        />
      </a>
      <a href="https://twitter.com" target="_blank" className="links__button">
        <img
          src="src/assets/images/icon_twitterx.png"
          alt="TwitterX logo"
          className="links__logo"
        />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="links__button"
      >
        <img
          src="src/assets/images/icon_facebook.png"
          alt="Facebook logo"
          className="links__logo"
        />
      </a>
      <Link to="/contact" className="links__button">
        <img
          src="src/assets/images/icon_contact.png"
          alt="Contact us"
          className="links__logo"
        />
      </Link>
    </footer>
  );
}

export default Footer;
