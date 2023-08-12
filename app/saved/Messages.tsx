"use client";

import { Button } from "@/components/ui/button";
import { deleteMessage, useMessages } from "@/state/messages";
import { TrashIcon } from "@radix-ui/react-icons";

interface Props {
  type: keyof Messages;
}

export const SavedMessages: React.FC<Props> = ({ type }) => {
  const { [type]: messages } = useMessages();

  console.log(messages);
  return (
    <div className="flex flex-col items-center py-5">
      {messages.map((message) => (
        <div key={message.id}>
          {message.string}
          <Button
            onClick={() => deleteMessage(message.id, type)}
            variant="secondary"
          >
            <TrashIcon /> delete
          </Button>
        </div>
      ))}
      {!messages.length && <code>no messages found</code>}
    </div>
  );
};
