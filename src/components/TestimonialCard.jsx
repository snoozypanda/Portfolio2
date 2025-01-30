import React from "react";



function TestimonialCard({ name, quote }) {
  return (
    <div
      style={{
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "var(--background-light)",
        color: "var(--text-light)",
        textAlign: "center",
        animation: "fadeIn 0.5s ease-in",
      }}
    >
      
      <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{quote}"</p>
      <p style={{ fontWeight: "bold" }}>- {name}</p>
    </div>
  );
}

export default TestimonialCard;
