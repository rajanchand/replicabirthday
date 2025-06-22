
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SurpriseMessage from "./pages/SurpriseMessage";
import RomanticMessage from "./pages/RomanticMessage";
import MemoriesSlideshow from "./pages/MemoriesSlideshow";
import SweetestMessage from "./pages/SweetestMessage";
import Celebration from "./pages/Celebration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/surprise" element={<SurpriseMessage />} />
          <Route path="/romantic-message" element={<RomanticMessage />} />
          <Route path="/memories" element={<MemoriesSlideshow />} />
          <Route path="/sweetest-message" element={<SweetestMessage />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
