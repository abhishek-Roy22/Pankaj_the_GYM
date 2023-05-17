import "./Testimonials.scss";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import testimonial from "../../assets/testimonnial1.png";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials_container">
        <div className="testimonials_left">
          <span>TESTIMONIALS</span>
          <h1>
            WHAT THEY <br /> SAY ABOUT US
          </h1>
          <p>
            I made the right choice by choosing the Fitclub and by choosing the
            right plan and program I already achieved my Ideal body!
          </p>
          <div className="author-con">
            <div className="auth">
              <span>MATHEW HENDRICKSON</span> - ENTREPRENEUR
            </div>
            <div className="btn">
              <button>
                <BsArrowLeft />
              </button>
              <button>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="testimonials_right">
          <div className="img">
            <img src={testimonial} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
