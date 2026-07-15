"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/lib/i18n";
import { isLanguage, t as translate } from "@/lib/i18n";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: Parameters<typeof translate>[1]) => string;
};

const defaultContext: LanguageContextType = {
  lang: "pt",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => translate("pt", key),
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("lang");
  if (stored && isLanguage(stored)) return stored;
  return "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialLanguage();
    setMounted(true);
    setLangState(initial);
    document.documentElement.lang = initial === "en" ? "en" : "pt-PT";
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang === "en" ? "en" : "pt-PT";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextType>(() => {
    const safeLang = mounted ? lang : "pt";
    return {
      lang: safeLang,
      setLang,
      toggleLang,
      t: (key) => translate(safeLang, key),
    };
  }, [lang, mounted, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

