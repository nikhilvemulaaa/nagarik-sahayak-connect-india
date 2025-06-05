
import { Bot, MapPin, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* City Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjk1MDA7c3RvcC1vcGFjaXR5OjAuMSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMmMzNTU7c3RvcC1vcGFjaXR5OjAuMSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZ3JhZCkiLz48L3N2Zz4=')`
        }}
      />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwxNTQsMAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Bot className="w-4 h-4" />
            AI-Powered Civic Platform
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent leading-tight mb-6 animate-fade-in">
            Nagarik Sahayak
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in">
            Empowering Citizens Through AI-Driven Civic Engagement
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            A revolutionary multilingual platform that bridges the gap between citizens and governance. 
            Report issues with location detection and photo uploads, get AI assistance in multiple languages, 
            and participate in building a better India with complete privacy and security.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link to="/report">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Report an Issue
              </Button>
            </Link>
            <Link to="/assistant">
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg transition-all duration-300">
                Try AI Assistant
              </Button>
            </Link>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in">
            <Link to="/assistant" className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <MessageSquare className="w-8 h-8 text-orange-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">AI Chatbot</span>
            </Link>
            <Link to="/report" className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Location & Photos</span>
            </Link>
            <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Community</span>
            </div>
            <Link to="/legal" className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Bot className="w-8 h-8 text-purple-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Privacy & Legal</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements with smooth animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-60 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
