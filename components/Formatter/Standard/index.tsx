"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";
import { SaveButton } from "../SaveButton";
import { Size } from "@/components/Controls/Size";
import { Colour } from "@/components/Controls/Colour";
import { OptionsCard } from "@/components/OptionsCard";
import { formatStandard } from "./format";
import { Preview } from "@/components/Preview";

export const Standard = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [size, setSize] = useState(16);
  const [colour, setColour] = useState("#666666");

  useEffect(
    () => setOutput(formatStandard({ colour, size, input })),
    [colour, input, size]
  );

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OptionsCard>
        <Size onChange={setSize} value={size} />
        <Colour onChange={setColour} value={colour} />
      </OptionsCard>
      <OutputArea value={output} />
      <CopyButton text={output} />
      <SaveButton formatter="standard" text={output} />
      <Preview text={output} />
    </>
  );
};
