
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, Mic, Volume2, Languages, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! मैं नागरिक सहायक का AI असिस्टेंट हूँ। मैं आपकी नागरिक समस्याओं में हिंदी, अंग्रेजी और अन्य भारतीय भाषाओं में सहायता कर सकता हूँ। आप मुझसे कैसे मदद चाहते हैं?',
      sender: 'bot',
      timestamp: new Date(),
      language: 'Hindi'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'kn', name: 'ಕನ್ನಡ' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const responses: { [key: string]: string[] } = {
      'en': [
        "I understand your concern. Let me help you with this civic issue. Based on your location and the nature of the problem, I recommend reporting this through our platform.",
        "That's a common issue in urban areas. I can guide you through the proper channels to get this resolved. Would you like me to help you file a complaint?",
        "Thank you for bringing this to my attention. For issues like this, the best approach is to document it with photos and location data. I can assist you with the reporting process.",
        "I'm here to help you navigate the civic systems. Based on what you've described, this falls under municipal jurisdiction. Let me explain the process."
      ],
      'hi': [
        "मैं आपकी समस्या समझ गया हूँ। मैं इस नागरिक मुद्दे में आपकी सहायता करूंगा। आपके स्थान और समस्या की प्रकृति के आधार पर, मैं हमारे प्लेटफॉर्म के माध्यम से इसकी रिपोर्ट करने की सलाह देता हूँ।",
        "यह शहरी क्षेत्रों में एक आम समस्या है। मैं आपको इसे हल करने के लिए उचित माध्यमों के बारे में बता सकता हूँ। क्या आप चाहेंगे कि मैं शिकायत दर्ज करने में आपकी सहायता करूं?",
        "इस मुद्दे को मेरे सामने लाने के लिए धन्यवाद। इस प्रकार की समस्याओं के लिए, सबसे अच्छा तरीका है कि इसे फोटो और स्थान डेटा के साथ प्रलेखित करें।"
      ]
    };

    const langResponses = responses[selectedLanguage] || responses['en'];
    return langResponses[Math.floor(Math.random() * langResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
        language: languages.find(l => l.code === selectedLanguage)?.name
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = selectedLanguage === 'hi' ? 'hi-IN' : 'en-IN';
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };
      recognition.start();
    } else {
      alert('Voice recognition not supported in your browser');
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'hi' ? 'hi-IN' : 'en-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Assistant
            </h1>
            <p className="text-xl text-gray-600">
              Get instant help in multiple Indian languages with our advanced AI
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6 text-blue-500" />
                  Multilingual AI Assistant
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                  </select>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === 'bot' ? (
                          <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                        ) : (
                          <User className="w-4 h-4 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{message.text}</p>
                          {message.sender === 'bot' && (
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => speakText(message.text)}
                                className="h-6 px-2"
                              >
                                <Volume2 className="w-3 h-3" />
                              </Button>
                              {message.language && (
                                <span className="text-xs opacity-70">{message.language}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={`Type your message in ${languages.find(l => l.code === selectedLanguage)?.name}...`}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleVoiceInput}
                    variant="outline"
                    className={isListening ? 'bg-red-100 border-red-300' : ''}
                  >
                    <Mic className={`w-4 h-4 ${isListening ? 'text-red-500' : ''}`} />
                  </Button>
                  <Button onClick={handleSendMessage} disabled={!inputText.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  AI powered by advanced language models. Supports voice input and text-to-speech.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setInputText("How do I report a water supply issue?")}>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-blue-600">Report Issues</h3>
                <p className="text-sm text-gray-600">Get help with reporting civic problems</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setInputText("What are my rights as a citizen?")}>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-green-600">Know Your Rights</h3>
                <p className="text-sm text-gray-600">Learn about citizen rights and duties</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setInputText("How can I track my complaint status?")}>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-purple-600">Track Status</h3>
                <p className="text-sm text-gray-600">Monitor your complaint progress</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
