import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Text Section   */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Initial animation state opacity: 0, x: -50 to left
        animate={{ opacity: 1, x: 0 }} // Animation state opacity: 1, x: 0 to center to prevous postion 
        transition={{ duration: 1 }} 
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <span style={{ color: "#c26bdf" }}>Mariamawit Tewodros</span>
        </h1>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          Full Stack Developer
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "var(--text-color)", //  CSS variable for dynamic text color
          }}
        >
          I'm a passionate developer with experience in building modern web
          applications. I specialize in React, Node.js, React Native, and other
          cutting-edge technologies to create meaningful digital experiences.
        </p>
        
      </motion.div>

      {/* Profile Image Section for animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          justifySelf: "center",
        }}
      >
        {/* Animated Border Yemidmkew */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            position: "absolute",
            top: "-15px",
            left: "-15px",
            right: "-15px",
            bottom: "-15px",
            borderRadius: "50%",
            border: "5px solid #c26bdf",
            animation: "pulse 2s infinite",
            boxShadow: "0 0 15px rgba(173, 14, 236, 0.5)",
          }}
        ></motion.div>

        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201634.png" // Updated image URL
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </section>
  );
}

export default AboutSection;
