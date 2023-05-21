import "./TestimonialsCard.scss";

const TestimonialsCard = ({ review }) => {
  return (
    <div className="testimonialsCard">
      <img src={review.img} alt={review.title + "img"} />
      <h1>{review.title}</h1>
      <p>{review.desc}</p>
    </div>
  );
};

export default TestimonialsCard;
