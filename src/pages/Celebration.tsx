
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Celebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sequence of celebrations
    const timer1 = setTimeout(() => setShowCelebration(true), 500);
    const timer2 = setTimeout(() => setShowConfetti(true), 1500);
    const timer3 = setTimeout(() => setShowMessage(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handlePrevious = () => {
    navigate("/sweetest-message");
  };

  const handleNext = () => {
    navigate("/final-celebration");
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
        {showMessage && (
          <Button
            onClick={handleNext}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 animate-pulse"
          >
            Final Surprise
            <ArrowRight className="ml-2" size={16} />
          </Button>
        )}
      </div>

      {/* Road and Couple Walking */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-600 opacity-60"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-walk">
        <div className="flex space-x-2">
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
          <div className="w-3 h-8 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {/* Multiple Birthday Cakes */}
      <div className="absolute top-16 left-16 animate-bounce">
        <div className="text-4xl">🎂</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-3 bg-yellow-400 animate-pulse"></div>
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="text-3xl">🧁</div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-2 bg-yellow-400 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-20 left-40">
        <div className="text-2xl animate-pulse">🕯️</div>
      </div>
      <div className="absolute top-44 right-40">
        <div className="text-2xl animate-pulse" style={{ animationDelay: '0.3s' }}>🕯️</div>
      </div>
      <div className="absolute top-60 left-20">
        <div className="text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>🕯️</div>
      </div>

      {/* Blinking Lights */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-300 rounded-full animate-blink"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* Falling Stars */}
      {showCelebration && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}

      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#ff69b4', '#ff1493', '#9370db', '#87ceeb', '#ffd700'][Math.floor(Math.random() * 5)],
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Giant Birthday Cake */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="text-8xl animate-bounce">🎂</div>
        {showCelebration && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-2 h-8 bg-yellow-400 animate-candle-glow"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="w-3 h-3 bg-orange-400 rounded-full -mt-1 animate-pulse"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-heart-explosion"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              fontSize: `${15 + Math.random() * 30}px`,
              opacity: Math.random() * 0.8 + 0.3
            }}
          />
        ))}
      </div>

      {/* Main Message */}
      {showMessage && (
        <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
          <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm border-pink-200 shadow-2xl animate-scale-in">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Happy Birthday Birthday Girl Replica 💞
                </h1>
                
                <div className="flex justify-center space-x-3">
                  {[...Array(11)].map((_, i) => (
                    <Heart
                      key={i}
                      className="text-pink-400 animate-heart-beat"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      size={32}
                    />
                  ))}
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Let's Celebrate your birthday Forever! 🎉✨
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border-4 border-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 animate-pulse"></div>
                  <p className="text-gray-800 text-2xl leading-relaxed font-semibold relative z-10">
                    🎂 May your special day be filled with happiness, laughter, and endless love! 🎂
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-4 border-purple-200">
                  <p className="text-gray-800 text-xl leading-relaxed font-medium">
                  तिमी हाँस्दा समय रोकिएजस्तो लाग्छ, अनि तिमी जन्मिएको दिन, संसारमा मिठास थपिएको दिन जस्तो लाग्छ। 💕✨
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl animate-bounce">🎁🎊🎈💖🌟</div>
                <p className="text-2xl font-bold text-pink-600 animate-pulse">
                  Hey Happy birthday Replica.. 💝
                </p>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  One Final Surprise ✨
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Celebration;
