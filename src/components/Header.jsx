import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/Header.css";
import { texts } from "../content/texts.js";
import { heroReveal, fadeIn } from "../content/animations";


function Header() {
  const [activlang, setlang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);


  const { scrollY } = useViewportScroll();
  const yHeader = useTransform(scrollY, [0, 900], [0, -150]); 
  const opacityHeader = useTransform(scrollY, [0, 600], [1, 0]);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      style={{ y: yHeader, opacity: opacityHeader }}
    >
      <motion.div className="header-inner" initial="hidden" animate="visible" variants={fadeIn}>
        <motion.div variants={fadeIn}>
          <div className="Logo">ELYSE</div>
        </motion.div>

        <motion.div className="positioncontrol" variants={fadeIn}>
          <div className="langswitch">
            <button
              className={`lang ${activlang === "EN" ? "active" : ""}`}
              onClick={() => setlang("EN")}
            >
              EN —
            </button>
            <button
              className={`lang ${activlang === "DE" ? "active" : ""}`}
              onClick={() => setlang("DE")}
            >
              DE
            </button>
          </div>

          <button className="BookVisit">Book a Visit</button>

          <button className="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line line1"></span>
            <span className="line line2"></span>
          </button>

          <div
            className={`overlay ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className={`sideMenu ${menuOpen ? "open" : ""}`}>
            <a href="/home">Home</a>
            <button className="menubutton" onClick={() => handleNavClick("about")}>
              About
            </button>
            <button className="menubutton" onClick={() => handleNavClick("gallery")}>
              Gallery
            </button>
            <button className="menubutton" onClick={() => handleNavClick("contact")}>
              Contacts
            </button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="HeroText"
        variants={heroReveal}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="textOne">ELYSE</h1>

        <div className="Subtext">
          <p className="textTwo">
            HOLISTIC LUXURY <br /> IN PERFECT HARMONY
          </p>

          <p className="textThree">{texts.main.textabout}</p>

          <button className="scroll" onClick={handleScroll}>
            SCROLL
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
