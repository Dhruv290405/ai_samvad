import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'active' | 'maintenance' | 'new';
  category: string;
  estimatedTime?: string;
  isPopular?: boolean;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  status = 'active', 
  category, 
  estimatedTime,
  isPopular = false 
}: ServiceCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-3 w-3 text-success" />;
      case 'maintenance':
        return <AlertCircle className="h-3 w-3 text-destructive" />;
      case 'new':
        return <Clock className="h-3 w-3 text-accent-saffron" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'success';
      case 'maintenance':
        return 'destructive';
      case 'new':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="group relative overflow-hidden transition-smooth hover:shadow-elevated hover:-translate-y-1 gradient-card border-border/50">
      {isPopular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="gradient-accent text-accent-foreground font-medium">
            Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-light/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
                {getStatusIcon()}
              </div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-smooth">
                {title}
              </CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </CardDescription>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {estimatedTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{estimatedTime}</span>
              </div>
            )}
            <Badge variant={getStatusColor() as any} className="text-xs">
              {status === 'active' ? 'Available' : status === 'maintenance' ? 'Maintenance' : 'New'}
            </Badge>
          </div>

          <Button 
            size="sm" 
            className="gap-2 group-hover:gap-3 transition-smooth"
            disabled={status === 'maintenance'}
          >
            Access
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};