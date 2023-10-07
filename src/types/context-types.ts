import { PR } from "@/data/Langs";

export type lang = "PR" | "EN" | "TR" | "AQ";

export type langContent = typeof PR;

export type ContextType = {
  lang: lang;
  setLang: (lang: lang) => void;
  langContent: langContent;
};
