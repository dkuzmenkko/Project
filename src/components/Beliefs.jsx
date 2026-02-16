import { useEffect, useRef, useState } from "react";
import "../styles/Beliefs.css";
import { texts } from "../content/texts";
import BeliefsImg from "../assets/LivingRoom.jpg";


function Beliefs() {
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
    <section className="Beliefs">
      <div className="containerfor">

        <div className="Centerrr">
          <div className={`image-wrapper2 ${isVisible ? "open" : ""}`} ref={wrapperRef}>
            <img src={BeliefsImg} alt="Beliefs" />
            <div className="panel2"></div>
          </div>
        </div>

        <div className={`aboutwhat ${isVisible ? "visible" : ""}`}>
          <p>(OUR BELIEFS)</p>
        </div>

        <div className={`title ${isVisible ? "visible" : ""}`}>
          <span>A VISION OF</span>
          <span>INSPIRED LIVING</span>
        </div>

        <div className={`descriptionBeliefs ${isVisible ? "visible" : ""}`}>
          <p className="moredescription">{texts.beliefs.Beliefs}</p>
          <button className="buttonBel">BOOK A VISIT</button>
        </div>

      </div>
    </section>
  );
}

export default Beliefs;
