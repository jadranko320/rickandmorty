export const photoAnimation = {
    hidden: { scale: 1.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

export const logoAnimation = {
    hidden: { y: '-100%', scale: 1.5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

export const titleAnimation = {
    hidden: { x: '-100%' },
    visible: {
      x: '0%',
      transition: { duration: 0.75 },
    },
  };

export const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };