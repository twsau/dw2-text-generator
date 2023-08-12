"use client";

import { useEffect } from "react";
import { useMessages } from "./messages";

export const ZustandHydrate = () => {
  useEffect(() => {
    useMessages.persist.rehydrate();
  }, []);

  return null;
};
