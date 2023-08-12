"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { copy } from "@/lib/utils";
import { deleteMessage, useMessages } from "@/state/messages";
import { CopyIcon, TrashIcon } from "@radix-ui/react-icons";

interface Props {
  type: keyof Messages;
}

export const SavedMessages: React.FC<Props> = ({ type }) => {
  const messages = useMessages()[type];
  const { toast } = useToast();

  console.log({ messages });

  return (
    <div className="flex flex-col items-center py-5 gap-3">
      {messages.map((message) => (
        <div className="flex items-center gap-3 w-full" key={message.id}>
          <small className="mr-auto">{message.string}</small>
          <Button
            onClick={() => {
              copy(message.string);
              toast({
                description: "copied to clipboard!",
              });
            }}
            variant="secondary"
          >
            <CopyIcon />
          </Button>
          <Button
            onClick={() => deleteMessage(message.id, type)}
            variant="destructive"
          >
            <TrashIcon />
          </Button>
        </div>
      ))}
      {!messages.length && <code>no messages found</code>}
    </div>
  );
};
