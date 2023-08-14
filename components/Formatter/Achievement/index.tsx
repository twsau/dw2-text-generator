"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { saveMessage, useMessages } from "@/state/messages";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";

export const AchievementFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();
  const { standard: messages } = useMessages();

  useEffect(() => {
    setOutput(!!input ? `unlocked "<b>${input}</b>" achievement!` : "");
  }, [input]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OutputArea value={output} />
      <CopyButton text={output} />
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
    </>
  );
};
