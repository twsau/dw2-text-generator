"use client";

import { CopyButton } from "@/components/Formatter/CopyButton";
import { Button } from "@/components/ui/button";
import { deleteMessage, useMessages } from "@/state/messages";
import { TrashIcon } from "@radix-ui/react-icons";

interface Props {
  type: keyof Messages;
}

export const SavedMessages: React.FC<Props> = ({ type }) => {
  const messages = useMessages()[type];

  return (
    <div className="flex flex-col items-center py-5 gap-3">
      {messages.map((message) => (
        <div className="flex items-center gap-3 w-full" key={message.id}>
          <small className="mr-auto">{message.string}</small>
          <CopyButton text={message.string} />
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
