'use client';

import React, { createContext, useContext } from 'react';
import { translations as translationsData } from '../i18n/translations';

interface LanguageContextType {
  translations: typeof translationsData.fi;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Fixed to Finnish only
  const translations = translationsData.fi;

  const value = {
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
