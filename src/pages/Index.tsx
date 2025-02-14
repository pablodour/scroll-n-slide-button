
import ContactButton from '../components/ContactButton';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#F2F2F2]">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vide_3d_logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional color overlay to improve text contrast */}
        <div className="absolute inset-0 bg-[#F2F2F2] opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text animate-fade-in">
              Experience Fitness Like Never Before
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-text animate-fade-in opacity-90">
              Transform your life with personalized training
            </p>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="bg-[#F2F2F2] min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-12 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] text-center">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 py-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-[#000000]">Professional Experience</h3>
              <p className="text-[#000000]">
                As a dedicated personal trainer, I bring years of experience in helping clients achieve their fitness goals. 
                My approach combines scientifically-proven training methods with personalized attention to ensure optimal results.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
                alt="Training session"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-[#000000]">My Philosophy</h3>
              <p className="text-[#000000]">
                I believe in a holistic approach to fitness that encompasses not just physical training, 
                but also mental well-being and nutritional guidance. Every client receives a customized 
                program tailored to their specific needs and goals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
                alt="Training philosophy"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-[#F2F2F2] py-20">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000] text-center mb-16">
            Our Services
          </h2>

          {/* Individual Training */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-[#000000] mb-8">Individual Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>One-on-One Sessions (60 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Choose a single session or select a flexible training package (5, 10, or 20 hours).</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Monthly Subscription (60 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Choose the number of hours you want per week (from 1 to 5 hours). This is a monthly subscription, which covers your training for the entire month.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Express Training (30 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Perfect for busy schedules. Available as single sessions or in packages (5, 10, or 20 hours).</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Express Monthly Subscription (30 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Choose the number of half-hour sessions per week (from 1 to 5 sessions). This is a monthly subscription.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Duo Training */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-[#000000] mb-8">Duo Training (Train with a Partner!)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Duo Sessions (60 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Train with a partner in a single session or select from flexible package options (5, 10, or 20 hours).</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Duo Monthly Subscription (60 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Choose the number of hours per week for you and your partner (1 to 5 hours). This is a monthly subscription.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Express Duo Training (30 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Short, effective sessions for you and your training partner. Available as single sessions or in packages.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle>Express Duo Monthly Subscription (30 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000]">Choose the number of half-hour sessions per week (1 to 5 sessions). This is a monthly subscription for you and your partner.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Small Group Training */}
          <div>
            <h3 className="text-2xl font-semibold text-[#000000] mb-8">Small Group Training</h3>
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle>Group Sessions (Up to 5 people)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#000000]">Train in a small group setting with up to 5 people. Available as single sessions or weekly plans from 1 to 5 sessions per week. Choose the best option for your group!</p>
              </CardContent>
            </Card>
          </div>
          {/* Call to Action */}
          <div className="text-center space-y-8 py-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000000]">Start Your Fitness Journey</h2>
            <p className="text-lg text-[#000000] max-w-2xl mx-auto">
              Ready to transform your life? Let's work together to achieve your fitness goals. 
              Contact me today to schedule your first session.
            </p>
            <div className="pt-8">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
