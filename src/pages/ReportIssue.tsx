
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Camera, MapPin, Upload, Send, AlertCircle } from 'lucide-react';

const ReportIssue = () => {
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [address, setAddress] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [issueData, setIssueData] = useState({
    title: '',
    description: '',
    category: '',
    urgency: 'medium'
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          // Reverse geocoding simulation
          setAddress(`Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          console.log('Location detected:', { latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPhotos(prev => [...prev, ...files]);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Issue submitted:', {
      ...issueData,
      location,
      address,
      photos: photos.map(p => p.name)
    });
    alert('Issue reported successfully! You will receive updates on resolution progress.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Report a Civic Issue
            </h1>
            <p className="text-xl text-gray-600">
              Help improve your community by reporting issues with location and photo evidence
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Issue Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">Issue Title</Label>
                    <Input
                      id="title"
                      value={issueData.title}
                      onChange={(e) => setIssueData({...issueData, title: e.target.value})}
                      placeholder="Brief title of the issue"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={issueData.category}
                      onChange={(e) => setIssueData({...issueData, category: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="roads">Roads & Infrastructure</option>
                      <option value="water">Water Supply</option>
                      <option value="waste">Waste Management</option>
                      <option value="electricity">Electricity</option>
                      <option value="public-safety">Public Safety</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={issueData.description}
                    onChange={(e) => setIssueData({...issueData, description: e.target.value})}
                    placeholder="Describe the issue in detail..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Urgency Level</Label>
                    <div className="flex gap-4 mt-2">
                      {['low', 'medium', 'high'].map((level) => (
                        <label key={level} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="urgency"
                            value={level}
                            checked={issueData.urgency === level}
                            onChange={(e) => setIssueData({...issueData, urgency: e.target.value})}
                            className="w-4 h-4"
                          />
                          <span className="capitalize">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    Location Information
                  </h3>
                  <div className="flex gap-4">
                    <Button type="button" onClick={getLocation} variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      Detect Current Location
                    </Button>
                    {location && (
                      <div className="flex items-center text-green-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        Location detected
                      </div>
                    )}
                  </div>
                  {address && (
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-blue-800">{address}</p>
                    </div>
                  )}
                </div>

                {/* Photo Upload Section */}
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Camera className="w-5 h-5 text-green-500" />
                    Photo Evidence
                  </h3>
                  <div className="flex gap-4">
                    <Button type="button" onClick={() => fileInputRef.current?.click()} variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photos
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-24 object-cover rounded"
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            className="absolute top-1 right-1 h-6 w-6 p-0"
                            onClick={() => removePhoto(index)}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Issue Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
