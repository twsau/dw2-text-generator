import { Textarea } from "./ui/textarea";

interface Props {
  value: string;
}

export const OutputArea: React.FC<Props> = ({ value }) => {
  return (
    <Textarea
      className="resize-none focus-visible:outline-none focus-visible:ring-0"
      placeholder="output"
      readOnly
      rows={4}
      value={value}
    />
  );
};
