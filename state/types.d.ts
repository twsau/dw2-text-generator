interface Message {
  id: string;
  string: string;
}

type Messages = Record<Formatter, Message[]>;
