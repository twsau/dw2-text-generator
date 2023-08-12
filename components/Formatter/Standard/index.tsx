"use client";

import { InputArea } from "@/components/InputArea";
import { Options } from "@/components/Options";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { saveMessage, useMessages } from "@/state/messages";
import { useEffect, useState } from "react";

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
    setOutput(
      !!input
        ? `<size=${options.size}><color=${options.colour}>${input}</color></size>`
        : ""
    );
  }, [input, options]);

  const copy = () => {
    navigator.clipboard.writeText(output);
    toast({
      description: "copied to clipboard!",
    });
  };

  const save = () => {
    saveMessage(output, "standard");
    toast({
      description: "message saved!",
    });
  };

  return (
    <div className="p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <InputArea onChange={setInput} value={input} />
      <Options
        onChange={(key, value) => setOptions({ ...options, [key]: value })}
        value={options}
      />
      <OutputArea value={output} />
      <Button disabled={!output} variant="secondary" onClick={copy}>
        copy
      </Button>
      <Button
        disabled={
          !output || !!messages.find((message) => message.string === output)
        }
        variant="secondary"
        onClick={save}
      >
        save
      </Button>
    </div>
  );
};
