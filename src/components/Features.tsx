
import { Brain, Globe, BarChart3, Shield, Mic, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Multilingual AI Assistant",
      description: "Get help in your preferred regional language with our advanced AI chatbot that understands civic queries and provides instant assistance.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      title: "Live Issue Mapping",
      description: "View real-time civic issues on an interactive map, track resolution progress, and stay updated on community problems.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "AI-Driven Analytics",
      description: "Administrators get powerful insights and data visualization to prioritize issues and improve civic service delivery.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Secure Reporting",
      description: "Report civic issues safely and securely through multiple channels - text, voice, or image - with privacy protection.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Mic,
      title: "Voice Integration",
      description: "Speak naturally in any Indian language to report issues or get assistance, making the platform accessible to all citizens.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Camera,
      title: "Visual Documentation",
      description: "Capture and upload images of civic issues for better documentation and faster resolution by local authorities.",
      color: "text-teal-500",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent"> Modern Governance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge AI technology to transform how citizens interact with their government and community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
