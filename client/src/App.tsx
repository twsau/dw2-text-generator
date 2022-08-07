import { useState } from "react";
import styled from "styled-components";
import { BsGear } from "react-icons/bs";
import { useTranslation } from "./hooks";
import { useModal } from "./components";
import { Settings } from "./views/modals";
import { TabView } from "./components/_TabView";

const TextBox = styled.textarea`
  background-color: var(--surface-3);
  border-radius: var(--radius-2);
  color: var(--text);
  margin: 1rem 0;
  resize: none;
  width: 100%;

  &:focus {
    outline: 1px solid var(--primary);
  }
`;

export const App = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("1");
  const { translate } = useTranslation();
  const { modal } = useModal();
  const [output, setOuput] = useState("");

  const generate = () => {
    setOuput(`<color="${color}"><size="${size}">${input}</size></color>`);
  };

  return (
    <>
      <header>
        <h1>{translate("title")}</h1>
        <p>{translate("greeting")}</p>
        <button onClick={() => modal(<Settings />)}>
          <BsGear />
          {" " + translate("settings")}
        </button>
      </header>
      <article>
        <section>
          <h2>{translate("input")}</h2>
          <TextBox
            onChange={(event) => setInput(event.target.value)}
            placeholder={translate("placeholder")}
            value={input}
          />
        </section>
        <TabView
          tabs={[
            {
              title: translate("Default"),
              view: <Default />
            },
            {
              title: translate("Gradient"),
              view: (
                <>
                  <h2>{translate("soon")}</h2>
                </>
              ),
            },
            {
              title: translate("Random"),
              view: (
                <>
                  <h2>{translate("soon")}</h2>
                </>
              ),
            },
          ]}
        />
        {output && (
          <section>
            <h2>{translate("output")}</h2>
            <TextBox readOnly value={output} />
          </section>
        )}
      </article>
      <footer>
        <a href="https://store.steampowered.com/app/667530/Drunken_Wrestlers_2/">
          {translate("game")}
        </a>
        <a href="https://discord.com/invite/dw2">{translate("discord")}</a>
        <a href="https://twsau.co.uk">{translate("author")}</a>
      </footer>
    </>
  );
};
