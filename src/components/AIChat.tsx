import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2, 
  Bot, 
  User,
  Mic,
  MicOff,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'नमस्ते! Welcome to the Digital India AI Assistant. I can help you with government services, applications, and answer your questions in multiple languages. How may I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ['Apply for PAN Card', 'Check Aadhaar Status', 'File Tax Return', 'Register Grievance']
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: getContextualSuggestions(inputMessage)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('pan') || lowerInput.includes('permanent account')) {
      return 'I can help you with PAN card services! You can apply for a new PAN card, check your PAN status, or download your e-PAN. The process typically takes 15-20 days. Would you like me to guide you through the application process?';
    }
    
    if (lowerInput.includes('aadhaar') || lowerInput.includes('आधार')) {
      return 'For Aadhaar services, you can update your details, download e-Aadhaar, check enrollment status, or book an appointment at Aadhaar centers. What specific Aadhaar service do you need help with?';
    }
    
    if (lowerInput.includes('tax') || lowerInput.includes('itr') || lowerInput.includes('income')) {
      return 'I can assist you with income tax filing! The ITR filing deadline is July 31st for individuals. You can file ITR-1 (Sahaj) for salary income or ITR-2 for other sources. Would you like help choosing the right ITR form?';
    }
    
    if (lowerInput.includes('grievance') || lowerInput.includes('complaint') || lowerInput.includes('शिकायत')) {
      return 'You can file grievances through the Public Grievance portal. I\'ll help you register your complaint and track its status. What type of grievance would you like to file?';
    }

    return 'I understand your query. Let me connect you with the right information and services. You can access various government services through this portal, track application status, and get real-time assistance. How else can I help you today?';
  };

  const getContextualSuggestions = (input: string): string[] => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('pan')) {
      return ['Apply New PAN', 'Check PAN Status', 'Download e-PAN', 'Update PAN Details'];
    }
    
    if (lowerInput.includes('aadhaar')) {
      return ['Download e-Aadhaar', 'Update Aadhaar', 'Book Appointment', 'Check Status'];
    }
    
    if (lowerInput.includes('tax')) {
      return ['File ITR Online', 'Check Refund Status', 'Download Form 16', 'TDS Certificate'];
    }
    
    return ['Track Application', 'New Service', 'Help & Support', 'Contact Us'];
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.continuous = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full gradient-primary shadow-elevated hover:shadow-glow transition-smooth animate-pulse-soft"
        size="lg"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    );
  }

  return (
    <Card className={cn(
      "fixed bottom-4 right-4 w-80 sm:w-96 h-[85vh] sm:h-[600px] max-h-[600px] shadow-elevated transition-all duration-300 z-50",
      "sm:bottom-6 sm:right-6",
      isMinimized && "h-14 sm:h-16"
    )}>
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-primary rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="text-primary-foreground">
            <CardTitle className="text-sm font-semibold">AI Assistant</CardTitle>
            <div className="flex items-center gap-1 text-xs opacity-90">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-full min-h-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-background/50 min-h-0">
            {messages.map((message) => (
              <div key={message.id} className={cn(
                "flex gap-3",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}>
                 <div className={cn(
                   "flex gap-2 max-w-[85%] sm:max-w-[80%]",
                   message.sender === 'user' ? "flex-row-reverse" : "flex-row"
                 )}>
                   <div className={cn(
                     "h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                     message.sender === 'user' 
                       ? "bg-primary text-primary-foreground" 
                       : "bg-secondary text-secondary-foreground"
                   )}>
                     {message.sender === 'user' ? 
                       <User className="h-3 w-3 sm:h-4 sm:w-4" /> : 
                       <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                     }
                  </div>
                   <div className={cn(
                     "rounded-lg p-2 sm:p-3 text-xs sm:text-sm",
                     message.sender === 'user'
                       ? "bg-primary text-primary-foreground"
                       : "bg-card text-card-foreground shadow-card border"
                   )}>
                     <p className="leading-relaxed">{message.content}</p>
                     {message.suggestions && (
                       <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                        {message.suggestions.map((suggestion, index) => (
                           <Badge
                             key={index}
                             variant="outline"
                             className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth text-[10px] sm:text-xs py-0.5 px-1.5"
                             onClick={() => handleSuggestionClick(suggestion)}
                           >
                            {suggestion}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-secondary flex items-center justify-center">
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div className="bg-card p-2 sm:p-3 rounded-lg border shadow-card">
                  <div className="flex items-center gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Assistant is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-3 sm:p-4 bg-card">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Ask about government services..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 text-xs sm:text-sm"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleVoiceInput}
                className={cn(
                  "transition-smooth",
                  isListening && "bg-destructive text-destructive-foreground"
                )}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};