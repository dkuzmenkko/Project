import { useState, useEffect, useRef } from "react";
import "../styles/Statistics.css";

function Statistics() {
  const [thousands, setThousands] = useState(0);
  const [percent, setPercent] = useState(0);
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false); 
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setVisible(true); 
            startAnimation();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 5000;
    const intervalTime = 20;

    function animateValue(target, setter) {
      let start = 0;
      const step = target / (duration / intervalTime);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start));
        }
      }, intervalTime);
    }

    animateValue(150000, setThousands);
    animateValue(60, setPercent);
    animateValue(30, setNumber);
  };

  return (
    <div
      className={`allNumber ${visible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      <div className="thousands">
        <h2>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            {thousands >= 1000
              ? Math.floor(thousands / 1000)
              : thousands}
          </span>
          {thousands >= 1000 && "k"}
          <span className="unit"> sq. ft.</span>
        </h2>
        <p>
          of meticulously designed <br /> living space.
        </p>
      </div>

      <div className="percent">
        <h2>
          {percent}
          <span className="unit">%</span>
        </h2>
        <p>
          green spaces <br /> for tranquility & wellness.
        </p>
      </div>

      <div className="number">
        <h2>{number}</h2>
        <p>
          exclusive residences, <br /> each tailored for comfort <br /> & elegance.
        </p>
      </div>

      <div className="time">
        <h2>24/7</h2>
        <p>
          concierge services, meeting <br /> every need effortlessly.
        </p>
      </div>
    </div>
  );
}

export default Statistics;
