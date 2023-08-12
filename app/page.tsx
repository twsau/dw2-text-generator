import { AchievementFormatter } from "@/components/Formatter/Achievement";
import { StandardFormatter } from "@/components/Formatter/Standard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <Tabs defaultValue="standard">
        <div className="flex flex-col items-center">
          <h2 className="text-center mb-3">formatter</h2>
          <TabsList>
            <TabsTrigger value="standard">standard</TabsTrigger>
            <TabsTrigger value="achievement">achievement</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="standard">
          <StandardFormatter />
        </TabsContent>
        <TabsContent value="achievement">
          <AchievementFormatter />
        </TabsContent>
      </Tabs>
    </main>
  );
}
