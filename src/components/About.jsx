import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import AboutImg from "../assets/LivingRoom.jpg"
import { texts } from "../content/texts";

function About() {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="General" ref={wrapperRef}>
        <div className="Left">
          <h2 className={`smalltext ${isVisible ? "visible" : ""}`}> (About) </h2>
          <h1 className={`bigtext ${isVisible ? "visible" : ""}`}>
            <span>TIMELESS</span>
            <span className="italic">DESIGN.</span>
            <span>WELLNESS—</span>
            <span className="italic">FOCUSED</span>
            <span>LIVING.</span>
          </h1>
        </div>

        <div className="Center">
          <div className={`image-wrapper ${isVisible ? "open" : ""}`}>
            <img src={AboutImg} alt="About" />
            <div className="panel"></div>
          </div>
        </div>

        <div className="Right">
          <p className={`description ${isVisible ? "visible" : ""}`}>{texts.about.description}</p>
          <button className={`button ${isVisible ? "visible" : ""}`}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

export default About;
