import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Testimonios from "./pages/Testimonios";
import Contacto from "./pages/Contacto";
import Cita from "./pages/Cita";
import NotFound from "./pages/NotFound";
import ImplantesDentales from "./pages/servicios/ImplantesDentales";
import Odontologia from "./pages/servicios/Odontologia";
import Ortodoncia from "./pages/servicios/Ortodoncia";
import OrtodonciaInvisible from "./pages/servicios/OrtodonciaInvisible";
import CirugiaMaxilofacial from "./pages/servicios/CirugiaMaxilofacial";
import Periodoncia from "./pages/servicios/Periodoncia";
import EsteticaDental from "./pages/servicios/EsteticaDental";
import ProtesisDental from "./pages/servicios/ProtesisDental";
import RehabilitacionOral from "./pages/servicios/RehabilitacionOral";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios/implantes-dentales" element={<ImplantesDentales />} />
              <Route path="/servicios/odontologia" element={<Odontologia />} />
              <Route path="/servicios/ortodoncia" element={<Ortodoncia />} />
              <Route path="/servicios/ortodoncia-invisible" element={<OrtodonciaInvisible />} />
              <Route path="/servicios/cirugia-maxilofacial" element={<CirugiaMaxilofacial />} />
              <Route path="/servicios/periodoncia" element={<Periodoncia />} />
              <Route path="/servicios/estetica-dental" element={<EsteticaDental />} />
              <Route path="/servicios/protesis-dental" element={<ProtesisDental />} />
              <Route path="/servicios/rehabilitacion-oral" element={<RehabilitacionOral />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/testimonios" element={<Testimonios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cita" element={<Cita />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
