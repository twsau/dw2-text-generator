import { AchievementFormatter } from "@/components/Formatter/Achievement";
import { RainbowFormatter } from "@/components/Formatter/Rainbow";
import { StandardFormatter } from "@/components/Formatter/Standard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const tabCn =
    "p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto";
  return (
    <Tabs defaultValue="standard">
      <div className="flex flex-col items-center">
        <h2 className="text-center mb-3">formatter</h2>
        <TabsList>
          <TabsTrigger value="standard">standard</TabsTrigger>
          <TabsTrigger value="achievement">achievement</TabsTrigger>
          <TabsTrigger value="rainbow">rainbow</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="standard">
        <div className={tabCn}>
          <StandardFormatter />
        </div>
      </TabsContent>
      <TabsContent value="achievement">
        <div className={tabCn}>
          <AchievementFormatter />
        </div>
      </TabsContent>
      <TabsContent value="rainbow">
        <div className={tabCn}>
          <RainbowFormatter />
        </div>
      </TabsContent>
    </Tabs>
  );
}
