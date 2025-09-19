import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from './pages/Index';
import ServicesPage from './pages/Services';
import AadhaarService from './pages/services/AadhaarService';
import PANService from './pages/services/PANService';
import TaxService from './pages/services/TaxService';
import GrievanceService from './pages/services/GrievanceService';
import ApplicationsPage from './pages/Applications';
import TrackStatusPage from './pages/TrackStatus';
import NotFound from './pages/NotFound';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { LanguageProvider } from './contexts/LanguageContext';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/aadhaar" element={<AadhaarService />} />
              <Route path="/services/pan" element={<PANService />} />
              <Route path="/services/tax" element={<TaxService />} />
              <Route path="/services/grievance" element={<GrievanceService />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/track-status" element={<TrackStatusPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;