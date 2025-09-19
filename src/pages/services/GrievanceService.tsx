import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const GrievanceService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Button>
        
        <div className="text-center mb-8">
          <div className="h-16 w-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Public Grievance Portal</h1>
          <p className="text-muted-foreground mt-2">Register complaints and track resolution status</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Grievance System Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Complete grievance management system will be available soon!</p>
          </CardContent>
        </Card>
      </main>
      <AIChat />
    </div>
  );
};

export default GrievanceService;