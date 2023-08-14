"use client";

import { Slider } from "@/components/ui/slider";
import { Field } from "./Field";

interface Props {
  onChange: (size: number) => void;
  value: number;
}

export const Size: React.FC<Props> = ({ onChange, value }) => (
  <Field label="size">
    <Slider
      id="size"
      max={50}
      min={10}
      onValueChange={(val) => onChange(val[0])}
      value={[value]}
    />
  </Field>
);
