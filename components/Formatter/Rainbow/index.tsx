"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";
import { formatRainbow } from "./format";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SaveButton } from "../SaveButton";

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
      <Label htmlFor="size">size</Label>
      <Slider
        id="size"
        max={50}
        min={10}
        onValueChange={(val) => setSize(val[0])}
        value={[size]}
      />
      <OutputArea value={output} />
      <CopyButton text={output} />
      <SaveButton formatter="rainbow" text={output} />
    </>
  );
};
