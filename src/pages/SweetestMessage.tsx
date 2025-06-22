
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const SweetestMessage = () => {
  const [showHearts, setShowHearts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCelebration = () => {
    navigate("/celebration");
  };

  const handlePrevious = () => {
    navigate("/memories");
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
          onClick={handleCelebration}
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
      <div className="absolute bottom-8 right-1/3 animate-walk" style={{ animationDirection: 'reverse' }}>
        <div className="flex space-x-2">
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {/* Birthday Cakes and Candles */}
      <div className="absolute top-24 left-20 animate-bounce">
        <div className="text-4xl">🎂</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-3 bg-yellow-400 animate-pulse"></div>
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-48 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="text-3xl">🧁</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-2 bg-yellow-400 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-36 left-36">
        <div className="text-2xl animate-pulse">🕯️</div>
      </div>
      <div className="absolute top-60 right-36">
        <div className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🕯️</div>
      </div>

      {/* Animated Hearts */}
      {showHearts && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 animate-heart-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${10 + Math.random() * 25}px`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl animate-scale-in">
          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                The Magic of You ✨
              </h2>
              
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(9)].map((_, i) => (
                  <Heart
                    key={i}
                    className="text-pink-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    size={24}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 border-2 border-pink-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 text-2xl animate-bounce">💕</div>
                <div className="absolute bottom-2 left-2 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
                
                <p className="text-gray-800 text-xl leading-relaxed font-medium text-center">
                  Every moment with you is magic. Your smile, your voice, your love — they are the lights of my life. 
                  You turn ordinary days into extraordinary memories, and you make my heart sing songs I never knew existed.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-2xl animate-spin" style={{ animationDuration: '3s' }}>🌟</div>
                <div className="absolute bottom-2 right-2 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>💖</div>
                
                <p className="text-gray-800 text-xl leading-relaxed font-medium text-center">
                  In your eyes, I see my future. In your touch, I feel home. In your love, I find my purpose. 
                  You are my yesterday, my today, and all of my tomorrows. Happy Birthday to my everything! 💞
                </p>
              </div>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '2s' }}>
              <p className="text-gray-600 mb-6 text-lg">
                But wait... there's one more surprise waiting for you! 🎁
              </p>
              
              <Button
                onClick={handleCelebration}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
              >
                One More Surprise… 🎉
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SweetestMessage;
