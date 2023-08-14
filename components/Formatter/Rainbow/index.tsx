"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";
import { formatRainbow } from "./format";

import { SaveButton } from "../SaveButton";
import { Size } from "@/components/Controls/Size";
import { OptionsCard } from "@/components/OptionsCard";

export const RainbowFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [size, setSize] = useState(16);

  useEffect(() => {
    setOutput(input ? `<size=${size}>${formatRainbow(input)}</size>` : "");
  }, [input, size]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OptionsCard>
        <Size onChange={setSize} value={size} />
      </OptionsCard>
      <OutputArea value={output} />
      <CopyButton text={output} />
      <SaveButton formatter="rainbow" text={output} />
    </>
  );
};
