"use client";

import { InputArea } from "@/components/InputArea";
import { Options } from "@/components/Options";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { saveMessage, useMessages } from "@/state/messages";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";

export const StandardFormatter = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState({
    colour: "#666666",
    size: 16,
  });
  const [output, setOutput] = useState("");
  const { toast } = useToast();
  const { standard: messages } = useMessages();

  useEffect(() => {
    if (!input) return;
    setOutput(
      `<size=${options.size}><color=${options.colour}>${input}</color></size>`
    );
  }, [input, options]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <Options
        onChange={(key, value) => setOptions({ ...options, [key]: value })}
        value={options}
      />
      <OutputArea value={output} />
      <CopyButton text={output} />
      <Button
        disabled={
          !output || !!messages.find((message) => message.string === output)
        }
        variant="secondary"
        onClick={() => {
          saveMessage(output, "standard");
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
