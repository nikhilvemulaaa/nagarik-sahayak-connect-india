
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
              Nagarik Sahayak
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering citizens through AI-driven civic engagement. Building the bridge between governance and people with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Project</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Hackathon Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hackathon</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Team Details</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology Stack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Future Roadmap</a></li>
            </ul>
          </div>
        </div>

        {/* Hackathon Badge */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 rounded-lg p-6 text-center">
            <h4 className="text-xl font-bold mb-2">🏆 IBM Virtual Hackathon 2024</h4>
            <p className="text-gray-400 mb-4">Nagarik Sahayak - Revolutionizing Civic Engagement in India</p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">AI/ML</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Civic Tech</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Social Impact</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for a better India
          </p>
          <p className="mt-2 text-sm">
            © 2024 Nagarik Sahayak. Built for IBM Virtual Hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
