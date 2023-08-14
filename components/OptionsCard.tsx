import { Card, CardContent } from "./ui/card";

interface Props {
  children: React.ReactNode;
}

export const OptionsCard: React.FC<Props> = ({ children }) => (
  <Card>
    <CardContent className="flex flex-col gap-5 p-5">{children}</CardContent>
  </Card>
);
