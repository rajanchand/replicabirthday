
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCelebration = () => {
  const [showScene, setShowScene] = useState(false);
  const [showDancing, setShowDancing] = useState(false);
  const [showKiss, setShowKiss] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sequence of animations
    const timer1 = setTimeout(() => setShowScene(true), 500);
    const timer2 = setTimeout(() => setShowDancing(true), 3000);
    const timer3 = setTimeout(() => setShowKiss(true), 6000);
    const timer4 = setTimeout(() => setShowFinalMessage(true), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handlePrevious = () => {
    navigate("/celebration");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          <ArrowLeft className="mr-2" size={16} />
          Previous
        </Button>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-600 opacity-60"></div>

      {/* Falling Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 text-3xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      {/* Birthday Cakes */}
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

      {/* Main Couple - Walking and Dancing */}
      {showScene && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className={`flex space-x-4 transition-all duration-1000 ${showDancing ? 'animate-pulse' : 'animate-walk'}`}>
            {/* Male character */}
            <div className="relative">
              <div className="w-6 h-12 bg-blue-600 rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full"></div>
              {showDancing && (
                <div className="absolute -top-8 -left-2 text-red-500 animate-heart-beat">💕</div>
              )}
            </div>
            
            {/* Female character */}
            <div className="relative">
              <div className="w-6 h-12 bg-pink-500 rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full"></div>
              {showDancing && (
                <div className="absolute -top-8 -right-2 text-red-500 animate-heart-beat">💕</div>
              )}
            </div>
          </div>
          
          {/* Kiss effect */}
          {showKiss && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="text-4xl animate-heart-explosion">💋</div>
              <div className="absolute inset-0 flex justify-center items-center">
                {[...Array(8)].map((_, i) => (
                  <Heart
                    key={i}
                    className="absolute text-red-400 animate-heart-float"
                    style={{
                      left: `${Math.cos(i * Math.PI / 4) * 30}px`,
                      top: `${Math.sin(i * Math.PI / 4) * 30}px`,
                      animationDelay: `${i * 0.2}s`
                    }}
                    size={20}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Celebrating People throwing flowers and sprays */}
      {showScene && (
        <>
          {/* Left side people */}
          <div className="absolute bottom-20 left-8">
            <div className="w-4 h-8 bg-green-600 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="absolute -top-4 -right-2 text-2xl animate-pulse">🌸</div>
          </div>

          <div className="absolute bottom-24 left-20">
            <div className="w-4 h-8 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="absolute -top-4 -left-2 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>🎊</div>
          </div>

          {/* Right side people */}
          <div className="absolute bottom-20 right-8">
            <div className="w-4 h-8 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="absolute -top-4 -left-2 text-2xl animate-pulse" style={{ animationDelay: '0.4s' }}>🌹</div>
          </div>

          <div className="absolute bottom-24 right-20">
            <div className="w-4 h-8 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="absolute -top-4 -right-2 text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>✨</div>
          </div>
        </>
      )}

      {/* Floating flowers and celebration items */}
      {showScene && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const items = ['🌸', '🌹', '🎊', '✨', '💐', '🎉'];
            return (
              <div
                key={i}
                className="absolute text-2xl animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              >
                {items[Math.floor(Math.random() * items.length)]}
              </div>
            );
          })}
        </div>
      )}

      {/* Confetti explosion */}
      {showDancing && (
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#ff69b4', '#ff1493', '#9370db', '#87ceeb', '#ffd700', '#ff6347'][Math.floor(Math.random() * 6)],
                width: `${2 + Math.random() * 5}px`,
                height: `${2 + Math.random() * 5}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Final Message */}
      {showFinalMessage && (
        <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
          <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm border-pink-200 shadow-2xl animate-scale-in">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Forever & Always 💞
                </h1>
                
                <div className="flex justify-center space-x-2">
                  {[...Array(15)].map((_, i) => (
                    <Heart
                      key={i}
                      className="text-pink-400 animate-heart-beat"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      size={24}
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border-4 border-pink-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 animate-pulse"></div>
                <p className="text-gray-800 text-3xl leading-relaxed font-bold relative z-10">
                  🎂 The End of a Perfect Birthday Story 🎂
                </p>
                <p className="text-gray-700 text-xl mt-4 relative z-10">
                  Our love story continues forever... ✨💕✨
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl animate-bounce">👑💖👑</div>
                <p className="text-3xl font-bold text-pink-600 animate-pulse">
                  Happy Birthday My Queen! 👸💝
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FinalCelebration;
