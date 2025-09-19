import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Accessibility, 
  Type, 
  Eye, 
  Volume2,
  Search,
  User,
  Menu,
  Home
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { fontSize, highContrast, setFontSize, toggleHighContrast, speakText } = useAccessibility();
  const { currentLanguage, setLanguage, languages, translate } = useLanguage();

  const handleFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setFontSize(sizes[nextIndex] as any);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const speakPage = () => {
    const text = document.querySelector('main')?.textContent || 'Welcome to E-Governance Portal';
    speakText(text.slice(0, 200) + '...');
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">भ</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">{translate('Digital India Portal')}</h1>
                <p className="text-xs text-muted-foreground">भारत सरकार | Government of India</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.code === currentLanguage)?.native}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={currentLanguage === lang.code ? 'bg-primary-light' : ''}
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
            <Button variant="ghost" className="font-medium" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link to="/services">Services</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link to="/applications">Applications</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link to="/track-status">Track Status</Link>
            </Button>
          </nav>

          <form onSubmit={handleSearch} className="flex items-center gap-3 flex-1 md:flex-initial md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services, forms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>
            <Button type="submit" variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};