import "./Footer.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_container">
        <div className="footer_top">
          <h2>
            <span>READY TO</span> LEVEL UP <br /> YOUR BODY <span>WITH US</span>
          </h2>
          <form className="input_email">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email here"
              required
            />
            <button type="submit">
              <a href="mailto:someone@example.com">Join Now </a>
            </button>
          </form>
        </div>
        <hr />
        <div className="footer_bottom">
          <p>
            Copyright &copy; 2014 - {date}. Made With 💓 by{" "}
            <a
              href="https://abhishke-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhishek Roy
            </a>
          </p>
          <div className="footer_icon">
            <AiFillFacebook className="icon facebook" />
            <AiFillInstagram className="icon instagram" />
            <AiFillTwitterCircle className="icon twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
