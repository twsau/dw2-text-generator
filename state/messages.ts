import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

export const useMessages = create<Messages>()(
  persist(
    (set) => ({
      standard: [],
      achievement: [],
      rainbow: [],
    }),
    {
      name: "dw2-messages",
      skipHydration: true,
    }
  )
);

export const saveMessage = (message: string, type: keyof Messages) =>
  useMessages.setState((state) => ({
    [type]: [...state[type], { id: uuid(), string: message }],
  }));

export const deleteMessage = (id: string, type: keyof Messages) => {
  console.log(id, type);
  useMessages.setState((state) => ({
    [type]: state[type].filter((message) => message.id !== id),
  }));
};
