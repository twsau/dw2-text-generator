import { Label } from "../ui/label";

interface Props {
  children: React.ReactNode;
  label: string;
}

export const Field: React.FC<Props> = ({ children, label }) => (
  <fieldset className="flex justify-between items-center gap-3 w-full">
    <Label className="w-16 flex-none" htmlFor="size">
      {label}
    </Label>
    {children}
  </fieldset>
);
