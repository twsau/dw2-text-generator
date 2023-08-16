"use client";

import { InputArea } from "@/components/InputArea";
import { OutputArea } from "@/components/OutputArea";
import { useEffect, useState } from "react";
import { Copy } from "../../Actions/Copy";
import { formatAchievement } from "./format";
import { Save } from "../../Actions/Save";
import { Preview } from "@/components/Actions/Preview";

export const Achievement = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => setOutput(formatAchievement({ input })), [input]);

  return (
    <>
      <InputArea onChange={setInput} value={input} />
      <OutputArea value={output} />
      <Copy text={output} />
      <Save formatter="achievement" text={output} />
      <Preview text={output} />
    </>
  );
};
