import { generateGradient } from "./func";

interface Props {
  from: string;
  input: string;
  size: number;
  to: string;
}

export const formatSpectrum = ({ from, input, size, to }: Props) => {
  if (!input) return "";
  const gradient = generateGradient(from, to, input.length);

  return `<size=${size}>${input
    .split("")
    .map((letter, index) => `<color=${gradient[index]}>${letter}</color>`)
    .join("")}</size>`;
};
