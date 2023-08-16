import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

interface Props {
  text: string;
}

const replaceSizeTags = (input: string): string => {
  return input
    .replace(/<size=(\d+)>/g, `<span style="font-size: $1px">`)
    .replace(/<\/size>/g, "</span>");
};

const replaceColourTags = (input: string): string => {
  return input
    .replace(/<color=(#[0-9a-fA-F]{6})>/g, '<span style="color:$1">')
    .replace(/<\/color>/g, "</span>");
};

const preview = (text: string) => {
  const withSize = replaceSizeTags(text);
  const withColour = replaceColourTags(withSize);
  return withColour;
};

export const Preview: React.FC<Props> = ({ text }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button disabled={!text} variant="secondary">
        preview
      </Button>
    </SheetTrigger>
    <SheetContent className="h-1/2 grid place-items-center" side="bottom">
      <div dangerouslySetInnerHTML={{ __html: preview(text) }} />
    </SheetContent>
  </Sheet>
);
