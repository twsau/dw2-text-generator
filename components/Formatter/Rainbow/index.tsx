"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { Copy } from "../../Actions/Copy";
import { formatRainbow } from "./format";

import { Save } from "../../Actions/Save";
import { Size } from "@/components/Controls/Size";
import { OptionsCard } from "@/components/OptionsCard";
import { Preview } from "@/components/Actions/Preview";

export const Rainbow = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [size, setSize] = useState(16);

  useEffect(() => setOutput(formatRainbow({ input, size })), [input, size]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OptionsCard>
        <Size onChange={setSize} value={size} />
      </OptionsCard>
      <OutputArea value={output} />
      <Copy text={output} />
      <Save formatter="rainbow" text={output} />
      <Preview text={output} />
    </>
  );
};
