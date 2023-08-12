import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SavedMessages } from "./Messages";

export default function Saved() {
  return (
    <Tabs defaultValue="standard">
      <div className="flex flex-col items-center">
        <h2 className="text-center mb-3">message type</h2>
        <TabsList>
          <TabsTrigger value="standard">standard</TabsTrigger>
          <TabsTrigger value="achievement">achievement</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="standard">
        <SavedMessages type="standard" />
      </TabsContent>
      <TabsContent value="achievement">
        <SavedMessages type="achievement" />
      </TabsContent>
    </Tabs>
  );
}
