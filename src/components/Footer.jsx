import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ padding: "2rem 0", textAlign: "center" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "1rem",
          }}
        >
          <a href="https://github.com/snoozypanda">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yeabtsega-mekonnen-468421338/">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/__yeabtsega">
            <FaInstagram size={24} />
          </a>
          <a href="https://t.me/Kinderrrbuenoo">
            <FaTelegram size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Mariamawit Tewodros. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
