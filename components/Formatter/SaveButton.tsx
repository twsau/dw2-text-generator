"use client";
import { saveMessage, useMessages } from "@/state/messages";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface Props {
  formatter: Formatter;
  text: string;
}

export const SaveButton: React.FC<Props> = ({ formatter, text }) => {
  const messages = useMessages()[formatter];
  const { toast } = useToast();

  return (
    <Button
      disabled={!text || !!messages.find((message) => message.string === text)}
      variant="secondary"
      onClick={() => {
        saveMessage(text, formatter);
        toast({
          description: "message saved!",
        });
      }}
    >
      save
    </Button>
  );
};
