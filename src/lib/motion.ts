/**
 * Central motion language — every homepage section should consume these
 * presets instead of redefining its own. Luxury motion is slower and
 * settles softly: entrances ~0.7s, micro-interactions ~0.5s.
 */
export const motionDuration = {
  fast: 0.2,
  normal: 0.32,
  premium: 0.5,
  luxury: 0.75,
  count: 1.4,
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
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
} as const;

export const staggerList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
} as const;
