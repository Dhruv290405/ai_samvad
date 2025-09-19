import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, CheckCircle } from 'lucide-react';

const TrackStatusPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Track Application Status</h1>
          <p className="text-muted-foreground mt-2">Monitor your application progress in real-time</p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Enter Application Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Application ID or Reference Number" />
            <Input placeholder="Date of Birth" type="date" />
            <Button className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Check Status
            </Button>
          </CardContent>
        </Card>
      </main>
      <AIChat />
    </div>
  );
};

export default TrackStatusPage;