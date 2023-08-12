import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { Button } from "@/components/ui/button";
import { Spacer } from "@/components/ui/spacer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const AchievementFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setOutput(!!input ? `unlocked "<b>${input}</b>" achievement!` : "");
  }, [input]);

  const copy = () => {
    navigator.clipboard.writeText(output);
    toast({
      description: "copied to clipboard!",
    });
  };

  return (
    <div className="p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <InputArea onChange={setInput} value={input} />
      <Spacer />
      <OutputArea value={output} />
      <Button disabled={!output} variant="secondary" onClick={copy}>
        COPY
      </Button>
    </div>
  );
};
