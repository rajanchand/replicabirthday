
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const MemoriesSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Memory data - replace with actual images and captions
  const memories = [
    { image: "/placeholder.svg", caption: "Our First Meeting 💕", description: "The day my world changed forever" },
    { image: "/placeholder.svg", caption: "Your Beautiful Smile 😊", description: "That lights up my entire universe" },
    { image: "/placeholder.svg", caption: "Our First Date 🌹", description: "When I knew you were the one" },
    { image: "/placeholder.svg", caption: "Dancing Together 💃", description: "Lost in each other's eyes" },
    { image: "/placeholder.svg", caption: "Sunset Walks 🌅", description: "Hand in hand, heart to heart" },
    { image: "/placeholder.svg", caption: "Lazy Mornings ☀️", description: "Waking up to your love" },
    { image: "/placeholder.svg", caption: "Adventure Time 🎢", description: "Creating memories together" },
    { image: "/placeholder.svg", caption: "Quiet Moments 📚", description: "Finding peace in your presence" },
    { image: "/placeholder.svg", caption: "Celebration Days 🎉", description: "Every day with you is special" },
    { image: "/placeholder.svg", caption: "Forever Moments 💍", description: "Building our future together" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memories.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(timer);
  }, [memories.length]);

  const handleNext = () => {
    navigate("/sweetest-message");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Tree and Swing Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-50">
        <div className="relative">
          <div className="w-4 h-64 bg-gray-800 mx-auto"></div>
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Our Beautiful Memories 💖
              </h2>
              
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="text-pink-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    size={20}
                  />
                ))}
              </div>

              {/* Slideshow Container */}
              <div className="relative max-w-2xl mx-auto">
                <div className="relative h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden border-4 border-pink-200">
                  <img
                    src={memories[currentSlide].image}
                    alt={memories[currentSlide].caption}
                    className="w-full h-full object-cover transition-all duration-1000 transform"
                  />
                  
                  {/* Overlay with caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{memories[currentSlide].caption}</h3>
                    <p className="text-sm opacity-90">{memories[currentSlide].description}</p>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
                  >
                    <span className="text-white text-xl">‹</span>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
                  >
                    <span className="text-white text-xl">›</span>
                  </button>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {memories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-pink-500 scale-125'
                          : 'bg-pink-200 hover:bg-pink-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-600 mb-6">
                  Every picture tells our story, every moment is a treasure 💕
                </p>
                
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Continue Our Journey 💫
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemoriesSlideshow;
