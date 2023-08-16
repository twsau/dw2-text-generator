import { AchievementFormatter } from "@/components/Formatter/Achievement";
import { RainbowFormatter } from "@/components/Formatter/Rainbow";
import { Spectrum } from "@/components/Formatter/Spectrum";
import { StandardFormatter } from "@/components/Formatter/Standard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const tabCn =
    "p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto";
  return (
    <Tabs defaultValue="standard">
      <div className="flex flex-col items-center">
        <TabsList>
          <TabsTrigger value="standard">standard</TabsTrigger>
          <TabsTrigger value="achievement">achievement</TabsTrigger>
          <TabsTrigger value="rainbow">rainbow</TabsTrigger>
          <TabsTrigger value="spectrum">spectrum</TabsTrigger>
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
      <TabsContent value="spectrum">
        <div className={tabCn}>
          <Spectrum />
        </div>
      </TabsContent>
    </Tabs>
  );
}
