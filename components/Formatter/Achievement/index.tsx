"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { CopyButton } from "../CopyButton";
import { formatAchievement } from "./format";
import { SaveButton } from "../SaveButton";

export const Achievement = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => setOutput(formatAchievement({ input })), [input]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OutputArea value={output} />
      <CopyButton text={output} />
      <SaveButton formatter="achievement" text={output} />
    </>
  );
};
