
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, FileText, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Common Indian names for suggestions
const COMMON_NAMES = [
  'Rajesh Kumar', 'Priya Sharma', 'Amit Singh', 'Sunita Devi', 'Vikram Patel',
  'Anita Gupta', 'Sanjay Verma', 'Kavita Joshi', 'Rahul Agarwal', 'Neha Reddy',
  'Arjun Nair', 'Pooja Mehta', 'Deepak Yadav', 'Ritu Bansal', 'Suresh Iyer'
];

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  aadhar: string;
  verified: boolean;
}

interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  updates: boolean;
}

interface IssueRecord {
  id: string;
  title: string;
  status: 'Resolved' | 'In Progress' | 'Pending';
  date: string;
  category: string;
}

const Profile = () => {
  const { toast } = useToast();
  
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    address: 'Block A, Sector 15, Noida, UP',
    aadhar: '****-****-1234',
    verified: true
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    sms: false,
    push: true,
    updates: true
  });

  const [nameInput, setNameInput] = useState(profile.name);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Memoized name suggestions based on input
  const nameSuggestions = useMemo(() => {
    if (!nameInput || nameInput.length < 2) return [];
    return COMMON_NAMES.filter(name => 
      name.toLowerCase().includes(nameInput.toLowerCase()) && 
      name !== nameInput
    ).slice(0, 5);
  }, [nameInput]);

  // Memoized issue history
  const issueHistory = useMemo<IssueRecord[]>(() => [
    {
      id: 'NS001',
      title: 'Pothole on Main Road',
      status: 'Resolved',
      date: '2024-01-15',
      category: 'Roads'
    },
    {
      id: 'NS002',
      title: 'Broken Street Light',
      status: 'In Progress',
      date: '2024-01-10',
      category: 'Electricity'
    },
    {
      id: 'NS003',
      title: 'Garbage Collection Issue',
      status: 'Pending',
      date: '2024-01-08',
      category: 'Waste Management'
    }
  ], []);

  // Optimized handlers using useCallback
  const handleProfileUpdate = useCallback((field: keyof ProfileData, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleNotificationToggle = useCallback((setting: keyof NotificationSettings) => {
    setNotifications(prev => ({ ...prev, [setting]: !prev[setting] }));
  }, []);

  const handleNameChange = useCallback((value: string) => {
    setNameInput(value);
    setShowSuggestions(value.length >= 2);
    handleProfileUpdate('name', value);
  }, [handleProfileUpdate]);

  const handleNameSuggestionClick = useCallback((suggestedName: string) => {
    setNameInput(suggestedName);
    setShowSuggestions(false);
    handleProfileUpdate('name', suggestedName);
  }, [handleProfileUpdate]);

  const handleSaveProfile = useCallback(() => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  }, [toast]);

  const handleSaveNotifications = useCallback(() => {
    toast({
      title: "Preferences Saved",
      description: "Your notification preferences have been updated.",
    });
  }, [toast]);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'Resolved': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-yellow-600 bg-yellow-100';
      case 'Pending': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  }, []);

  const getInitials = useCallback((name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              User Profile
            </h1>
            <p className="text-xl text-gray-600">
              Manage your account, preferences, and view your civic engagement history
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="history">Issue History</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-500" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {getInitials(profile.name)}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={nameInput}
                        onChange={(e) => handleNameChange(e.target.value)}
                        onFocus={() => setShowSuggestions(nameInput.length >= 2)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        placeholder="Enter your full name"
                      />
                      {showSuggestions && nameSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
                          {nameSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                              onClick={() => handleNameSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileUpdate('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="aadhar">Aadhar Number</Label>
                      <Input
                        id="aadhar"
                        value={profile.aadhar}
                        disabled
                        className="bg-gray-50"
                      />
                      {profile.verified && (
                        <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Verified by Government
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Complete Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={(e) => handleProfileUpdate('address', e.target.value)}
                      placeholder="House No., Street, City, State, PIN"
                    />
                  </div>

                  <Button 
                    onClick={handleSaveProfile}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-500" />
                    Issue History ({issueHistory.length} issues)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {issueHistory.map((issue) => (
                      <div key={issue.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover-lift">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{issue.title}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(issue.date).toLocaleDateString('en-IN')}
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                {issue.category}
                              </div>
                              <span className="text-gray-500">ID: {issue.id}</span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                            {issue.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-6 h-6 text-yellow-500" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => {
                      const labels = {
                        email: { title: 'Email Notifications', desc: 'Receive updates via email' },
                        sms: { title: 'SMS Notifications', desc: 'Receive updates via SMS' },
                        push: { title: 'Push Notifications', desc: 'Receive browser notifications' },
                        updates: { title: 'Issue Updates', desc: 'Get notified about issue resolution progress' }
                      };
                      
                      return (
                        <div key={key} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div>
                            <h3 className="font-medium">{labels[key as keyof typeof labels].title}</h3>
                            <p className="text-sm text-gray-600">{labels[key as keyof typeof labels].desc}</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleNotificationToggle(key as keyof NotificationSettings)}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <Button 
                    onClick={handleSaveNotifications}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                  >
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-red-500" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Your Data is Protected</h3>
                    <p className="text-sm text-green-700">
                      We use government-grade encryption and comply with India's data protection laws.
                      Your personal information is never shared without your consent.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { title: 'Data Usage', desc: 'Your data is used only for civic service improvement and issue resolution.', action: 'View Details' },
                      { title: 'Account Security', desc: 'Change your password and manage security settings.', action: 'Security Settings' },
                      { title: 'Data Export', desc: 'Download a copy of your data and activity history.', action: 'Download Data' },
                      { title: 'Delete Account', desc: 'Permanently delete your account and all associated data.', action: 'Delete Account' }
                    ].map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={item.title === 'Delete Account' ? 'border-red-300 text-red-600 hover:bg-red-50' : ''}
                        >
                          {item.action}
                        </Button>
                      </div>
                    ))}
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

export default Profile;
