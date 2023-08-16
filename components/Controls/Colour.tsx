"use client";

import { Input } from "../ui/input";
import { Field } from "./Field";

interface Props {
  label?: string;
  onChange: (colour: string) => void;
  value: string;
}

export const Colour: React.FC<Props> = ({ label, onChange, value }) => (
  <Field label={label ?? "colour"}>
    <Input
      id="colour"
      onChange={(e) => onChange(e.target.value)}
      type="color"
      value={value}
    />
  </Field>
);
