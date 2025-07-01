
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const SurpriseMessage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate("/romantic-message");
  };

  const handlePrevious = () => {
    navigate("/");
  };

  const handleNext = () => {
    navigate("/romantic-message");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-50">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          <ArrowLeft className="mr-2" size={16} />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          Next
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>

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

      {/* Road and Couple Walking */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-600 opacity-60"></div>
      <div className="absolute bottom-8 left-1/4 animate-walk">
        <div className="flex space-x-2">
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {/* Birthday Cakes scattered around */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="text-4xl">🎂</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-3 bg-yellow-400 animate-pulse"></div>
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="text-3xl">🧁</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-2 bg-yellow-400 animate-pulse"></div>
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Additional Candles */}
      <div className="absolute top-40 left-20">
        <div className="text-2xl animate-pulse">🕯️</div>
      </div>
      <div className="absolute top-60 right-24">
        <div className="text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>🕯️</div>
      </div>

      {/* Tree Silhouette with Swing */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Tree */}
          <div className="w-4 h-64 bg-gray-800 mx-auto"></div>
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-full"></div>
          
          {/* Swing */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-20 bg-yellow-600 absolute left-4 animate-swing-left"></div>
            <div className="w-0.5 h-20 bg-yellow-600 absolute right-4 animate-swing-right"></div>
            <div className="w-16 h-3 bg-yellow-700 rounded mt-20 animate-swing"></div>
            
            {/* Couple silhouettes */}
            <div className="absolute -top-2 left-2 w-3 h-6 bg-gray-700 rounded-full animate-swing"></div>
            <div className="absolute -top-2 right-2 w-3 h-6 bg-gray-700 rounded-full animate-swing"></div>
          </div>
        </div>
      </div>

      {/* Birthday Cake */}
      <div className="absolute top-20 right-20 animate-bounce">
        <div className="text-6xl">🎂</div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-4 bg-yellow-400 animate-pulse"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${8 + Math.random() * 16}px`
            }}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
          <Card className="w-full max-w-lg mx-4 bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300 shadow-2xl animate-scale-in">
            <CardContent className="p-8 text-center space-y-6">
              <div className="relative">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  A Special Birthday Message
                </h2>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  To My Special One 💕
                </h3>
                
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              
              <div className="relative z-10 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Close your eyes and feel my love wrapping around you like a warm embrace 💖
                </p>
                
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="text-pink-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                
                <Button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Read My  Message Dalli,Chasmiss 💌
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Audio element for birthday music */}
      <audio autoPlay loop className="hidden">
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default SurpriseMessage;
