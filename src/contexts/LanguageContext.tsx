import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தমিழ்' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'Digital India Portal': 'Digital India Portal',
    'Smart E-Governance Portal': 'Smart E-Governance Portal',
    'Popular Government Services': 'Popular Government Services',
    'Why Choose Our Portal?': 'Why Choose Our Portal?',
    'Aadhaar Services': 'Aadhaar Services',
    'PAN Card Services': 'PAN Card Services',
    'Income Tax Filing': 'Income Tax Filing',
    'Public Grievances': 'Public Grievances',
  },
  hi: {
    'Digital India Portal': 'डिजिटल इंडिया पोर्टल',
    'Smart E-Governance Portal': 'स्मार्ट ई-गवर्नेंस पोर्टल',
    'Popular Government Services': 'लोकप्रिय सरकारी सेवाएं',
    'Why Choose Our Portal?': 'हमारा पोर्टल क्यों चुनें?',
    'Aadhaar Services': 'आधार सेवाएं',
    'PAN Card Services': 'पैन कार्ड सेवाएं',
    'Income Tax Filing': 'आयकर दाखिल करना',
    'Public Grievances': 'सार्वजनिक शिकायतें',
  }
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const translate = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};