import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp } from 'lucide-react';

const TaxService = () => {
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
            <TrendingUp className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Income Tax Services</h1>
          <p className="text-muted-foreground mt-2">File ITR, check refunds, and manage tax documents</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tax Services Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Complete tax filing services will be available soon!</p>
          </CardContent>
        </Card>
      </main>
      <AIChat />
    </div>
  );
};

export default TaxService;