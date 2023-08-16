import { Achievement } from "@/components/Formatter/Achievement";
import { Rainbow } from "@/components/Formatter/Rainbow";
import { Spectrum } from "@/components/Formatter/Spectrum";
import { Standard } from "@/components/Formatter/Standard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const tabCn =
    "p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto md:pt-24";
  return (
    <Tabs className="h-full" defaultValue="standard">
      <div className="flex flex-col items-center">
        <TabsList className="rounded-t-none shadow">
          <TabsTrigger value="standard">standard</TabsTrigger>
          <TabsTrigger value="achievement">achievement</TabsTrigger>
          <TabsTrigger value="rainbow">rainbow</TabsTrigger>
          <TabsTrigger value="spectrum">spectrum</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="standard">
        <div className={tabCn}>
          <Standard />
        </div>
      </TabsContent>
      <TabsContent value="achievement">
        <div className={tabCn}>
          <Achievement />
        </div>
      </TabsContent>
      <TabsContent value="rainbow">
        <div className={tabCn}>
          <Rainbow />
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
