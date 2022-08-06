import { ReactElement } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

interface ITab {
  title: string;
  view: ReactElement;
}

export const TabView = ({ tabs }: { [key: string]: ITab[] }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map(({ title }, index) => (
          <Tab key={`${title}_${index}`}>{title}</Tab>
        ))}
      </TabList>
      {tabs.map(({ title, view }, index) => (
        <TabPanel key={`${title}_view_${index}`}>{view}</TabPanel>
      ))}
    </Tabs>
  );
};
