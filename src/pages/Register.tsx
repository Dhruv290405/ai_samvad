import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Smartphone,
  ArrowRight,
  UserPlus,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    aadhaar: '',
    dateOfBirth: '',
    gender: '',
    state: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    mobileOtp: '',
    emailOtp: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
    // For demo purposes, redirect to login
    navigate('/login');
  };

  const sendOTP = (type: 'mobile' | 'email') => {
    console.log(`Sending OTP to ${type}:`, formData[type]);
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <Card className="shadow-elevated border-0">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">
                  Create Account
                </CardTitle>
                <CardDescription>
                  Register for government services access
                </CardDescription>
              </div>
              
              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`h-2 w-8 rounded-full ${
                      step >= num ? 'bg-primary' : 'bg-secondary'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <div className="relative">
                        <Input
                          id="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                          className="pl-10"
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aadhaar">Aadhaar Number</Label>
                      <div className="relative">
                        <Input
                          id="aadhaar"
                          value={formData.aadhaar}
                          onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                          className="pl-10"
                          placeholder="XXXX XXXX XXXX"
                          required
                        />
                        <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state.toLowerCase().replace(' ', '-')}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
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
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="font-medium mb-2">Verify Your Details</h3>
                      <p className="text-sm text-muted-foreground">
                        We've sent OTP to your mobile and email
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobileOtp">Mobile OTP</Label>
                        <div className="flex gap-2">
                          <Input
                            id="mobileOtp"
                            value={formData.mobileOtp}
                            onChange={(e) => handleInputChange('mobileOtp', e.target.value)}
                            placeholder="Enter mobile OTP"
                            maxLength={6}
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => sendOTP('mobile')}
                          >
                            Resend
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emailOtp">Email OTP</Label>
                        <div className="flex gap-2">
                          <Input
                            id="emailOtp"
                            value={formData.emailOtp}
                            onChange={(e) => handleInputChange('emailOtp', e.target.value)}
                            placeholder="Enter email OTP"
                            maxLength={6}
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => sendOTP('email')}
                          >
                            Resend
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 gradient-primary"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 gradient-primary"
                      disabled={!formData.acceptTerms}
                    >
                      Create Account
                      <CheckCircle2 className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Government Registration</p>
                    <p className="text-muted-foreground">
                      Your information is verified through government databases for security.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Register;