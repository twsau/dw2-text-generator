const rainbow = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#7FFF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#9400D3", // Violet
];

interface Props {
  input: string;
  size: number;
}

export const formatRainbow = ({ input, size }: Props) =>
  !!input
    ? `<size=${size}>${input
        .split("")
        .map(
          (letter, index) =>
            `<color=${rainbow[index % rainbow.length]}>${letter}</color>`
        )
        .join("")}</size>`
    : "";
