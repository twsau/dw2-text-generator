const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
};

const rgbToHex = (r: number, g: number, b: number): string =>
  "#" +
  ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();

export const generateGradient = (
  start: string,
  end: string,
  steps: number
): string[] => {
  const startRgb = hexToRgb(start);
  const stopRgb = hexToRgb(end);
  const gradientColors: string[] = [];

  for (let i = 0; i < steps; i++) {
    const ratio = i / (steps - 1);
    const r = Math.round(startRgb[0] + ratio * (stopRgb[0] - startRgb[0]));
    const g = Math.round(startRgb[1] + ratio * (stopRgb[1] - startRgb[1]));
    const b = Math.round(startRgb[2] + ratio * (stopRgb[2] - startRgb[2]));

    gradientColors.push(rgbToHex(r, g, b));
  }

  return gradientColors;
};
