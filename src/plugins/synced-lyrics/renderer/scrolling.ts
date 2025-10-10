export const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export const SCROLL_DURATION = {
  FAST_BASE: 260,
  FAST_MULT: 0.28,
  FAST_MIN: 240,
  FAST_MAX: 680,
  NORMAL_BASE: 550,
  NORMAL_MULT: 0.7,
  NORMAL_MIN: 850,
  NORMAL_MAX: 1650,
  JUMP1_BASE: 700,
  JUMP1_MULT: 0.8,
  JUMP1_MIN: 1000,
  JUMP1_MAX: 1800,
  JUMP4_BASE: 400,
  JUMP4_MULT: 0.6,
  JUMP4_MIN: 600,
  JUMP4_MAX: 1400,
} as const;

export const LEAD_IN_TIME_MS = 130;
