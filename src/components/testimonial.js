import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    name: "Rani Kumari",
    image: "rani_image_url", // Replace with actual image URL
    rating: 5,
    feedback:
      "Accurate Commodity’s tips have significantly boosted my trading success. Their timely and precise insights are invaluable. Highly recommend their services!",
  },
  {
    id: 2,
    name: "Rakesh Singhal",
    image: "rakesh_image_url", // Replace with actual image URL
    rating: 5,
    feedback:
      "I’ve seen remarkable growth in my portfolio thanks to Accurate Commodity’s expert guidance. Their support team is also incredibly helpful. A trusted partner for any trader.",
  },
  {
    id: 3,
    name: "Amit K",
    image: "amit_image_url", // Replace with actual image URL
    rating: 5,
    feedback:
      "Accurate Commodity provides the best market tips I’ve ever used. Their accuracy and dedication to clients are unmatched. I’ve never felt more confident in my trading decisions.",
  },
  {
    id: 4,
    name: "Priya S.",
    image: "priya_image_url", // Replace with actual image URL
    rating: 4,
    feedback:
      "The tips from Accurate Commodity helped me navigate a volatile market. Their expertise is evident, and their support is incredible.",
  },
  {
    id: 5,
    name: "Rahul V.",
    image: "rahul_image_url", // Replace with actual image URL
    rating: 5,
    feedback:
      "I've seen a consistent improvement in my trading performance thanks to their advice. Highly recommend for serious traders.",
  },
  {
    id: 6,
    name: "Suman T.",
    image: "suman_image_url", // Replace with actual image URL
    rating: 4,
    feedback:
      "Accurate Commodity has been a game-changer for my investments. Their accurate signals have led to steady profits.",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds per slide
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Inline CSS Styles
  const carouselContainerStyle = {
    padding: "50px 20px",
    backgroundColor: "#f8f9fa", // Light background color for contrast
    textAlign: "center",
  };

  const carouselTitleStyle = {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#343a40", // Darker text color
  };

  const carouselItemStyle = {
    padding: "20px",
    background: "#fff", // White background for each testimonial
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
    transition: "transform 0.3s", // Animation on hover
  };

  const carouselImageStyle = {
    width: "80px", // Fixed width for images
    height: "80px", // Fixed height for images
    borderRadius: "50%", // Circle shape
    marginBottom: "15px", // Spacing below the image
  };

  const carouselNameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const carouselRatingStyle = {
    marginBottom: "10px", // Space between rating and feedback
    color: "#FFD700", // Gold color for stars
  };

  const carouselFeedbackStyle = {
    fontSize: "0.9rem",
    color: "#6c757d", // Dark gray for feedback text
    lineHeight: "1.5", // Improve readability
  };

  return (
    <div style={carouselContainerStyle}>
      <h2 style={carouselTitleStyle}>What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div style={carouselItemStyle} key={testimonial.id}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={carouselImageStyle}
            />
            <h3 style={carouselNameStyle}>{testimonial.name}</h3>
            <div style={carouselRatingStyle}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index}>&#9733;</span> 
              ))}
            </div>
            <p style={carouselFeedbackStyle}>{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;