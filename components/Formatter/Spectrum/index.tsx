"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { Copy } from "../../Actions/Copy";
import { Save } from "../../Actions/Save";
import { OptionsCard } from "@/components/OptionsCard";
import { Size } from "@/components/Controls/Size";
import { Colour } from "@/components/Controls/Colour";
import { formatSpectrum } from "./format";
import { Preview } from "@/components/Actions/Preview";

export const Spectrum = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [size, setSize] = useState(16);
  const [from, setFrom] = useState("#8fcfdd");
  const [to, setTo] = useState("#db8cd7");

  useEffect(
    () => setOutput(formatSpectrum({ from, input, size, to })),
    [from, input, size, to]
  );

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OptionsCard>
        <Size onChange={setSize} value={size} />
        <Colour label="from" onChange={setFrom} value={from} />
        <Colour label="to" onChange={setTo} value={to} />
      </OptionsCard>
      <OutputArea value={output} />
      <Copy text={output} />
      <Save formatter="standard" text={output} />
      <Preview text={output} />
    </>
  );
};
