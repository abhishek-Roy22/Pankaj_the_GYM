import "./Programms.scss";
import { CiDumbbell } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import { BsArrowRight, BsFire, BsFillHeartPulseFill } from "react-icons/bs";

const Programms = () => {
  return (
    <div className="programms" id="programms">
      <div className="programms_container">
        <h1>
          Explore Our <span>Programms</span> to shape you
        </h1>
        <div className="card_container">
          <div className="programms_card">
            <CiDumbbell className="icon" />
            <h3>Strength Training</h3>
            <p>
              In this Program, you trained to improve your Strength through many
              exercises.
            </p>
            <a href="#footer">
              <button>
                Join Now <BsArrowRight />
              </button>
            </a>
          </div>
          <div className="programms_card">
            <FaRunning className="icon" />
            <h3>Cardio Training</h3>
            <p>
              In this program, you are trained to do sequential moves in range
              of 20 until 30 minutes.
            </p>
            <a href="#footer">
              <button>
                Join Now <BsArrowRight />
              </button>
            </a>
          </div>
          <div className="programms_card">
            <BsFire className="icon" />
            <h3>Fat Burning</h3>
            <p>
              This program is suitable for you who wants to get rid of your fat
              and lose their weight.
            </p>
            <a href="#footer">
              <button>
                Join Now <BsArrowRight />
              </button>
            </a>
          </div>
          <div className="programms_card">
            <BsFillHeartPulseFill className="icon" />
            <h3>Health Fitness</h3>
            <p>
              This programs is designed for those who exercises only for there
              body fitness body building.
            </p>
            <a href="#footer">
              <button>
                Join Now <BsArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programms;
