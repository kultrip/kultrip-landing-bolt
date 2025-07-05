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
  ChevronUp,
  FileText,
  Zap,
  Heart,
  Award
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
              <a href="#benefits" className="text-gray-600 hover:text-purple-700 transition-colors">Benefits</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 transition-colors">How it Works</a>
              <a href="#product" className="text-gray-600 hover:text-purple-700 transition-colors">See Example</a>
              <a href="#faq" className="text-gray-600 hover:text-purple-700 transition-colors">FAQ</a>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors font-semibold">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Offer your clients unforgettable journeys 
              <span className="text-purple-700"> inspired by stories</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Kultrip helps you generate new revenue by offering themed, custom travel guides — 
              delivered instantly and tailored to each client.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-purple-700 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3">
                <Play className="h-6 w-6" />
                <span>Book a Demo</span>
              </button>
              <button className="bg-orange-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3">
                <Download className="h-6 w-6" />
                <span>Download Free Sample Guide</span>
              </button>
              <button className="border-3 border-purple-700 text-purple-700 px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-700 hover:text-white transition-all flex items-center space-x-3">
                <Zap className="h-6 w-6" />
                <span>Try Kultrip Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-hero */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 font-medium">Tested in international travel incubators</p>
            <div className="flex flex-wrap justify-center items-center gap-12 text-sm text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold">Powered by OpenAI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold">Google Maps Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold">GetYourGuide APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Why travel agencies choose Kultrip
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Transform your business with story-driven travel experiences that your clients will treasure forever
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offer something unique and memorable</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stand out from competitors with themed travel experiences that connect emotionally with your clients' favorite stories.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save hours of research and design work</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                What used to take days of planning now happens in seconds. Focus on your clients, not on research.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No technical integration needed</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Simple web interface that any travel professional can use. No coding, no complex setup required.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guides sent instantly in PDF and HTML</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Professional, branded guides ready to share with clients immediately. Print or digital - your choice.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increase customer satisfaction and loyalty</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Clients remember experiences that touch their hearts. Story-driven travel creates lasting memories.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Works in seconds, beautifully designed</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                AI-powered generation meets professional design. Every guide looks like it was crafted by experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook / Trust Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <Award className="h-16 w-16 text-white mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Be among the first to offer book and movie-inspired experiences your clients will never forget
            </h2>
            <p className="text-2xl text-purple-100 mb-8 leading-relaxed">
              We're inviting a small group of visionary travel agencies to join us as early adopters — 
              and shape the future of story-driven travel.
            </p>
            <div className="bg-white/20 rounded-2xl p-6 inline-block">
              <p className="text-white text-lg font-semibold">
                ✨ Early adopters get lifetime benefits and priority support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Enhanced */}
      <section id="product" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              See Kultrip in action
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Here's a real example of a Harry Potter-inspired travel guide generated in seconds
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-lg font-bold inline-block mb-8">
                  Real Example Generated by Kultrip
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-8">
                  "Harry Potter Magic in Scotland"
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  This complete 5-day itinerary was generated in under 30 seconds, featuring:
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">Filming locations across Edinburgh and the Highlands</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">Themed accommodations and magical dining experiences</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">Interactive activities and photo opportunities</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">Weather considerations and seasonal recommendations</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">Complete with maps, timings, and booking links</span>
                  </div>
                </div>
                <a 
                  href="https://kultrip.com/results/249" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
                >
                  <span>View Full Guide</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <span className="font-bold text-gray-900 text-lg">Day 1: Diagon Alley in Edinburgh</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Start your magical journey on Victoria Street, the inspiration for Diagon Alley. 
                      Visit the shops that inspired J.K. Rowling and discover the real-world magic...
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-6 w-6 text-purple-500" />
                      <span className="font-bold text-gray-900 text-lg">Glenfinnan Viaduct</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      The famous bridge from the Hogwarts Express scenes. Best viewing times, 
                      photography tips, and nearby attractions included...
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <Book className="h-6 w-6 text-orange-500" />
                      <span className="font-bold text-gray-900 text-lg">The Elephant House Café</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Where J.K. Rowling wrote the first Harry Potter book. Reservation tips, 
                      menu highlights, and the story behind the birthplace...
                    </p>
                  </div>
                  
                  <div className="text-center bg-gray-50 p-4 rounded-xl">
                    <span className="text-gray-500 font-semibold">+ 25 more locations, activities, and insider tips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              How Kultrip Works
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Transform any story into a compelling travel experience in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Book className="h-10 w-10 text-purple-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">1. Choose Your Story</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Select any book, movie, or TV series that resonates with your client's interests. 
                From classic literature to modern blockbusters.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">2. AI Creates Magic</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our AI analyzes the story and generates a detailed, personalized travel guide 
                with locations, activities, and cultural insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Plane className="h-10 w-10 text-purple-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">3. Deliver Excellence</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Present a beautiful, branded travel guide to your clients. 
                Edit, customize, and add your personal touches as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-700 to-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to transform your travel business?
          </h2>
          <p className="text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our exclusive beta program and get your first 20 guides completely free. 
            Start offering unforgettable story-driven experiences today.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center space-x-4 text-white mb-4">
              <Clock className="h-8 w-8" />
              <span className="text-2xl font-bold">Limited beta spots available</span>
            </div>
            <p className="text-xl text-purple-100">Only 50 agencies will be accepted into our beta program</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-purple-700 px-12 py-6 rounded-xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3">
              <Play className="h-7 w-7" />
              <span>Book a Demo</span>
            </button>
            <button className="bg-orange-600 text-white px-12 py-6 rounded-xl text-2xl font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3">
              <Download className="h-7 w-7" />
              <span>Download Free Sample Guide</span>
            </button>
            <button className="border-3 border-white text-white px-12 py-6 rounded-xl text-2xl font-bold hover:bg-white hover:text-purple-700 transition-all flex items-center space-x-3">
              <Zap className="h-7 w-7" />
              <span>Try Kultrip Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl text-gray-600">
              Everything you need to know about Kultrip
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-xl font-bold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <img src="/icone-roxo.png" alt="Kultrip" className="h-12 w-12" />
              <span className="text-3xl font-bold text-white">Kultrip</span>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Empowering travel agencies to create unforgettable, story-driven experiences 
              with the power of AI and the personal touch of human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Book a Demo</span>
              </button>
              <button className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Free Sample Guide</span>
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Try Kultrip Now</span>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-lg">
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