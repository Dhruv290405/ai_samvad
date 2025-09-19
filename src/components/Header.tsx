import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Accessibility, 
  Type, 
  Eye, 
  Volume2,
  Search,
  User,
  Menu
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
];

export const Header = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);

  const handleFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
    
    // Apply font size to document
    document.documentElement.style.fontSize = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xl': '20px'
    }[sizes[nextIndex]];
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast', !highContrast);
  };

  const speakPage = () => {
    if ('speechSynthesis' in window) {
      const text = document.querySelector('main')?.textContent || 'Welcome to E-Governance Portal';
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLang === 'hi' ? 'hi-IN' : 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">भ</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">Digital India Portal</h1>
                <p className="text-xs text-muted-foreground">भारत सरकार | Government of India</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.code === selectedLang)?.native}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={selectedLang === lang.code ? 'bg-primary-light' : ''}
                  >
                    <span className="font-medium">{lang.native}</span>
                    <span className="ml-2 text-muted-foreground">({lang.name})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Accessibility Controls */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Accessibility className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleFontSize}>
                  <Type className="h-4 w-4 mr-2" />
                  Font Size: {fontSize}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleHighContrast}>
                  <Eye className="h-4 w-4 mr-2" />
                  {highContrast ? 'Normal' : 'High'} Contrast
                </DropdownMenuItem>
                <DropdownMenuItem onClick={speakPage}>
                  <Volume2 className="h-4 w-4 mr-2" />
                  Read Aloud
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="font-medium">Home</Button>
            <Button variant="ghost" className="font-medium">Services</Button>
            <Button variant="ghost" className="font-medium">Applications</Button>
            <Button variant="ghost" className="font-medium">Track Status</Button>
            <Button variant="ghost" className="font-medium">Grievances</Button>
            <Button variant="ghost" className="font-medium">About</Button>
          </nav>

          <div className="flex items-center gap-3 flex-1 md:flex-initial md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services, forms..."
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>
            <Button className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};