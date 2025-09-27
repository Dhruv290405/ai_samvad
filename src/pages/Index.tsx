import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { AIChat } from "@/components/AIChat";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  CreditCard, 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Bell,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Shield,
  Smartphone
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();
  
  const mainServices = [
    {
      title: translate("Aadhaar Services"),
      description: "Update details, download e-Aadhaar, check enrollment status, and book appointments",
      icon: <CreditCard className="h-5 w-5" />,
      category: "Identity",
      estimatedTime: "5-10 min",
      status: "active" as const,
      isPopular: true,
      onClick: () => navigate("/services/aadhaar")
    },
    {
      title: translate("PAN Card Services"), 
      description: "Apply for new PAN, check status, download e-PAN, and update PAN information",
      icon: <FileText className="h-5 w-5" />,
      category: "Tax",
      estimatedTime: "15-20 days",
      status: "active" as const,
      isPopular: true,
      onClick: () => navigate("/services/pan")
    },
    {
      title: "Income Tax Filing",
      description: "File ITR online, check refund status, download certificates and forms",
      icon: <TrendingUp className="h-5 w-5" />,
      category: "Tax",
      estimatedTime: "30-45 min",
      status: "active" as const
    },
    {
      title: "Public Grievances",
      description: "Register complaints, track grievance status, and get resolution updates",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "Support",
      estimatedTime: "2-5 min",
      status: "active" as const
    },
    {
      title: "Scheme Registration",
      description: "Apply for government schemes, benefits, and welfare programs",
      icon: <Users className="h-5 w-5" />,
      category: "Welfare",
      estimatedTime: "10-15 min",
      status: "active" as const
    },
    {
      title: "Digital Certificates",
      description: "Apply for various digital certificates and official documents",
      icon: <Award className="h-5 w-5" />,
      category: "Documents",
      estimatedTime: "7-10 days",
      status: "new" as const
    }
  ];

  const stats = [
    { label: "Active Users", value: "12.5M+", icon: <Users className="h-5 w-5" /> },
    { label: "Services Available", value: "150+", icon: <Shield className="h-5 w-5" /> },
    { label: "Applications Processed", value: "8.2M+", icon: <CheckCircle2 className="h-5 w-5" /> },
    { label: "Avg. Response Time", value: "< 24 hrs", icon: <Clock className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="gradient-accent text-accent-foreground font-medium">
                  Digital India Initiative
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Smart <span className="text-primary font-bold">E-Governance</span> Portal
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your single-window platform for all government services. Transparent, 
                  citizen-friendly, and powered by AI assistance in multiple languages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary hover:shadow-elevated transition-smooth" asChild>
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  Download App
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-success" />
                  <span>Secure & Verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bell className="h-4 w-4 text-success" />
                  <span>Real-time Updates</span>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Digital India E-Governance Portal" 
                  className="rounded-2xl shadow-elevated w-full max-w-lg animate-float"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-elevated border">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">AI Assistant Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center gradient-card shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Popular Government Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access essential government services with just a few clicks. 
              Get real-time assistance and track your applications seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border gradient-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Portal?</h2>
              <p className="text-muted-foreground text-lg">
                Built with citizens in mind, powered by cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Trusted</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security with government verification
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-lg gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Multilingual</h3>
                <p className="text-sm text-muted-foreground">
                  Support for 5+ Indian languages with AI translation
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-lg gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Instant notifications and status tracking via WebSocket
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-lg gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">AI Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Smart assistance with contextual help and guidance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">भ</span>
                </div>
                <span className="font-bold">Digital India Portal</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering citizens through digital governance and 
                transparent, accessible government services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Status</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Grievances</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with the latest government services and announcements.
              </p>
              <Button className="w-full">Subscribe to Updates</Button>
            </div>
          </div>

          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Government of India. All rights reserved. | Built with ❤️ for Digital India</p>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default Index;