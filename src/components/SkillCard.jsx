import React from "react";

function SkillCard({ title, proficiency, logo }) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(35, 31, 31, 0.1)",
        backgroundColor: "var(--background-light)",
        color: "var(--text-light)",
        textAlign: "center",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-10px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {logo && (
        <img
          src={logo}
          alt={`${title} logo`}
          style={{
            width: "50px",
            height: "50px",
            marginBottom: "0.5rem",
            objectFit: "contain",
          }}
        />
      )}
      <h3>{title}</h3>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "0.5rem",
        }}
      >
        <div
          style={{
            width: `${proficiency}%`,
            height: "100%",
            backgroundColor: "var(--primary-color)",
            transition: "width 1s ease-in-out",
            border: "2px solid  #c26bdf ",
          }}
        />
      </div>
      <span style={{ fontSize: "0.9rem" }}>{proficiency}%</span>
    </div>
  );
}

export default SkillCard;
