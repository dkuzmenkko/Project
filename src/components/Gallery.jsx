import { useState, useRef, useEffect } from "react";
import "../styles/Gallery.css";
import { texts } from "../content/texts";
import Img1 from "../assets/Galllery1.webp";
import Img2 from "../assets/Galllery2.jpg";
import Img3 from "../assets/Galllery3.png";

const images = [Img1, Img2, Img3];

function Gallery() {
  const [indices, setIndices] = useState([0, 1, 2]);
  const [animating, setAnimating] = useState(false);
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setIndices((prev) => [
        prev[1],
        prev[2],
        (prev[2] + 1) % images.length
      ]);
      setAnimating(false);
    }, 500);
  };

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
    <section id="gallery" className="Gallery" ref={wrapperRef}>
      <div className="CarouselContainer">

        <div className={`CarouselTitle ${isVisible ? "visible" : ""}`}>
          <p>(OUR PROJECTS)</p>
          <p className="Number">
            <span>(1)</span>
            <span>(2)</span>
            <span>(3)</span>
          </p>
        </div>

<div className={`CarouselCenterTitle ${isVisible ? "visible" : ""}`}>
  <span>LUMIÉRE DUPLEX</span>
  <span>RESIDENCES</span>
</div>

        <div className="carousel">
          {indices.map((imgIndex, idx) => {
            let classes = ["CarouselImg"];
            if (idx === 0) classes.push(animating ? "left ExitLeft" : "left");
            if (idx === 1) classes.push(animating ? "center MoveLeft" : "center");
            if (idx === 2) classes.push(animating ? "right MoveCenter" : "right");

            return (
              <img
                key={imgIndex}
                src={images[imgIndex]}
                className={classes.join(" ")}
                alt={`img-${imgIndex}`}
                onClick={next}
                style={{ cursor: "pointer" }}
              />
            );
          })}
          {animating && (
            <img
              key={indices[2] + 1000}
              src={images[(indices[2] + 1) % images.length]}
              className="CarouselImg EnterRight"
              alt="next-img"
            />
          )}
        </div>
      </div>

<div className={`CarouselFooter ${isVisible ? "visible" : ""}`}>
  <p className="MoreText">{texts.gallery.More}</p>
  <button className="buttonn">LEARN MORE</button>
</div>
    </section>
  );
}

export default Gallery;
