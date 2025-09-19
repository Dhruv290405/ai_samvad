import { useState } from 'react';
import { Header } from '@/components/Header';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIChat } from '@/components/AIChat';
import { 
  CreditCard, FileText, Users, MessageSquare, TrendingUp, Bell, Award, 
  Search, Filter, Grid, List, Clock, CheckCircle, Globe, Smartphone, 
  Home, Building, Car, Heart, GraduationCap, Shield
} from 'lucide-react';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Identity', 'Tax', 'Welfare', 'Support', 'Documents', 'Transport', 'Health', 'Education'];
  
  const allServices = [
    // Popular Services
    {
      title: "Aadhaar Services",
      description: "Update details, download e-Aadhaar, check enrollment status, and book appointments at centers",
      icon: <CreditCard className="h-5 w-5" />,
      category: "Identity",
      estimatedTime: "5-10 min",
      status: "active" as const,
      isPopular: true,
      link: "/services/aadhaar"
    },
    {
      title: "PAN Card Services", 
      description: "Apply for new PAN, check application status, download e-PAN, and update information",
      icon: <FileText className="h-5 w-5" />,
      category: "Tax",
      estimatedTime: "15-20 days",
      status: "active" as const,
      isPopular: true,
      link: "/services/pan"
    },
    {
      title: "Income Tax Filing",
      description: "File ITR online, check refund status, download Form 16, and manage tax certificates",
      icon: <TrendingUp className="h-5 w-5" />,
      category: "Tax",
      estimatedTime: "30-45 min",
      status: "active" as const,
      link: "/services/tax"
    },
    {
      title: "Public Grievances",
      description: "Register complaints, track grievance status, and get resolution updates in real-time",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "Support",
      estimatedTime: "2-5 min",
      status: "active" as const,
      link: "/services/grievance"
    },

    // Welfare Services
    {
      title: "PM Kisan Scheme",
      description: "Apply for farmer income support scheme and track benefit disbursements",
      icon: <Users className="h-5 w-5" />,
      category: "Welfare",
      estimatedTime: "10-15 min",
      status: "active" as const
    },
    {
      title: "Ayushman Bharat",
      description: "Health insurance scheme registration and coverage verification",
      icon: <Heart className="h-5 w-5" />,
      category: "Health",
      estimatedTime: "15-20 min",
      status: "active" as const
    },
    {
      title: "Digital Ration Card",
      description: "Apply for ration card, update beneficiary details, and check eligibility",
      icon: <Home className="h-5 w-5" />,
      category: "Welfare",
      estimatedTime: "7-10 days",
      status: "active" as const
    },

    // Document Services
    {
      title: "Passport Services",
      description: "Apply for new passport, renewal, and track application status online",
      icon: <Globe className="h-5 w-5" />,
      category: "Documents",
      estimatedTime: "30-60 days",
      status: "active" as const
    },
    {
      title: "Birth Certificate",
      description: "Apply for birth certificate, corrections, and download digital copies",
      icon: <Award className="h-5 w-5" />,
      category: "Documents",
      estimatedTime: "7-15 days",
      status: "active" as const
    },
    {
      title: "Driving License",
      description: "Apply for new license, renewal, and international driving permit",
      icon: <Car className="h-5 w-5" />,
      category: "Transport",
      estimatedTime: "15-30 days",
      status: "active" as const
    },

    // New Services
    {
      title: "DigiLocker",
      description: "Store and share verified digital documents securely in cloud storage",
      icon: <Shield className="h-5 w-5" />,
      category: "Documents",
      estimatedTime: "Instant",
      status: "new" as const
    },
    {
      title: "Skill Development",
      description: "Enroll in government skill development programs and certification courses",
      icon: <GraduationCap className="h-5 w-5" />,
      category: "Education",
      estimatedTime: "5-10 min",
      status: "new" as const
    },
    {
      title: "UMANG App Services",
      description: "Access multiple government services through unified mobile application",
      icon: <Smartphone className="h-5 w-5" />,
      category: "Identity",
      estimatedTime: "Instant",
      status: "active" as const
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleServiceClick = (service: any) => {
    if (service.link) {
      window.location.href = service.link;
    } else {
      alert(`${service.title} - Full service implementation coming soon!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Government Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive access to all government services in one place. Search, apply, and track your applications seamlessly.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services, forms, documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                {categories.map(category => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid/List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-muted-foreground">
              Showing {filteredServices.length} services
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className={`${
            viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }`}>
            {filteredServices.map((service, index) => (
              <div key={index} onClick={() => handleServiceClick(service)}>
                <ServiceCard 
                  {...service} 
                  className={viewMode === 'list' ? 'hover:shadow-elevated cursor-pointer' : ''}
                />
              </div>
            ))}
          </div>
        </div>

        {filteredServices.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No services found</p>
                <p>Try adjusting your search terms or category filters</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">{allServices.length}</div>
            <div className="text-sm text-muted-foreground">Total Services</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-success">{allServices.filter(s => s.status === 'active').length}</div>
            <div className="text-sm text-muted-foreground">Active Services</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-accent-saffron">{allServices.filter(s => s.status === 'new').length}</div>
            <div className="text-sm text-muted-foreground">New Services</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </Card>
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default ServicesPage;