import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Search, CheckCircle, Clock, FileText, Bell, 
  HelpCircle, Phone, Mail, MessageSquare 
} from 'lucide-react';

const TrackStatusPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Track Application Status</h1>
          <p className="text-muted-foreground mt-2">Monitor your application progress in real-time</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Track Application Status
              </CardTitle>
              <CardDescription>Enter your application details to check current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="app-id">Application ID</Label>
                  <Input id="app-id" placeholder="PAN2024001234" />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Track Status
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Status Results */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Application Status</span>
                  <Badge className="bg-orange-500 text-white">Under Review</Badge>
                </CardTitle>
                <CardDescription>PAN Card Application - PAN2024001234</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Application Received</p>
                      <p className="text-sm text-muted-foreground">Jan 15, 2024 - 10:30 AM</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Documents Verified</p>
                      <p className="text-sm text-muted-foreground">Jan 17, 2024 - 2:15 PM</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Under Review</p>
                      <p className="text-sm text-muted-foreground">In progress...</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border/50 ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Processing Complete</p>
                      <p className="text-sm text-muted-foreground">Pending</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border/50 ml-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Card Dispatched</p>
                      <p className="text-sm text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Estimated Completion</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">February 5, 2024</p>
                  <div className="w-full bg-background rounded-full h-2">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Application Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Type:</span>
                    <span className="font-medium">PAN Card - New</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reference ID:</span>
                    <span className="font-medium">PAN2024001234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Submitted Date:</span>
                    <span className="font-medium">15 Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee:</span>
                    <span className="font-medium">₹ 110 (Paid)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Stage:</span>
                    <span className="font-medium text-orange-600">Under Review</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-success mt-1" />
                    <div>
                      <p className="text-sm font-medium">Documents Verified</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Clock className="h-4 w-4 text-orange-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Application Under Review</p>
                      <p className="text-xs text-muted-foreground">Currently in progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support: 1800-180-1961
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email: support@gov.in
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <AIChat />
    </div>
  );
};

export default TrackStatusPage;