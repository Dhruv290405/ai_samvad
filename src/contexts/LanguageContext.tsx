import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'Digital India Portal': 'Digital India Portal',
    'Smart E-Governance Portal': 'Smart E-Governance Portal',
    'Popular Government Services': 'Popular Government Services',
    'Aadhaar Services': 'Aadhaar Services',
    'PAN Card Services': 'PAN Card Services',
    'Government Services': 'Government Services',
    'Select Language': 'Select Language',
    'Search services...': 'Search services...',
    'How can I help you today?': 'How can I help you today?',
    'Type your message...': 'Type your message...',
    'Send': 'Send',
    'Sign In': 'Sign In',
    'Create Account': 'Create Account',
    'My Profile': 'My Profile',
    'My Applications': 'My Applications',
    'Back': 'Back',
    'Email Address': 'Email Address',
    'Enter your email': 'Enter your email',
    'Password': 'Password',
    'Enter your password': 'Enter your password',
    'Remember me': 'Remember me',
    'Forgot password?': 'Forgot password?',
    'Or continue with': 'Or continue with',
    'DigiLocker': 'DigiLocker',
    'Aadhaar': 'Aadhaar',
    "Don't have an account?": "Don't have an account?",
    'Secure Login': 'Secure Login',
    'Your data is protected with government-grade security standards.': 'Your data is protected with government-grade security standards.',
    'Access your government services account': 'Access your government services account',
  },
  hi: {
    'Digital India Portal': 'डिजिटल इंडिया पोर्टल',
    'Smart E-Governance Portal': 'स्मार्ट ई-गवर्नेंस पोर्टल',
    'Popular Government Services': 'लोकप्रिय सरकारी सेवाएं',
    'Aadhaar Services': 'आधार सेवाएं',
    'PAN Card Services': 'पैन कार्ड सेवाएं',
    'Government Services': 'सरकारी सेवाएं',
    'Select Language': 'भाषा चुनें',
    'Search services...': 'सेवाएं खोजें...',
    'How can I help you today?': 'आज मैं आपकी कैसे सहायता कर सकता हूं?',
    'Type your message...': 'अपना संदेश टाइप करें...',
    'Send': 'भेजें',
    'Sign In': 'साइन इन करें',
    'Create Account': 'खाता बनाएं',
    'My Profile': 'मेरी प्रोफ़ाइल',
    'My Applications': 'मेरे आवेदन',
    'Back': 'वापस',
    'Email Address': 'ईमेल पता',
    'Enter your email': 'अपना ईमेल दर्ज करें',
    'Password': 'पासवर्ड',
    'Enter your password': 'अपना पासवर्ड दर्ज करें',
    'Remember me': 'मुझे याद रखें',
    'Forgot password?': 'पासवर्ड भूल गए?',
    'Or continue with': 'या इसके साथ जारी रखें',
    'DigiLocker': 'डिजिलॉकर',
    "Don't have an account?": "खाता नहीं है?",
    'Secure Login': 'सुरक्षित लॉगिन',
    'Your data is protected with government-grade security standards.': 'आपका डेटा सरकारी-ग्रेड सुरक्षा मानकों से सुरक्षित है।',
    'Access your government services account': 'अपने सरकारी सेवा खाते तक पहुंचें',
  },
  bn: {
    'Digital India Portal': 'ডিজিটাল ইন্ডিয়া পোর্টাল',
    'Smart E-Governance Portal': 'স্মার্ট ই-গভর্নেন্স পোর্টাল',
    'Popular Government Services': 'জনপ্রিয় সরকারি সেবা',
    'Aadhaar Services': 'আধার সেবা',
    'PAN Card Services': 'প্যান কার্ড সেবা',
    'Government Services': 'সরকারি সেবা',
    'Select Language': 'ভাষা নির্বাচন করুন',
    'Search services...': 'সেবা খুঁজুন...',
    'How can I help you today?': 'আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
    'Type your message...': 'আপনার বার্তা টাইপ করুন...',
    'Send': 'পাঠান',
  },
  te: {
    'Digital India Portal': 'డిజిటల్ ఇండియా పోర్టల్',
    'Smart E-Governance Portal': 'స్మార్ట్ ఇ-గవర్నెన్స్ పోర్టల్',
    'Popular Government Services': 'ప్రముఖ ప్రభుత్వ సేవలు',
    'Aadhaar Services': 'ఆధార్ సేవలు',
    'PAN Card Services': 'పాన్ కార్డ్ సేవలు',
    'Government Services': 'ప్రభుత్వ సేవలు',
    'Select Language': 'భాషను ఎంచుకోండి',
    'Search services...': 'సేవలను వెతకండి...',
    'How can I help you today?': 'ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    'Type your message...': 'మీ సందేశాన్ని టైప్ చేయండి...',
    'Send': 'పంపండి',
  },
  ta: {
    'Digital India Portal': 'டிஜிட்டல் இந்தியா போர்ட்டல்',
    'Smart E-Governance Portal': 'ஸ்மார்ட் மின்-ஆட்சி போர்ட்டல்',
    'Popular Government Services': 'பிரபலமான அரசு சேவைகள்',
    'Aadhaar Services': 'ஆதார் சேவைகள்',
    'PAN Card Services': 'பான் கார்டு சேவைகள்',
    'Government Services': 'அரசு சேவைகள்',
    'Select Language': 'மொழியைத் தேர்ந்தெடுக்கவும்',
    'Search services...': 'சேவைகளைத் தேடவும்...',
    'How can I help you today?': 'இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    'Type your message...': 'உங்கள் செய்தியை தட்டச்சு செய்யவும்...',
    'Send': 'அனுப்பு',
  },
  mr: {
    'Digital India Portal': 'डिजिटल इंडिया पोर्टल',
    'Smart E-Governance Portal': 'स्मार्ट ई-गव्हर्नन्स पोर्टल',
    'Popular Government Services': 'लोकप्रिय सरकारी सेवा',
    'Aadhaar Services': 'आधार सेवा',
    'PAN Card Services': 'पॅन कार्ड सेवा',
    'Government Services': 'सरकारी सेवा',
    'Select Language': 'भाषा निवडा',
    'Search services...': 'सेवा शोधा...',
    'How can I help you today?': 'आज मी तुम्हाला कशी मदत करू शकतो?',
    'Type your message...': 'तुमचा संदेश टाइप करा...',
    'Send': 'पाठवा',
  },
  gu: {
    'Digital India Portal': 'ડિજિટલ ઇન્ડિયા પોર્ટલ',
    'Smart E-Governance Portal': 'સ્માર્ટ ઇ-ગવર્નન્સ પોર્ટલ',
    'Popular Government Services': 'લોકપ્રિય સરકારી સેવાઓ',
    'Aadhaar Services': 'આધાર સેવાઓ',
    'PAN Card Services': 'પેન કાર્ડ સેવાઓ',
    'Government Services': 'સરકારી સેવાઓ',
    'Select Language': 'ભાષા પસંદ કરો',
    'Search services...': 'સેવાઓ શોધો...',
    'How can I help you today?': 'આજે હું તમારી કેવી રીતે મદદ કરી શકું?',
    'Type your message...': 'તમારો સંદેશ ટાઇપ કરો...',
    'Send': 'મોકલો',
  },
  kn: {
    'Digital India Portal': 'ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಪೋರ್ಟಲ್',
    'Smart E-Governance Portal': 'ಸ್ಮಾರ್ಟ್ ಇ-ಗವರ್ನೆನ್ಸ್ ಪೋರ್ಟಲ್',
    'Popular Government Services': 'ಜನಪ್ರಿಯ ಸರ್ಕಾರಿ ಸೇವೆಗಳು',
    'Aadhaar Services': 'ಆಧಾರ್ ಸೇವೆಗಳು',
    'PAN Card Services': 'ಪಾನ್ ಕಾರ್ಡ್ ಸೇವೆಗಳು',
    'Government Services': 'ಸರ್ಕಾರಿ ಸೇವೆಗಳು',
    'Select Language': 'ಭಾಷೆಯನ್ನು ಆರಿಸಿ',
    'Search services...': 'ಸೇವೆಗಳನ್ನು ಹುಡುಕಿ...',
    'How can I help you today?': 'ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    'Type your message...': 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
    'Send': 'ಕಳುಹಿಸಿ',
  },
  ml: {
    'Digital India Portal': 'ഡിജിറ്റൽ ഇന്ത്യ പോർട്ടൽ',
    'Smart E-Governance Portal': 'സ്മാർട്ട് ഇ-ഗവേണൻസ് പോർട്ടൽ',
    'Popular Government Services': 'ജനപ്രിയ സർക്കാർ സേവനങ്ങൾ',
    'Aadhaar Services': 'ആധാർ സേവനങ്ങൾ',
    'PAN Card Services': 'പാൻ കാർഡ് സേവനങ്ങൾ',
    'Government Services': 'സർക്കാർ സേവനങ്ങൾ',
    'Select Language': 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    'Search services...': 'സേവനങ്ങൾ തിരയുക...',
    'How can I help you today?': 'ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?',
    'Type your message...': 'നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...',
    'Send': 'അയയ്ക്കുക',
  },
  pa: {
    'Digital India Portal': 'ਡਿਜਿਟਲ ਇੰਡੀਆ ਪੋਰਟਲ',
    'Smart E-Governance Portal': 'ਸਮਾਰਟ ਈ-ਗਵਰਨੈਂਸ ਪੋਰਟਲ',
    'Popular Government Services': 'ਪ੍ਰਸਿੱਧ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ',
    'Aadhaar Services': 'ਆਧਾਰ ਸੇਵਾਵਾਂ',
    'PAN Card Services': 'ਪੈਨ ਕਾਰਡ ਸੇਵਾਵਾਂ',
    'Government Services': 'ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ',
    'Select Language': 'ਭਾਸ਼ਾ ਚੁਣੋ',
    'Search services...': 'ਸੇਵਾਵਾਂ ਖੋਜੋ...',
    'How can I help you today?': 'ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    'Type your message...': 'ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...',
    'Send': 'ਭੇਜੋ',
  },
  or: {
    'Digital India Portal': 'ଡିଜିଟାଲ୍ ଇଣ୍ଡିଆ ପୋର୍ଟାଲ୍',
    'Smart E-Governance Portal': 'ସ୍ମାର୍ଟ ଇ-ଗଭର୍ନାନ୍ସ ପୋର୍ଟାଲ୍',
    'Popular Government Services': 'ଲୋକପ୍ରିୟ ସରକାରୀ ସେବା',
    'Aadhaar Services': 'ଆଧାର ସେବା',
    'PAN Card Services': 'ପ୍ୟାନ କାର୍ଡ ସେବା',
    'Government Services': 'ସରକାରୀ ସେବା',
    'Select Language': 'ଭାଷା ଚୟନ କରନ୍ତୁ',
    'Search services...': 'ସେବା ଖୋଜନ୍ତୁ...',
    'How can I help you today?': 'ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
    'Type your message...': 'ଆପଣଙ୍କ ବାର୍ତ୍ତା ଟାଇପ୍ କରନ୍ତୁ...',
    'Send': 'ପଠାନ୍ତୁ',
  },
  as: {
    'Digital India Portal': 'ডিজিটেল ইণ্ডিয়া পৰ্টেল',
    'Smart E-Governance Portal': 'স্মাৰ্ট ই-গভৰ্ণেন্স পৰ্টেল',
    'Popular Government Services': 'জনপ্ৰিয় চৰকাৰী সেৱা',
    'Aadhaar Services': 'আধাৰ সেৱা',
    'PAN Card Services': 'পেন কাৰ্ড সেৱা',
    'Government Services': 'চৰকাৰী সেৱা',
    'Select Language': 'ভাষা নিৰ্বাচন কৰক',
    'Search services...': 'সেৱা বিচাৰি উলিয়াওক...',
    'How can I help you today?': 'আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰো?',
    'Type your message...': 'আপোনাৰ বাৰ্তা টাইপ কৰক...',
    'Send': 'পঠিয়াওক',
  },
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
