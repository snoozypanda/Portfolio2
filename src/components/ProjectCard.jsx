import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false); // Track if the user has liked the project

  return (
    <motion.div
      style={{
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "var(--background-light)",
        color: "var(--text-light)",
        cursor: "pointer",
        border: "1px solid #eee",
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Project Name */}
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        {project.name}
      </h3>

      {/* Project Description */}
      <p
        style={{
          marginBottom: "1rem",
          color: "var(--text-light)",
          opacity: 0.8,
        }}
      >
        {project.description || "No description available"}
      </p>

      {/* Topics */}
      {project.topics && project.topics.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {project.topics.map((topic, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
                padding: "0.2rem 0.5rem",
                borderRadius: "15px",
                fontSize: "0.8rem",
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Section (Buttons) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          borderTop: "1px solid #eee",
          paddingTop: "1rem",
        }}
      >
        {/* View Project Link */}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "white",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "0.9rem",
          }}
        >
          View Project
        </a>

        {/* Like/Unlike Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (liked) {
              setLikes((prev) => prev - 1); // Decrease likes if already liked
            } else {
              setLikes((prev) => prev + 1); // Increase likes if not liked
            }
            setLiked(!liked); // Toggle liked state
          }}
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: liked ? "#ff4d4d" : "#f0f0f0",
            color: liked ? "white" : "black",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {liked ? "💔 " : "❤️"} {likes}
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
