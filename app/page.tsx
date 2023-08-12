"use client";

import { AchievementFormatter } from "@/components/Formatter/Achievement";
import { StandardFormatter } from "@/components/Formatter/Standard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
      <Tabs defaultValue="standard">
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <h2 className="text-center mb-3">select formatter</h2>
          <TabsList>
            <TabsTrigger value="standard">STANDARD</TabsTrigger>
            <TabsTrigger value="achievement">ACHIEVEMENT</TabsTrigger>
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
