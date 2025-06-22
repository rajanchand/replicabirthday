
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const RomanticMessage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const fullMessage = "To the love of my life, on this beautiful day you came into the world and later into my heart. Every sunrise is brighter, every moment is magical, and every breath is sweeter because you exist. You are my everything, my forever, my dream come true. Happy Birthday, my everything 💖";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 50); // Typing speed

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    navigate("/memories");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* Same starry background as previous page */}
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

      {/* Animated Fireflies */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-firefly opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Tree Silhouette with Swing (same as previous) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-4 h-64 bg-gray-800 mx-auto"></div>
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-full"></div>
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-20 bg-yellow-600 absolute left-4 animate-swing-left"></div>
            <div className="w-0.5 h-20 bg-yellow-600 absolute right-4 animate-swing-right"></div>
            <div className="w-16 h-3 bg-yellow-700 rounded mt-20 animate-swing"></div>
            
            <div className="absolute -top-2 left-2 w-3 h-6 bg-gray-700 rounded-full animate-swing"></div>
            <div className="absolute -top-2 right-2 w-3 h-6 bg-gray-700 rounded-full animate-swing"></div>
          </div>
        </div>
      </div>

      {/* Main Message Card */}
      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl animate-fade-in">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                My Heart Speaks to Yours 💕
              </h2>
              
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(7)].map((_, i) => (
                  <Heart
                    key={i}
                    className="text-pink-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                    size={16}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-400">
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            {showButton && (
              <div className="text-center animate-fade-in">
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Next Memory ➡️
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RomanticMessage;
