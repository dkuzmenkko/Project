export const heroReveal = {
  hidden: {
    y: "100%"   
  },
  visible: {
    y: "0%",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export const rollUpReveal = {
  hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    
  }
};

export const cardReveal = {
  hidden: {
    y: 200   
  },
  visible: {
    y: "0%",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const cardsContainer = {
hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};
