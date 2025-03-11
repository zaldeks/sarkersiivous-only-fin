import { useLanguage } from '../context/LanguageContext';

export const useTranslations = () => {
  const { translations } = useLanguage();

  const t = (key: string) => {
    if (!translations) return '';
    // Use a type assertion to allow accessing translations with a string key
    return (translations as any)[key] || key;
  };

  return { t };
};
