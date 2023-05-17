import "./Why.scss";
import bg from "../../assets/bg2.png";
import { BsCheck2Circle } from "react-icons/bs";

const highlights = [
  {
    id: 1,
    title:
      "Personalized Training Programs - Our experienced trainers will work with you to create a custom training program that suits your fitness goals and needs.",
  },
  {
    id: 2,
    title:
      "State-of-the-Art Equipment - We have a wide range of equipment, including the latest machines and free weights, to help you achieve your fitness goals.",
  },
  {
    id: 3,
    title:
      "Clean and Safe Environment - We maintain a clean and safe gym environment, with regular cleaning and disinfecting protocols in place, so you can focus on your workout without any worries.",
  },
  {
    id: 4,
    title:
      "Nutritional Guidance - Our nutrition experts can provide you with personalized guidance on your diet and help you develop healthy eating habits that complement your fitness routine.",
  },
  {
    id: 5,
    title:
      "Affordable Membership Plans - We offer a range of membership plans to fit your budget and lifestyle, so you can enjoy all the benefits of our gym without breaking the bank.",
  },
];

const Why = () => {
  return (
    <div className="why" id="why">
      <div className="why_container">
        <div className="why_left">
          <div className="image">
            <img src={bg} alt="img" loading="lazy" />
          </div>
        </div>
        <div className="why_right">
          <span>SOME REASONS</span>
          <h1>Why Choose Us?</h1>
          {highlights.map((highlight) => (
            <div className="highlights" key={highlight.id}>
              <BsCheck2Circle className="icon" />
              <p>{highlight.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
