import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SavedMessages } from "./Messages";

const formatters: Formatter[] = [
  "standard",
  "achievement",
  "rainbow",
  "spectrum",
];

export default function Saved() {
  return (
    <Tabs defaultValue="standard">
      <div className="flex flex-col items-center">
        <TabsList>
          {formatters.map((type) => (
            <TabsTrigger key={`${type}-trigger`} value={type}>
              {type}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {formatters.map((type) => (
        <TabsContent key={`${type}-content`} value={type}>
          <SavedMessages type={type} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
