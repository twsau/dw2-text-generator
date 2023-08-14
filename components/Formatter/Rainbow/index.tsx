"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";
import { Spacer } from "@/components/ui/spacer";

export const RainbowFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(input);
  }, [input]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <Spacer />
      <OutputArea value={output} />
      <CopyButton text={output} />
    </>
  );
};
