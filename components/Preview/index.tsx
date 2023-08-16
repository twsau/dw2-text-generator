interface Props {
  text: string;
}

const replaceSizeTags = (input: string): string => {
  return input
    .replace(/<size=(\d+)>/g, `<span style="font-size: $1px">`)
    .replace(/<\/size>/g, "</span>");
};

const preview = (text: string) => {
  const withSize = replaceSizeTags(text);
  return withSize;
};

export const Preview: React.FC<Props> = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: preview(text) }}></div>;
};
