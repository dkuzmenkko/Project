import { useEffect, useRef, useState } from "react";
import "../styles/Fitness.css";
import { texts } from "../content/texts";
import FitnessImg from "../assets/Fintness.png";
import BackImg from "../assets/FitnessBack.jpg";

function Fitness() {
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
    <section className="Gym" ref={wrapperRef}>
      <div className="containerGym">
        <div className={`Back ${isVisible ? "open" : ""}`}>
          <img src={BackImg} alt="FitnessBack" />
        </div>
        <div className="CenterGym">
          <div className={`image-wrapper3 ${isVisible ? "open" : ""}`}>
            <img src={FitnessImg} alt="Fitness" />
            <div className="panel3"></div>
          </div>
        </div>
        <div className={`titlefor ${isVisible ? "visible" : ""}`}>
          <span>WELLNESS—</span>
          <span>CENTERED</span>
          <span className="italic">AMENITIES</span>
        </div>
        <div className={`descriptionFitness ${isVisible ? "visible" : ""}`}>
          <p className="Fitnessdescription">{texts.fitness.Fit}</p>
          <button className="button">LEARN MORE</button>
        </div>

      </div>
    </section>
  );
}

export default Fitness;
