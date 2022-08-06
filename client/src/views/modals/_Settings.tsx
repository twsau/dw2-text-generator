import styled from "styled-components";
import { useTranslation } from "../../hooks";

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Settings = () => {
  const { locale, setLocale, translate } = useTranslation();
  return (
    <>
      <Row>
        <label>{translate("language")}</label>
        <select
          onChange={(event) => setLocale(event.target.value)}
          value={locale}
        >
          <option value="de">{translate("German")}</option>
          <option value="en">{translate("English")}</option>
          <option value="ru">{translate("Russian")}</option>
        </select>
      </Row>
    </>
  );
};
