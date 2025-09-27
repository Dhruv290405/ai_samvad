import { Header } from '@/components/Header';
import { AIChat } from '@/components/AIChat';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, TrendingUp, FileText, Calculator, RefreshCw, 
  Upload, Send, Search, Download, CreditCard 
} from 'lucide-react';

const TaxService = () => {
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
            <TrendingUp className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Income Tax Services</h1>
          <p className="text-muted-foreground mt-2">File ITR, check refunds, and manage tax documents</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ITR Filing Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                File Income Tax Return
              </CardTitle>
              <CardDescription>Complete your ITR filing online</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="assessment-year">Assessment Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                      <SelectItem value="2022-23">2022-23</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="itr-type">ITR Form Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ITR type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="itr1">ITR-1 (Sahaj)</SelectItem>
                      <SelectItem value="itr2">ITR-2</SelectItem>
                      <SelectItem value="itr3">ITR-3</SelectItem>
                      <SelectItem value="itr4">ITR-4 (Sugam)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="pan">PAN Number</Label>
                <Input id="pan" placeholder="ABCDE1234F" className="uppercase" />
              </div>
              
              <div>
                <Label htmlFor="annual-income">Annual Income (₹)</Label>
                <Input id="annual-income" type="number" placeholder="0" />
              </div>
              
              <div className="space-y-2">
                <Label>Upload Supporting Documents</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drag & drop files or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Form 16, 26AS, Bank Statements, etc.
                  </p>
                </div>
              </div>
              
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Start ITR Filing
              </Button>
            </CardContent>
          </Card>

          {/* Tax Calculator & Services */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Tax Calculator
                </CardTitle>
                <CardDescription>Calculate your income tax liability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="gross-income">Gross Annual Income (₹)</Label>
                  <Input id="gross-income" type="number" placeholder="500000" />
                </div>
                
                <div>
                  <Label htmlFor="deductions">Total Deductions (₹)</Label>
                  <Input id="deductions" type="number" placeholder="150000" />
                </div>
                
                <Button variant="outline" className="w-full">
                  Calculate Tax
                </Button>
                
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Estimated Tax Liability</p>
                  <p className="text-2xl font-bold text-primary">₹ 0</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Refund Status
                </CardTitle>
                <CardDescription>Check your tax refund status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="refund-pan">PAN Number</Label>
                  <Input id="refund-pan" placeholder="ABCDE1234F" className="uppercase" />
                </div>
                
                <div>
                  <Label htmlFor="refund-year">Assessment Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                      <SelectItem value="2022-23">2022-23</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Check Refund Status
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Form 26AS
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    TDS Certificate
                  </Button>
                  <Button variant="outline" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Tax
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Returns
                  </Button>
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

export default TaxService;