import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section id="contact">
      <div className="footer-content">
        <p className="footer-author">
          Author Name: Daria Kuzmenko
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/dkuzmenkko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://dribbble.com/shots/25815603-Elyse-Residence-Luxury-Real-Estate-Website-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Original Design
          </a>
        </div>
      </div>
      </section>
    </footer>
  );
}

export default Footer;
