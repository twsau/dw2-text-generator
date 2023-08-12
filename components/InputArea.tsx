import { Textarea } from "./ui/textarea";

interface Props {
  onChange: (input: string) => void;
  value: string;
}

export const InputArea: React.FC<Props> = ({ onChange, value }) => {
  return (
    <Textarea
      className="resize-none"
      onChange={(e) => onChange(e.target.value)}
      placeholder="your text here"
      rows={5}
      value={value}
    />
  );
};
