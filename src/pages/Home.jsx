import { useState } from "react";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
  const skills = [
    {
      title: "React",
      proficiency: 90,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "JavaScript",
      proficiency: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      title: "Node.js",
      proficiency: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      title: "CSS",
      proficiency: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      title: "Tailwind",
      proficiency: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      title: "HTML",
      proficiency: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      title: "SQL",
      proficiency: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      title: "Python",
      proficiency: 90,
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
  ];

  const testimonials = [
    {
      name: "Jhon Doe",
      quote: "Excellent work! Very professional and responsive.",
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Emma waltson",
      quote: "Socialable and courages.",
      photo: "https://via.placeholder.com/100",
    },
    {
      name: " Jannet Doe",
      quote: "Outstanding attention to detail and great communication.",
      photo: "https://via.placeholder.com/100",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div style={{ padding: "2rem 0" }}>
      <AboutSection />

      <section style={{ marginTop: "3rem" }}>
        <h2>Skills</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Testimonials</h2>
        <div style={{ marginTop: "1rem" }}>
          <TestimonialCard {...testimonials[currentTestimonial]} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <button
              className="btn"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
