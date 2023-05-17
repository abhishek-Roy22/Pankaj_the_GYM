import "./Plans.scss";
import { BsCheck2Circle, BsFillHeartPulseFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="plans_container">
        <div className="plans_card">
          <span>
            <BsFillHeartPulseFill />
          </span>
          <h3>BASIC PLAN</h3>
          <span>₹ 1,000/mon</span>
          <p>
            <BsCheck2Circle /> 1.2 hours of excercises
          </p>
          <p>
            <BsCheck2Circle /> Free consultation to coaches
          </p>
          <p>
            <BsCheck2Circle /> Access to The Community
          </p>
          <button>
            <a href="#footer">Join now </a>
          </button>
        </div>
        <div className="plans_card">
          <span>
            <FaCrown />
          </span>
          <h3>PREMIUM PLAN</h3>
          <span>₹ 2,400/3-mon</span>
          <p>
            <BsCheck2Circle /> 1.2 hours of excercises
          </p>
          <p>
            <BsCheck2Circle /> Free consultation to coaches
          </p>
          <p>
            <BsCheck2Circle /> Access to The Community
          </p>

          <button>
            <a href="#footer">Join now </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
