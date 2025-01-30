import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.split(/\s+/).length > 500) {
      newErrors.message = "Message cannot exceed 500 words";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          "service_hy51n6g", // Service ID
          "template_4vz73sg", // Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "GzCyzcLq9Pn5DFDPo" // User ID
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Error sending email:", error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        padding: "2rem 0",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Contact Me</h1>
      {successMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            color: successMessage.startsWith("Failed") ? "red" : "green",
          }}
        >
          {successMessage}
        </motion.p>
      )}
      <motion.form
        onSubmit={handleSubmit}
        style={{ marginTop: "2rem" }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{ marginBottom: "1rem" }}
          whileHover={{ scale: 1.02 }}
        >
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </motion.div>

        <motion.div
          style={{ marginBottom: "1rem" }}
          whileHover={{ scale: 1.02 }}
        >
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </motion.div>

        <motion.div
          style={{ marginBottom: "1rem" }}
          whileHover={{ scale: 1.02 }}
        >
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message}</span>
          )}
        </motion.div>

        <motion.button
          type="submit"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "var(--primary-color)",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
