"use client";

import { AQ, EN, PR, TR } from "@/data/Langs";
import { ContextType, lang, langContent } from "@/types/context-types";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<ContextType>({
  lang: "PR",
  setLang: (lang: lang) => {},
  langContent: PR,
});

export const ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<lang>("PR");
  const [langContent, setLangContent] = useState<langContent>(PR);

  useEffect(() => {
    switch (lang) {
      case "PR":
        setLangContent(PR);
        break;
      case "EN":
        setLangContent(EN);
        break;
      case "TR":
        setLangContent(TR);
        break;
      case "AQ":
        setLangContent(AQ);
        break;
      default:
        setLangContent(PR);
        break;
    }
  }, [lang]);

  return (
    <Context.Provider value={{ lang, langContent, setLang }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);
