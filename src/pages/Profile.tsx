
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, FileText, MapPin, Calendar } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    address: 'Block A, Sector 15, Noida, UP',
    aadhar: '****-****-1234',
    verified: true
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    updates: true
  });

  const issueHistory = [
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
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-yellow-600 bg-yellow-100';
      case 'Pending': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-500" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
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
                          <Shield className="w-4 h-4" />
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={(e) => setProfile({...profile, address: e.target.value})}
                    />
                  </div>

                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-500" />
                    Issue History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {issueHistory.map((issue) => (
                      <div key={issue.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{issue.title}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {issue.date}
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-6 h-6 text-yellow-500" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.email}
                        onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                        className="w-4 h-4"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-gray-600">Receive updates via SMS</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.sms}
                        onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                        className="w-4 h-4"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Push Notifications</h3>
                        <p className="text-sm text-gray-600">Receive browser notifications</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.push}
                        onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                        className="w-4 h-4"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Issue Updates</h3>
                        <p className="text-sm text-gray-600">Get notified about issue resolution progress</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.updates}
                        onChange={(e) => setNotifications({...notifications, updates: e.target.checked})}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500">
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
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

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Data Usage</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Your data is used only for civic service improvement and issue resolution.
                      </p>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Account Security</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Change your password and manage security settings.
                      </p>
                      <Button variant="outline" size="sm">Security Settings</Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Data Export</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Download a copy of your data and activity history.
                      </p>
                      <Button variant="outline" size="sm">Download Data</Button>
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

export default Profile;
