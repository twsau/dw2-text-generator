interface Props {
  colour: string;
  size: number;
  input: string;
}

export const formatStandard = ({ colour, size, input }: Props) =>
  !!input ? `<size=${size}><color=${colour}>${input}</color></size>` : "";
