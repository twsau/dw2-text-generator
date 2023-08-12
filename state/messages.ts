import { randomUUID } from "crypto";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMessages = create<Messages>()(
  persist(
    (set) => ({
      standard: [],
      achievement: [],
    }),
    {
      name: "app-state",
      skipHydration: true,
    }
  )
);

export const saveMessage = (message: string, type: keyof Messages) =>
  useMessages.setState((state) => ({
    [type]: [...state[type], { id: randomUUID(), string: message }],
  }));

export const deleteMessage = (id: string, type: keyof Messages) =>
  useMessages.setState((state) => ({
    [type]: state[type].filter((message) => message.id === id),
  }));
