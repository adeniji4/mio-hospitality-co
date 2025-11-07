import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllProperties = lazy(() => import("./pages/AllProperties"));
const Artisans = lazy(() => import("./pages/Artisans"));
const CarFleet = lazy(() => import("./pages/CarFleet"));
const JetOptions = lazy(() => import("./pages/JetOptions"));
const ExploreServices = lazy(() => import("./pages/ExploreServices"));
const Gallery = lazy(() => import("./pages/Gallery"));

// Lazy load service pages
const InteriorDesign = lazy(() => import("./pages/Services/InteriorDesign"));
const AirbnbServices = lazy(() => import("./pages/Services/AirbnbServices"));
const Videography = lazy(() => import("./pages/Services/Videography"));
const CarHire = lazy(() => import("./pages/Services/CarHire"));
const JetHire = lazy(() => import("./pages/Services/JetHire"));
const FacilityManagement = lazy(() => import("./pages/Services/FacilityManagement"));

// Create a client
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/properties" element={<AllProperties />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/car-fleet" element={<CarFleet />} />
            <Route path="/jet-options" element={<JetOptions />} />
            <Route path="/explore-services" element={<ExploreServices />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Service Routes */}
            <Route path="/services/interior-design" element={<InteriorDesign />} />
            <Route path="/services/airbnb" element={<AirbnbServices />} />
            <Route path="/services/videography" element={<Videography />} />
            <Route path="/services/car-hire" element={<CarHire />} />
            <Route path="/services/jet-hire" element={<JetHire />} />
            <Route path="/services/facility-management" element={<FacilityManagement />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedRoutes />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
