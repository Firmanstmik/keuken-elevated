export const motionDuration = {
  fast: 0.15,
  normal: 0.25,
  premium: 0.4,
  luxury: 0.6,
  count: 1.2,
} as const;

export const motionEase = {
  precise: [0.35, 0, 0.15, 1],
  premium: [0.22, 1, 0.36, 1],
  soft: [0.16, 1, 0.3, 1],
} as const;

export const motionViewport = {
  once: true,
  amount: 0.16,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.premium,
      ease: motionEase.premium,
    },
  },
} as const;

export const fadeSoft = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDuration.normal,
      ease: motionEase.soft,
    },
  },
} as const;

export const revealImage = {
  hidden: { opacity: 0, scale: 1.01, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: motionDuration.luxury,
      ease: motionEase.premium,
    },
  },
} as const;

export const staggerHeader = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
} as const;

export const staggerList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
} as const;
