import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AIChat } from '@/components/AIChat';
import { 
  FileText, Search, CheckCircle, Clock, AlertCircle, 
  Download, Eye, Filter, Calendar, User, ArrowRight 
} from 'lucide-react';

const ApplicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const applications = [
    {
      id: 'PAN2024001234',
      type: 'PAN Card Application',
      submittedDate: '2024-01-15',
      status: 'Under Review',
      expectedDate: '2024-02-05',
      statusColor: 'orange',
      progress: 60
    },
    {
      id: 'ADR2024005678',
      type: 'Aadhaar Address Update',
      submittedDate: '2024-01-10',
      status: 'Completed',
      expectedDate: '2024-01-25',
      statusColor: 'success',
      progress: 100
    },
    {
      id: 'ITR2024009012',
      type: 'Income Tax Return',
      submittedDate: '2024-01-08',
      status: 'Processing',
      expectedDate: '2024-02-15',
      statusColor: 'blue',
      progress: 75
    },
    {
      id: 'GRV2024003456',
      type: 'Public Grievance',
      submittedDate: '2024-01-12',
      status: 'Pending',
      expectedDate: '2024-01-30',
      statusColor: 'red',
      progress: 25
    },
    {
      id: 'PSP2024007890',
      type: 'Passport Application',
      submittedDate: '2024-01-05',
      status: 'Document Verification',
      expectedDate: '2024-03-05',
      statusColor: 'orange',
      progress: 45
    }
  ];

  const recentActions = [
    {
      action: 'Document uploaded',
      application: 'PAN Card Application',
      time: '2 hours ago',
      icon: <FileText className="h-4 w-4" />
    },
    {
      action: 'Status updated',
      application: 'Aadhaar Update',
      time: '1 day ago',
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      action: 'Payment processed',
      application: 'Passport Application',
      time: '3 days ago',
      icon: <CheckCircle className="h-4 w-4" />
    }
  ];

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'Processing':
      case 'Under Review':
      case 'Document Verification':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'Pending':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Applications</h1>
          <p className="text-xl text-muted-foreground">
            Track and manage all your government service applications in one place
          </p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Applications</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {/* Search and Filter */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    {['All', 'Pending', 'Processing', 'Under Review', 'Completed'].map(status => (
                      <Badge 
                        key={status}
                        variant={statusFilter === status ? 'default' : 'outline'}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                        onClick={() => setStatusFilter(status)}
                      >
                        {status}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications List */}
            <div className="space-y-4">
              {filteredApplications.map((app) => (
                <Card key={app.id} className="hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{app.type}</h3>
                              {getStatusIcon(app.status)}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              Application ID: {app.id}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Submitted: {new Date(app.submittedDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Expected completion: {new Date(app.expectedDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">{app.progress}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="gradient-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${app.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Badge 
                          variant={app.status === 'Completed' ? 'default' : 'secondary'}
                          className={`${app.statusColor === 'success' ? 'bg-success text-success-foreground' : 
                                     app.statusColor === 'orange' ? 'bg-orange-500 text-white' :
                                     app.statusColor === 'red' ? 'bg-destructive text-destructive-foreground' :
                                     app.statusColor === 'blue' ? 'bg-blue-500 text-white' : ''}`}
                        >
                          {app.status}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {app.status === 'Completed' && (
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredApplications.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-lg text-muted-foreground mb-2">No applications found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {applications.filter(app => app.status === 'Completed').map((app) => (
                <Card key={app.id} className="hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{app.type}</h3>
                        <p className="text-sm text-muted-foreground">ID: {app.id}</p>
                        <p className="text-sm text-muted-foreground">
                          Completed: {new Date(app.expectedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success text-success-foreground">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                        <Button size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions.map((action, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{action.action}</p>
                        <p className="text-sm text-muted-foreground">{action.application}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{action.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex items-center gap-3">
                <FileText className="h-5 w-5" />
                <div className="text-left">
                  <p className="font-medium">New Application</p>
                  <p className="text-sm text-muted-foreground">Start a new service request</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex items-center gap-3">
                <Search className="h-5 w-5" />
                <div className="text-left">
                  <p className="font-medium">Track Status</p>
                  <p className="text-sm text-muted-foreground">Check application progress</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex items-center gap-3">
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <p className="font-medium">Download Center</p>
                  <p className="text-sm text-muted-foreground">Get certificates & documents</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <AIChat />
    </div>
  );
};

export default ApplicationsPage;