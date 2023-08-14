import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFormatter = create<{ formatter: Formatter }>()(
  persist(
    (set) => ({
      formatter: "standard",
    }),
    {
      name: "dw2-formatter",
      skipHydration: true,
    }
  )
);

export const setFormatter = (formatter: Formatter) =>
  useFormatter.setState({ formatter });
