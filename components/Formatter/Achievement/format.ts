interface Props {
  input: string;
}

export const formatAchievement = ({ input }: Props) =>
  !!input ? `unlocked "<b>${input}</b>" achievement!` : "";
