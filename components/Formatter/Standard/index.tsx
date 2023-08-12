import { InputArea } from "@/components/InputArea";
import { Options } from "@/components/Options";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { Spacer } from "@/components/ui/spacer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const StandardFormatter = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState({
    colour: "black",
    size: 16,
  });
  const [output, setOutput] = useState("");
  const { toast } = useToast();

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

  return (
    <div className="p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <InputArea onChange={setInput} value={input} />
      <Options
        onChange={(key, value) => setOptions({ ...options, [key]: value })}
        value={options}
      />
      <OutputArea value={output} />
      <Button disabled={!output} variant="secondary" onClick={copy}>
        COPY
      </Button>
    </div>
  );
};
