
import ImageCarousel from '../components/ImageCarousel';
import ContactButton from '../components/ContactButton';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <ImageCarousel />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-light animate-fade-in">
              Experience Fitness Like Never Before
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-text-light animate-fade-in opacity-90">
              Transform your life with personalized training
            </p>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="bg-[#FEFDFB] min-h-screen p-8">
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
