import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AIChat } from '@/components/AIChat';
import { 
  FileText, Download, Search, CreditCard, ArrowLeft, Upload, 
  CheckCircle, AlertCircle, Clock, User, Calendar 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PANService = () => {
  const { toast } = useToast();
  const [panNumber, setPanNumber] = useState('');
  const [applicationForm, setApplicationForm] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    fatherFirstName: '',
    fatherMiddleName: '',
    fatherLastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    mobile: '',
    email: '',
    aadhaar: '',
    applicationReason: 'new'
  });

  const handleApplicationSubmit = () => {
    if (!applicationForm.firstName || !applicationForm.lastName || !applicationForm.dateOfBirth) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Your PAN application has been submitted. Reference ID: PAN2024001234",
    });
  };

  const handleStatusCheck = () => {
    if (!panNumber && !applicationForm.aadhaar) {
      toast({
        title: "Information Required",
        description: "Please enter PAN number or Aadhaar number",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Status Retrieved",
      description: "Your PAN application is being processed. Expected completion: 15 days",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
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
          <span>PAN Card Services</span>
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">PAN Card Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apply for new PAN card, check status, download e-PAN, and manage your PAN details online
          </p>
          <Badge className="mt-4 gradient-accent">
            NSDL Authorized
          </Badge>
        </div>

        <Tabs defaultValue="apply" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apply">Apply New PAN</TabsTrigger>
            <TabsTrigger value="status">Check Status</TabsTrigger>
            <TabsTrigger value="download">Download e-PAN</TabsTrigger>
            <TabsTrigger value="reprint">Reprint PAN</TabsTrigger>
          </TabsList>

          <TabsContent value="apply">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  New PAN Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Select value={applicationForm.title} onValueChange={(value) => setApplicationForm({...applicationForm, title: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mr">Mr.</SelectItem>
                        <SelectItem value="Mrs">Mrs.</SelectItem>
                        <SelectItem value="Ms">Ms.</SelectItem>
                        <SelectItem value="Dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      value={applicationForm.firstName}
                      onChange={(e) => setApplicationForm({...applicationForm, firstName: e.target.value})}
                      placeholder="Enter first name" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input 
                      id="middleName" 
                      value={applicationForm.middleName}
                      onChange={(e) => setApplicationForm({...applicationForm, middleName: e.target.value})}
                      placeholder="Enter middle name" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      value={applicationForm.lastName}
                      onChange={(e) => setApplicationForm({...applicationForm, lastName: e.target.value})}
                      placeholder="Enter last name" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input 
                      id="dob" 
                      type="date" 
                      value={applicationForm.dateOfBirth}
                      onChange={(e) => setApplicationForm({...applicationForm, dateOfBirth: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select value={applicationForm.gender} onValueChange={(value) => setApplicationForm({...applicationForm, gender: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Transgender">Transgender</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input 
                      id="mobile" 
                      value={applicationForm.mobile}
                      onChange={(e) => setApplicationForm({...applicationForm, mobile: e.target.value})}
                      placeholder="Enter 10-digit mobile" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                      placeholder="Enter email address" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Upload Documents</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Identity Proof</p>
                      <Button variant="outline" size="sm">Upload Document</Button>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Address Proof</p>
                      <Button variant="outline" size="sm">Upload Document</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-light/20 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary mb-1">Application Fee: ₹110</p>
                      <p className="text-muted-foreground">
                        Processing time: 15-20 working days. You will receive updates via SMS and email.
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={handleApplicationSubmit} className="w-full gradient-primary">
                  Submit Application & Pay ₹110
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Check Application Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="acknowledgment">Acknowledgment Number</Label>
                    <Input 
                      id="acknowledgment" 
                      placeholder="Enter 15-digit acknowledgment number" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="statusDob">Date of Birth</Label>
                    <Input id="statusDob" type="date" />
                  </div>
                </div>

                <Button onClick={handleStatusCheck} className="w-full">
                  Check Status
                </Button>

                {/* Mock Status Display */}
                <div className="border rounded-lg p-4 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium">Application Status: Under Process</p>
                      <p className="text-sm text-muted-foreground">Application ID: PAN2024001234</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Application Received</span>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Document Verification</span>
                      <Clock className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span className="text-sm">Processing</span>
                      <div className="h-4 w-4 rounded-full border-2 border-border"></div>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span className="text-sm">Card Dispatch</span>
                      <div className="h-4 w-4 rounded-full border-2 border-border"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="download">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download e-PAN
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="panDownload">PAN Number</Label>
                    <Input 
                      id="panDownload" 
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                      placeholder="Enter 10-character PAN number" 
                      maxLength={10}
                    />
                  </div>

                  <div>
                    <Label htmlFor="downloadDob">Date of Birth</Label>
                    <Input id="downloadDob" type="date" />
                  </div>

                  <Button className="w-full gradient-primary">
                    Download e-PAN
                  </Button>
                </div>

                <div className="bg-success-light/20 border border-success/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-success mb-1">Free Service</p>
                      <p className="text-muted-foreground">
                        e-PAN is digitally signed and legally valid. No physical card needed for most transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reprint">
            <Card className="gradient-card shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Reprint PAN Card
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="reprintPan">PAN Number</Label>
                    <Input 
                      id="reprintPan" 
                      placeholder="Enter 10-character PAN number"
                      maxLength={10}
                    />
                  </div>

                  <div>
                    <Label htmlFor="reprintReason">Reason for Reprint</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lost">Card Lost</SelectItem>
                        <SelectItem value="damaged">Card Damaged</SelectItem>
                        <SelectItem value="name-change">Name Change</SelectItem>
                        <SelectItem value="address-change">Address Change</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-primary-light/20 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary mb-1">Reprint Fee: ₹50</p>
                      <p className="text-muted-foreground">
                        New card will be dispatched to your registered address within 15-20 days.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full gradient-primary">
                  Request Reprint & Pay ₹50
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <AIChat />
    </div>
  );
};

export default PANService;