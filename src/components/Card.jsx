import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Card.css";
import { cards } from "../content/cards.js";
import { texts } from "../content/texts";
import { cardReveal, cardsContainer } from "../content/animations";

function Card() {
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bgRef.current.classList.add("open");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (bgRef.current) observer.observe(bgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="Layout">
      <div className="BackgroundWrapper" ref={bgRef}>
        <div className="BackgroundPanel"></div>
      </div>

      <div className="TopRowWrapper">
        <motion.div
          className="TopRowCards"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              key={card.id}
              className="CardWrapperNumber"
              variants={cardReveal}
            >
              <div className="Card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span className="CardNumberSide">({index + 1})</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="TopRowText"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>{texts.card.Cards}</p>
        </motion.div>
      </div>

      <div className="BottomRow">
        <motion.div
          className="CardWrapperBottom"
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card-mask">
    <div className="Card">
      <h3>{cards[2].title}</h3>
      <p>{cards[2].description}</p>
    </div>
  </div>
  <span className="CardNumberBottom">(3)</span>
</motion.div>

        <motion.div
          className="RightGroup"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.slice(3, 5).map((card, index) => (
            <motion.div
              key={card.id}
              className="CardWrapperBottom"
              variants={cardReveal}
            >
              <div className="Card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span className="CardNumberBottom">({index + 4})</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Card;
