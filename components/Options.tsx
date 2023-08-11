import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

interface Props {
  onChange: (key: string, value: string) => void;
  value: {
    colour: string;
    size: number;
  };
}

export const Options: React.FC<Props> = ({ onChange, value }) => (
  <div className="flex justify-center text-center gap-3 items-center">
    <Label htmlFor="colour">colour</Label>
    <Input
      id="colour"
      onChange={(e) => onChange("colour", e.target.value)}
      type="color"
      value={value.colour}
    />
    <Label htmlFor="size">size</Label>
    <Slider
      max={50}
      min={10}
      onValueChange={(val) => onChange("size", val[0].toString())}
      value={[value.size]}
    />
  </div>
);
