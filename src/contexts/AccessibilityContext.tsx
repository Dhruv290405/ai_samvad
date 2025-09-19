import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  fontSize: 'small' | 'medium' | 'large' | 'xl';
  highContrast: boolean;
  setFontSize: (size: 'small' | 'medium' | 'large' | 'xl') => void;
  toggleHighContrast: () => void;
  speakText: (text: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSizeState] = useState<'small' | 'medium' | 'large' | 'xl'>('medium');
  const [highContrast, setHighContrast] = useState(false);

  const setFontSize = (size: 'small' | 'medium' | 'large' | 'xl') => {
    setFontSizeState(size);
    const sizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xl': '20px'
    };
    document.documentElement.style.fontSize = sizeMap[size];
    localStorage.setItem('fontSize', size);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('high-contrast', newValue);
      localStorage.setItem('highContrast', String(newValue));
      return newValue;
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'medium' | 'large' | 'xl';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedHighContrast) {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      highContrast,
      setFontSize,
      toggleHighContrast,
      speakText
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};