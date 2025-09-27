import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'mobile' | 'aadhaar'>('email');
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
    otp: ''
  });
  const [isOtpMode, setIsOtpMode] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { loginMethod, ...formData });
    // For demo purposes, redirect to dashboard
    navigate('/dashboard');
  };

  const handleOtpLogin = () => {
    setIsOtpMode(true);
    // Send OTP logic here
    console.log('Sending OTP to:', formData.identifier);
  };

  const getPlaceholderText = () => {
    switch (loginMethod) {
      case 'email':
        return 'Enter your email address';
      case 'mobile':
        return 'Enter your mobile number';
      case 'aadhaar':
        return 'Enter your Aadhaar number';
      default:
        return 'Enter your identifier';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-elevated border-0">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">
                  {translate('Sign In')}
                </CardTitle>
                <CardDescription>
                  Access your government services account
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Login Method Selection */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-secondary rounded-lg">
                <Button
                  variant={loginMethod === 'email' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLoginMethod('email')}
                  className="text-xs"
                >
                  Email
                </Button>
                <Button
                  variant={loginMethod === 'mobile' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLoginMethod('mobile')}
                  className="text-xs"
                >
                  Mobile
                </Button>
                <Button
                  variant={loginMethod === 'aadhaar' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLoginMethod('aadhaar')}
                  className="text-xs"
                >
                  Aadhaar
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="identifier">
                    {loginMethod === 'email' ? 'Email Address' : 
                     loginMethod === 'mobile' ? 'Mobile Number' : 'Aadhaar Number'}
                  </Label>
                  <div className="relative">
                    <Input
                      id="identifier"
                      type={loginMethod === 'email' ? 'email' : 'text'}
                      placeholder={getPlaceholderText()}
                      value={formData.identifier}
                      onChange={(e) => handleInputChange('identifier', e.target.value)}
                      className="pl-10"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      {loginMethod === 'email' ? (
                        <User className="h-4 w-4 text-muted-foreground" />
                      ) : loginMethod === 'mobile' ? (
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Shield className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>

                {!isOtpMode ? (
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <div className="relative">
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={formData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value)}
                        className="pl-10"
                        maxLength={6}
                        required
                      />
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      OTP sent to {formData.identifier}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="space-y-3">
                  <Button type="submit" className="w-full gradient-primary">
                    {isOtpMode ? 'Verify OTP' : 'Sign In'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {!isOtpMode && (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handleOtpLogin}
                    >
                      <Smartphone className="mr-2 h-4 w-4" />
                      Login with OTP
                    </Button>
                  )}
                </div>
              </form>

              <Separator />

              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Create Account
                  </Link>
                </p>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">Secure Government Login</p>
                      <p className="text-muted-foreground">
                        Your data is protected with government-grade security standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access Links */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium text-sm">DigiLocker</h3>
                <p className="text-xs text-muted-foreground">Access documents</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <Smartphone className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium text-sm">mAadhaar</h3>
                <p className="text-xs text-muted-foreground">Mobile app login</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;