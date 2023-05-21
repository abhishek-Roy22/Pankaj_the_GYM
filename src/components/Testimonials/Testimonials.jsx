import "./Testimonials.scss";
import TestimonialsCard from "./TestimonialsCard";
// import { BsArrowRight } from "react-icons/bs";
// import { BsArrowLeft } from "react-icons/bs";
// import testimonial from "../../assets/testimonnial1.png";

const reviews = [
  {
    id: 1,
    desc: "“I recently joined this gym and I’m so glad I did! The staff is friendly and welcoming, and the facilities are top-notch. I love the variety of equipment available, and the classes are fantastic. I’ve already seen an improvement in my fitness level since joining. Highly recommend!”",
    title: "Abhihsek Roy",
    img: "https://lh3.googleusercontent.com/a/AGNmyxZK1NZ5Se8QA6KP2XuQ86sYrHljPjgavp2UyjR8Qw=w45-h45-p-c0x00000000-rp-mo-br100",
  },
  {
    id: 2,
    desc: "This place literally changed my life. Awesome place and awesome people. Amit is my trainer, He made me reach 20 pushups from 0 in 10 days.",
    title: "Rohit Bhardwaj",
    img: "https://lh3.googleusercontent.com/a-/ACB-R5R-6TloIAfJeZ0a2oJSifpOAugYSr1XV8U7o_kuSw=w45-h45-p-c0x00000000-rp-mo-br100",
  },
  {
    id: 3,
    desc: "😇Very supportive parson 🙏🙏😇 …",
    title: "Surya Satyadev",
    img: "https://lh3.googleusercontent.com/a-/ACB-R5R-EA8lvmkDj5LknHOq7vC3h2rC06-NlMesJho=w45-h45-p-c0x00000000-rp-mo-br100",
  },
  {
    id: 4,
    desc: "Best gym in Hajipur and Sonpure",
    title: "Viraj Deva",
    img: "https://lh3.googleusercontent.com/a-/ACB-R5SuVxDl-l2q9-D4NNdKcRBRmtOsyN2UAAvjYrmJzx4=w45-h45-p-c0x00000000-rp-mo-br100",
  },
  {
    id: 5,
    desc: "Best gym in my sonepur",
    title: "Chunnu yadav fitness",
    img: "https://lh3.googleusercontent.com/a-/ACB-R5QPSPeO_PbfL9DBUhHtwsiYHJphuT6SzpXcE9xsBA=w45-h45-p-c0x00000000-rp-mo-ba2-br100",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials_container">
        {reviews.map((review) => (
          <TestimonialsCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
