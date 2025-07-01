
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate credentials (you can customize these)
    const correctUsername = "replica rasaili"; // Change to desired username
    const correctBirthday = "02/07/1999"; // Change to actual birthday
    
    if (username.toLowerCase().trim() === correctUsername && birthday === correctBirthday) {
      toast({
        title: "Welcome your Birthday wish portal! 💖",
        description: "Get ready for your special surprise my chasmiss...",
      });
      
      setTimeout(() => {
        navigate("/surprise");
      }, 2000);
    } else {
      toast({
        title: "Oops! Try again 💕",
        description: "Please check your details, my love",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-hearts">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${10 + Math.random() * 20}px`
              }}
            />
          ))}
        </div>
        
        {/* Glowing Lights */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-pink-200 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="text-white" size={32} />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Today is your birthday 💖
            </CardTitle>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you want to see your surprise, please fulfill the details below given by your Dai 💌
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 font-medium">
                  Please enter your name in lowercase 💕
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  placeholder="replica rasaili "
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthday" className="text-gray-700 font-medium">
                  Please enter your birthday (DD/MM/YYYY) 🎂
                </Label>
                <Input
                  id="birthday"
                  type="text"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  placeholder="02/07/1999"
                  pattern="\d{2}/\d{2}/\d{4}"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Open My Surprise 💝 your Dai
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
