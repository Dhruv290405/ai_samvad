import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, MessageSquare, Send, Search, Upload, Clock, 
  CheckCircle, AlertCircle, Phone, Mail, Globe 
} from 'lucide-react';

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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Submit New Grievance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Submit New Grievance
              </CardTitle>
              <CardDescription>Register a complaint or suggestion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="grievance-type">Complaint Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service-delay">Service Delay</SelectItem>
                      <SelectItem value="document-issue">Document Issues</SelectItem>
                      <SelectItem value="staff-behavior">Staff Behavior</SelectItem>
                      <SelectItem value="corruption">Corruption</SelectItem>
                      <SelectItem value="facility-issue">Facility Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="department">Department/Ministry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income-tax">Income Tax Department</SelectItem>
                      <SelectItem value="passport">Passport Office</SelectItem>
                      <SelectItem value="aadhaar">UIDAI (Aadhaar)</SelectItem>
                      <SelectItem value="police">Police Department</SelectItem>
                      <SelectItem value="municipal">Municipal Corporation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              
              <div>
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide detailed information about your grievance..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label>Supporting Documents</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Upload relevant documents (optional)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, JPG, PNG files up to 5MB each
                  </p>
                </div>
              </div>
              
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Grievance
              </Button>
            </CardContent>
          </Card>

          {/* Track Existing Grievance & Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Track Your Grievance
                </CardTitle>
                <CardDescription>Check the status of your complaint</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="grievance-id">Grievance ID</Label>
                  <Input id="grievance-id" placeholder="GRV2024XXXXXX" />
                </div>
                
                <div>
                  <Label htmlFor="mobile-track">Registered Mobile Number</Label>
                  <Input id="mobile-track" placeholder="+91 98765 43210" />
                </div>
                
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Track Status
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Process Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Acknowledgment</p>
                      <p className="text-sm text-muted-foreground">Within 1 day</p>
                    </div>
                  </div>
                  <div className="h-4 w-px bg-border ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Under Review</p>
                      <p className="text-sm text-muted-foreground">3-7 days</p>
                    </div>
                  </div>
                  <div className="h-4 w-px bg-border ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Resolution</p>
                      <p className="text-sm text-muted-foreground">Within 30 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Helpline</p>
                    <p className="text-sm text-muted-foreground">1800-11-3456</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">grievance@gov.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Portal</p>
                    <p className="text-sm text-muted-foreground">pgportal.gov.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <AIChat />
    </div>
  );
};

export default GrievanceService;