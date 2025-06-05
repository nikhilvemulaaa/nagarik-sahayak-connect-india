
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, FileText, Users, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Legal & Privacy
            </h1>
            <p className="text-xl text-gray-600">
              Your data security and legal rights are our top priority
            </p>
          </div>

          <Tabs defaultValue="privacy" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="security">Data Security</TabsTrigger>
              <TabsTrigger value="rights">Citizen Rights</TabsTrigger>
            </TabsList>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-500" />
                    Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Your Privacy is Protected</h3>
                    </div>
                    <p className="text-sm text-green-700">
                      We are committed to protecting your privacy and complying with all Indian data protection laws.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                      <p className="text-gray-600 mb-3">
                        We collect only the information necessary to provide civic services:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Personal information (name, email, phone) for account creation</li>
                        <li>Location data for issue reporting (with your permission)</li>
                        <li>Photos and descriptions of civic issues you report</li>
                        <li>Communication history with our AI assistant</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">Data Usage</h3>
                      <p className="text-gray-600 mb-3">Your data is used exclusively for:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Processing and resolving your civic issue reports</li>
                        <li>Providing personalized AI assistance</li>
                        <li>Improving municipal services and governance</li>
                        <li>Communicating updates about your reported issues</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">Data Sharing</h3>
                      <p className="text-gray-600">
                        We never sell your personal data. Information is shared only with relevant government 
                        authorities for issue resolution and service improvement, always in compliance with 
                        applicable laws and regulations.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Right to access your personal data</li>
                        <li>Right to correct inaccurate information</li>
                        <li>Right to delete your data (subject to legal requirements)</li>
                        <li>Right to data portability</li>
                        <li>Right to withdraw consent</li>
                      </ul>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terms">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-500" />
                    Terms of Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Platform Usage</h3>
                    <p className="text-gray-600 mb-3">
                      By using Nagarik Sahayak, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Provide accurate and truthful information when reporting issues</li>
                      <li>Use the platform responsibly and for legitimate civic purposes</li>
                      <li>Respect the privacy and rights of other users</li>
                      <li>Not misuse the AI assistant or submit false reports</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Prohibited Activities</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Submitting false or misleading issue reports</li>
                      <li>Using the platform for commercial or promotional purposes</li>
                      <li>Attempting to access other users' personal information</li>
                      <li>Interfering with the platform's operation or security</li>
                      <li>Uploading inappropriate or offensive content</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Service Availability</h3>
                    <p className="text-gray-600">
                      While we strive to maintain 24/7 availability, the platform may occasionally 
                      be unavailable due to maintenance, updates, or technical issues. We are not 
                      liable for any inconvenience caused by such interruptions.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
                    <p className="text-gray-600">
                      Nagarik Sahayak serves as a communication platform between citizens and 
                      government authorities. We facilitate issue reporting but cannot guarantee 
                      resolution timelines or outcomes, as these depend on relevant government departments.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-6 h-6 text-purple-500" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-800 mb-2">Encryption</h3>
                      <p className="text-sm text-purple-700">
                        All data transmission uses TLS 1.3 encryption, and stored data is encrypted using AES-256.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">Access Control</h3>
                      <p className="text-sm text-blue-700">
                        Multi-factor authentication and role-based access ensure only authorized personnel can access data.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">Regular Audits</h3>
                      <p className="text-sm text-green-700">
                        Our security practices undergo regular third-party audits and compliance checks.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-800 mb-2">Data Backup</h3>
                      <p className="text-sm text-orange-700">
                        Automated daily backups ensure data integrity and availability even in case of system failures.
                      </p>
                    </div>
                  </div>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Government Compliance</h3>
                    <p className="text-gray-600 mb-3">
                      Our platform complies with:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Information Technology Act, 2000</li>
                      <li>Personal Data Protection Bill (when enacted)</li>
                      <li>Digital India initiatives and guidelines</li>
                      <li>Cyber Security Framework by Government of India</li>
                    </ul>
                  </section>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Report Security Issues</h3>
                    </div>
                    <p className="text-sm text-yellow-700">
                      If you discover any security vulnerabilities, please report them immediately to our 
                      security team at security@nagarik-sahayak.gov.in
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rights">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-red-500" />
                    Citizen Rights & Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Right to Information (RTI)</h3>
                    <p className="text-gray-600 mb-3">
                      As an Indian citizen, you have the constitutional right to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Access information from public authorities</li>
                      <li>Know how your tax money is being used</li>
                      <li>Get copies of government documents (subject to exemptions)</li>
                      <li>File RTI applications online or offline</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Fundamental Rights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-3">
                        <h4 className="font-medium mb-1">Right to Equality</h4>
                        <p className="text-sm text-gray-600">Equal treatment before law</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <h4 className="font-medium mb-1">Right to Freedom</h4>
                        <p className="text-sm text-gray-600">Freedom of speech and expression</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <h4 className="font-medium mb-1">Right to Life</h4>
                        <p className="text-sm text-gray-600">Right to live with dignity</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <h4 className="font-medium mb-1">Right to Education</h4>
                        <p className="text-sm text-gray-600">Free education for children</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Citizen Services</h3>
                    <p className="text-gray-600 mb-3">
                      Government services you can access:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Passport and visa services</li>
                      <li>Aadhaar card enrollment and updates</li>
                      <li>PAN card application and services</li>
                      <li>Driving license and vehicle registration</li>
                      <li>Birth and death certificates</li>
                      <li>Property registration</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Grievance Redressal</h3>
                    <p className="text-gray-600 mb-3">
                      If your issues are not resolved through normal channels:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Contact the Public Grievance Portal (PGP)</li>
                      <li>Approach the Central Public Information Officer (CPIO)</li>
                      <li>File appeals with higher authorities</li>
                      <li>Seek legal remedies through courts</li>
                    </ul>
                  </section>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">Emergency Services</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Police:</strong> 100
                      </div>
                      <div>
                        <strong>Fire:</strong> 101
                      </div>
                      <div>
                        <strong>Ambulance:</strong> 108
                      </div>
                      <div>
                        <strong>Disaster:</strong> 1078
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Legal;
