import { useState, useCallback } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";
import CinematicIntro from "./components/CinematicIntro";
import Index from "./pages/Index";
import About from "./pages/About";
import Cuisine from "./pages/Cuisine";
import Locations from "./pages/Locations";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [introComplete, setIntroComplete] = useState(() => {
    return !!sessionStorage.getItem('lavore-intro-played');
  });

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const showNavbar = !isHome || introComplete;

  return (
    <>
      {isHome && !introComplete && <CinematicIntro onComplete={handleIntroComplete} />}
      <Navbar visible={showNavbar} />
      <div id="main-content-wrapper" className="transition-all duration-700">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
