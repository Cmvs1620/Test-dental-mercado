import { Link } from "react-router-dom";
import { Sparkle } from "@/components/AbstractShapes";

const Footer = () => {
  return (
    <footer className="bg-[hsl(229,39%,12%)] dark:bg-[hsl(229,39%,10%)] text-[hsl(40,20%,92%)]/70 relative overflow-hidden">
      {/* Decorative sparkle */}
      <div className="absolute top-12 right-12 opacity-10">
        <Sparkle size={80} className="text-primary" />
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl text-[hsl(40,20%,92%)] block mb-4">Dental Mercado</span>
            <p className="text-sm leading-relaxed text-[hsl(40,20%,92%)]/50 max-w-xs">
              Expertos en salud bucodental y odontología estética en el centro de Alicante. Experiencia e innovación al servicio de tu sonrisa.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-[hsl(40,20%,92%)] text-lg mb-5">Navegación</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Inicio" },
                { to: "/servicios", label: "Servicios" },
                { to: "/nosotros", label: "Sobre Nosotros" },
                { to: "/testimonios", label: "Testimonios" },
                { to: "/cita", label: "Pedir Cita" },
                { to: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[hsl(40,20%,92%)] text-lg mb-5">Servicios</h4>
            <ul className="space-y-3 text-sm">
              {["Implantología Dental", "Odontología General", "Ortodoncia", "Cirugía Maxilofacial", "Periodoncia", "Estética Dental", "Prótesis Dental", "Ortodoncia Invisible"].map((s) => (
                <li key={s}>
                  <Link to="/servicios" className="hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[hsl(40,20%,92%)] text-lg mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-[hsl(40,20%,92%)]/50">C/ Calderón de la Barca, 24, 03004 Alicante</li>
              <li>
                <a href="tel:+34966456124" className="hover:text-primary transition-colors">+34 966 456 124</a>
              </li>
              <li>
                <a href="tel:+34680261650" className="hover:text-primary transition-colors">+34 680 261 650</a>
              </li>
              <li>
                <a href="mailto:info@dentalmercado.es" className="hover:text-primary transition-colors">info@dentalmercado.es</a>
              </li>
              <li className="text-[hsl(40,20%,92%)]/50">L-V: 9:30 – 20:00</li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a href="https://www.instagram.com/dentalmercadoalicante/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/dentalmercado" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(40,20%,92%)]/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[hsl(40,20%,92%)]/30">
          <p>© {new Date().getFullYear()} Dental Mercado – Centro Odontológico. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-[hsl(40,20%,92%)]/60 transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-[hsl(40,20%,92%)]/60 transition-colors">Términos</Link>
            <Link to="/cookies" className="hover:text-[hsl(40,20%,92%)]/60 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
