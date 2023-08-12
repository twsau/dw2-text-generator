"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { Spacer } from "@/components/ui/spacer";
import { useToast } from "@/components/ui/use-toast";
import { copy } from "@/lib/utils";
import { saveMessage, useMessages } from "@/state/messages";
import { useEffect, useState } from "react";

export const AchievementFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();
  const { standard: messages } = useMessages();

  useEffect(() => {
    setOutput(!!input ? `unlocked "<b>${input}</b>" achievement!` : "");
  }, [input]);

  return (
    <div className="p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <InputArea onChange={setInput} value={input} />
      <Spacer />
      <OutputArea value={output} />
      <Button
        disabled={!output}
        variant="secondary"
        onClick={() => {
          copy(output);
          toast({
            description: "copied to clipboard!",
          });
        }}
      >
        copy
      </Button>
      <Button
        disabled={
          !output || !!messages.find((message) => message.string === output)
        }
        variant="secondary"
        onClick={() => {
          saveMessage(output, "achievement");
          toast({
            description: "message saved!",
          });
        }}
      >
        save
      </Button>
    </div>
  );
};
