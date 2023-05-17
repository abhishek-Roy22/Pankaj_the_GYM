import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("");
  const [textColor, setTextColor] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg("#fff");
      setTextColor("black");
    } else {
      setNavbarBg("transparent");
      setTextColor("#fff");
    }
  };

  return (
    <div className="navbar" id="navbar" style={{ backgroundColor: navbarBg }}>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav_link">
        <a style={{ color: textColor }} href="#hero">
          Home
        </a>
        <a style={{ color: textColor }} href="#programms">
          Programms
        </a>
        <a style={{ color: textColor }} href="#why">
          Why Us
        </a>
        <a style={{ color: textColor }} href="#plans">
          Plans
        </a>
        <a style={{ color: textColor }} href="#testimonials">
          Testimonials
        </a>
      </div>
      <div className="hamburger">
        {open ? (
          <AiOutlineClose
            style={{ color: textColor }}
            className="hamburger_icon"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <GiHamburgerMenu
            style={{ color: textColor }}
            className="hamburger_icon"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>

      {open && (
        <div className="mobile_menu">
          <a onClick={() => setOpen(!open)} href="#hero">
            Home
          </a>
          <a onClick={() => setOpen(!open)} href="#programms">
            Programms
          </a>
          <a onClick={() => setOpen(!open)} href="#why">
            Why Us
          </a>
          <a onClick={() => setOpen(!open)} href="#plans">
            Plans
          </a>
          <a onClick={() => setOpen(!open)} href="#testimonials">
            Testimonials
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
