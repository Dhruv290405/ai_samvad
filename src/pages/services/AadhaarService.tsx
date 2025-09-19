import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AIChat } from '@/components/AIChat';
import { 
  CreditCard, Download, Calendar, CheckCircle, AlertCircle, 
  ArrowLeft, MapPin, Phone, Mail, Eye, EyeOff, Upload 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const AadhaarService = () => {
  const { toast } = useToast();
  const { speakText } = useAccessibility();
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [showAadhaar, setShowAadhaar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      toast({
        title: "Invalid Aadhaar Number",
        description: "Please enter a valid 12-digit Aadhaar number",
        variant: "destructive"
      });
      speakText("Please enter a valid 12-digit Aadhaar number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Download Initiated",
        description: "Your e-Aadhaar will be sent to registered mobile/email",
      });
      speakText("Download initiated. Your e-Aadhaar will be sent to your registered mobile and email");
    }, 2000);
  };

  const handleStatusCheck = async () => {
    if (!aadhaarNumber) {
      toast({
        title: "Aadhaar Number Required",
        description: "Please enter your Aadhaar number to check status",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Status Retrieved",
        description: "Your Aadhaar is active and verified",
      });
    }, 1500);
  };

  const services = [
    {
      title: "Download e-Aadhaar",
      description: "Get your digital Aadhaar card instantly",
      icon: <Download className="h-5 w-5" />,
      status: "Available",
      action: handleDownload
    },
    {
      title: "Check Aadhaar Status",
      description: "Verify your Aadhaar enrollment status",
      icon: <CheckCircle className="h-5 w-5" />,
      status: "Available",
      action: handleStatusCheck
    },
    {
      title: "Book Appointment",
      description: "Schedule visit to Aadhaar center",
      icon: <Calendar className="h-5 w-5" />,
      status: "Available"
    },
    {
      title: "Update Details",
      description: "Modify your Aadhaar information",
      icon: <CreditCard className="h-5 w-5" />,
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Button>
          <span>/</span>
          <span>Aadhaar Services</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Aadhaar Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete Aadhaar services portal - Download, update, verify, and manage your Aadhaar details online
          </p>
          <Badge className="mt-4 gradient-accent">
            Trusted by 1.3B+ Indians
          </Badge>
        </div>

        <Tabs defaultValue="download" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="download">Download</TabsTrigger>
            <TabsTrigger value="status">Check Status</TabsTrigger>
            <TabsTrigger value="update">Update Details</TabsTrigger>
            <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
          </TabsList>

          <TabsContent value="download">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download e-Aadhaar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <div className="relative">
                      <Input
                        id="aadhaar"
                        type={showAadhaar ? "text" : "password"}
                        value={aadhaarNumber}
                        onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                        placeholder="Enter 12-digit Aadhaar number"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowAadhaar(!showAadhaar)}
                      >
                        {showAadhaar ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-primary-light/20 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-primary mb-1">Security Notice</p>
                        <p className="text-muted-foreground">
                          Your e-Aadhaar will be password protected and sent to your registered mobile number and email address only.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleDownload} 
                    disabled={isLoading || aadhaarNumber.length !== 12}
                    className="w-full gradient-primary"
                  >
                    {isLoading ? "Processing..." : "Download e-Aadhaar"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Check Enrollment Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="status-aadhaar">Aadhaar Number or EID</Label>
                    <Input
                      id="status-aadhaar"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      placeholder="Enter Aadhaar number or 14-digit EID"
                    />
                  </div>

                  <Button 
                    onClick={handleStatusCheck} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? "Checking..." : "Check Status"}
                  </Button>
                </div>

                {/* Mock Status Result */}
                <div className="border rounded-lg p-4 bg-success-light/20 border-success/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-success">Aadhaar Status: Active</p>
                      <p className="text-sm text-muted-foreground">Last updated: November 15, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="update">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Update Aadhaar Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter full name as per documents" />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" placeholder="Enter 10-digit mobile number" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter complete address" />
                </div>

                <div className="space-y-3">
                  <Label>Upload Supporting Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop files here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button className="w-full gradient-primary">
                  Submit Update Request
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointment">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Aadhaar Center Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Select state" />
                  </div>
                  <div>
                    <Label htmlFor="district">District</Label>
                    <Input id="district" placeholder="Select district" />
                  </div>
                  <div>
                    <Label htmlFor="center">Aadhaar Center</Label>
                    <Input id="center" placeholder="Choose nearest center" />
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Nearest Center</p>
                      <p className="text-sm text-muted-foreground">
                        ABC Aadhaar Center, Main Street, City - 110001
                      </p>
                      <p className="text-sm text-success">Available slots: 9 AM - 5 PM</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full gradient-primary">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elevated transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-lg gradient-primary mx-auto mb-3 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                <Badge variant="outline" className="text-xs">
                  {service.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default AadhaarService;