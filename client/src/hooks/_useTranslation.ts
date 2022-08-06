import create from "zustand";
import de from "../translations/de.json";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

interface IDict {
  [key: string]: any;
}

interface ITranslationState {
  locale: string;
  setLocale: (locale: string) => void;
  translate: (entry: string) => string;
}

const languages: IDict = { de, en, ru };

export const useTranslation = create<ITranslationState>((set, get) => ({
  locale: "en",
  setLocale: (locale: string) => set({ locale }),
  translate: (entry: string) => {
    const locale = get().locale;
    const translation: string | undefined = languages[locale][entry];
    if (!!translation) return translation;

    console.warn(
      "WARNING: missing translation entry:",
      { locale, entry },
      "defaulting to en..."
    );

    const fallbackTranslation = languages["en"][entry];
    if (!!fallbackTranslation) return fallbackTranslation;

    console.warn("WARNING: fallback translation failed.");
    return "{translation_missing}";
  },
}));
