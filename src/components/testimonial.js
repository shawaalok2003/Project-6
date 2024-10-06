import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rani Kumari",
    image: "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    rating: 5,
    feedback:
      "Accurate Commodity’s tips have significantly boosted my trading success. Their timely and precise insights are invaluable. Highly recommend their services!",
  },
  {
    id: 2,
    name: "Rakesh Singhal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    rating: 5,
    feedback:
      "I’ve seen remarkable growth in my portfolio thanks to Accurate Commodity’s expert guidance. Their support team is also incredibly helpful. A trusted partner for any trader.",
  },
  {
    id: 3,
    name: "Amit K",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    rating: 5,
    feedback:
      "Accurate Commodity provides the best market tips I’ve ever used. Their accuracy and dedication to clients are unmatched. I’ve never felt more confident in my trading decisions.",
  },
];

const TestimonialsGrid = () => {
  // Inline CSS Styles
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "30px 20px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0, 0, 0,0)", 
// Light background color for contrast
  };

  const gridTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    padding : "90px",
    paddingBottom:"0px",
    paddingTop:"40px",
    marginBottom: "30px",
    color: "#343a40", // Darker text color
    textAlign: "center",
  };

  const gridItemStyle = {
    padding: "20px",
    background: "#fff", // White background for each testimonial
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
    textAlign: "center",
    transition: "transform 0.3s", // Animation on hover
  };

  const gridImageStyle = {
    width: "100px", // Fixed width for images
    height: "120px", // Fixed height for images
    //borderRadius: "50%", // Circle shape
    marginBottom: "15px", // Spacing below the image
  };

  const gridNameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const gridRatingStyle = {
    marginBottom: "10px", // Space between rating and feedback
    color: "#FFD700", // Gold color for stars
  };

  const gridFeedbackStyle = {
    fontSize: "0.9rem",
    color: "#6c757d", // Dark gray for feedback text
    lineHeight: "1.5", // Improve readability
  };

  return (
    <div>
      <h2 style={gridTitleStyle}>What Our Customers Say</h2>
      <div style={gridContainerStyle}>
        {testimonials.map((testimonial) => (
          <div style={gridItemStyle} key={testimonial.id}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={gridImageStyle}
            />
            <h3 style={gridNameStyle}>{testimonial.name}</h3>
            <div style={gridRatingStyle}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <p style={gridFeedbackStyle}>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;