import React, { useState } from 'react';
import { 
  Plane, 
  Book, 
  MapPin, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Play,
  Download,
  Calendar,
  Globe,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I customize the branding of the travel guides?",
      answer: "Yes, absolutely! Kultrip generates completely white-label travel guides that you can brand with your agency's logo, colors, and contact information. Your clients will see your brand throughout the entire experience."
    },
    {
      question: "Do I need technical knowledge to use Kultrip?",
      answer: "Not at all. Kultrip is designed for travel professionals, not developers. Simply input your preferences through our intuitive interface, and our AI handles all the technical complexity behind the scenes."
    },
    {
      question: "Can I edit the generated travel guides?",
      answer: "Yes, every guide is fully editable. You can modify itineraries, add your own recommendations, adjust timing, and include special touches that reflect your expertise and local knowledge."
    },
    {
      question: "What types of stories and themes can I use?",
      answer: "Kultrip works with any book, movie, TV series, or cultural theme. From Harry Potter tours in Edinburgh to Game of Thrones experiences in Croatia, or literary walks through Paris - the possibilities are endless."
    },
    {
      question: "How does pricing work?",
      answer: "We're currently in beta with special early access pricing. The first 20 guides are completely free, and beta participants get locked-in rates for the first year. Contact us for detailed pricing information."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/icone-roxo.png" alt="Kultrip" className="h-10 w-10" />
              <span className="text-2xl font-bold text-purple-700">Kultrip</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 transition-colors">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-purple-700 transition-colors">Features</a>
              <a href="#faq" className="text-gray-600 hover:text-purple-700 transition-colors">FAQ</a>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Offer unforgettable travel experiences — 
              <span className="text-purple-700"> powered by AI</span>, 
              <span className="text-orange-500"> delivered by your agency</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Kultrip helps you generate personalized travel guides inspired by books, movies, and series — in just minutes. 
              Transform any story into a compelling travel experience for your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <span>Request Early Access</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Example Guide</span>
              </button>
              <button className="text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Book a Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-hero */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-6">Tested in international travel incubators</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span>Powered by OpenAI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Google Maps Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <span>GetYourGuide APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The challenges you face every day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a travel professional, you know your clients want unique, personalized experiences. 
              But creating themed itineraries takes time you don't have.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Constraints</h3>
              <p className="text-gray-600">
                Researching and planning themed itineraries can take hours or even days, 
                time you'd rather spend with clients or growing your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Expectations</h3>
              <p className="text-gray-600">
                Modern travelers want personalized, story-driven experiences that go beyond 
                standard tourist attractions. They're looking for meaning and connection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Sparkles className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Differentiation</h3>
              <p className="text-gray-600">
                Standing out in a crowded market requires offering something unique. 
                Generic packages won't cut it anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Kultrip Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform any story into a compelling travel experience in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Choose Your Story</h3>
              <p className="text-gray-600">
                Select any book, movie, or TV series that resonates with your client's interests. 
                From classic literature to modern blockbusters.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. AI Creates Magic</h3>
              <p className="text-gray-600">
                Our AI analyzes the story and generates a detailed, personalized travel guide 
                with locations, activities, and cultural insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Deliver Excellence</h3>
              <p className="text-gray-600">
                Present a beautiful, branded travel guide to your clients. 
                Edit, customize, and add your personal touches as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Use Case */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                Fictional Example
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  "Our clients wanted a Harry Potter experience in Scotland"
                </h3>
                <p className="text-gray-600 mb-6">
                  Sarah from Edinburgh Adventures used Kultrip to create a magical 5-day itinerary 
                  inspired by Harry Potter. In just 10 minutes, she had a complete guide featuring:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Filming locations across Edinburgh and the Highlands</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Themed accommodations and dining experiences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Interactive activities and photo opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Weather considerations and seasonal recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Day 1: Diagon Alley in Edinburgh</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Start your magical journey on Victoria Street, the inspiration for Diagon Alley...
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold text-gray-900">Glenfinnan Viaduct</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    The famous bridge from the Hogwarts Express scenes...
                  </p>
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-500">+ 15 more locations and activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to create amazing experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kultrip combines cutting-edge AI with practical travel planning tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Book className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Story-Based Generation</h3>
              <p className="text-gray-600">
                Transform any narrative into a travel experience. Books, movies, series, or cultural themes.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Sparkles className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">White-Label Output</h3>
              <p className="text-gray-600">
                Every guide is fully branded with your agency's identity. Your clients see your brand, not ours.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Personalization</h3>
              <p className="text-gray-600">
                Customize for travel style, budget, group size, interests, and accessibility needs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Mapping</h3>
              <p className="text-gray-600">
                Integrated Google Maps with optimized routes, travel times, and location details.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Globe className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather & POI Integration</h3>
              <p className="text-gray-600">
                Real-time weather data and points of interest from trusted travel APIs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <CheckCircle className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Code Required</h3>
              <p className="text-gray-600">
                Simple, intuitive interface designed for travel professionals, not developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Scarcity */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your travel business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our exclusive beta program and get your first 20 guides completely free
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-4 text-white">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">Limited beta spots available</span>
            </div>
            <p className="text-purple-100 mt-2">Only 50 agencies will be accepted into our beta program</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Join Beta Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Kultrip
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src="/icone-roxo.png" alt="Kultrip" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">Kultrip</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Empowering travel agencies to create unforgettable, story-driven experiences 
              with the power of AI and the personal touch of human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Talk to Us
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Sample
              </button>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Join Beta Now
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Kultrip. All rights reserved. | 
              <a href="#" className="text-purple-400 hover:text-purple-300 ml-2">Privacy Policy</a> | 
              <a href="#" className="text-purple-400 hover:text-purple-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;