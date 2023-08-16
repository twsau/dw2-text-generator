import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const copy = (text: string, callback?: () => void) => {
  navigator.clipboard.writeText(text);
  callback?.();
};

interface Props {
  text: string;
}

export const Copy: React.FC<Props> = ({ text }) => {
  const { toast } = useToast();

  const notification = () =>
    toast({
      description: "copied to clipboard!",
    });

  return (
    <Button
      disabled={!text}
      variant="secondary"
      onClick={() => {
        copy(text, notification);
        toast({
          description: "copied to clipboard!",
        });
      }}
    >
      copy
    </Button>
  );
};
