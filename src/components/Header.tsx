import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-dental-mercado.png";
import logoWhite from "@/assets/logo-dental-mercado-white.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const servicioCategories = [
  { label: "Implantes dentales", slug: "implantes-dentales" },
  { label: "Odontología", slug: "odontologia" },
  { label: "Ortodoncia", slug: "ortodoncia" },
  { label: "Cirugía maxilofacial", slug: "cirugia-maxilofacial" },
  { label: "Periodoncia", slug: "periodoncia" },
  { label: "Estética dental", slug: "estetica-dental" },
  { label: "Prótesis dental", slug: "protesis-dental" },
  { label: "Rehabilitación oral", slug: "rehabilitacion-oral" },
  { label: "Ortodoncia invisible", slug: "ortodoncia-invisible" },
];

const navItems = [
  { path: "/servicios", label: "Servicios", hasDropdown: true },
  { path: "/nosotros", label: "Sobre nosotros" },
  { path: "/testimonios", label: "Testimonios" },
  { path: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg shadow-soft" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={isDark ? logoWhite : logo} alt="Dental Mercado - Centro Odontológico" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-[15px] font-normal transition-colors hover:text-foreground ${
                    location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-xl shadow-elevated z-50 py-2"
                    >
                      {servicioCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/servicios/${cat.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] font-normal transition-colors hover:text-foreground ${
                  location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link to="/cita" className="hidden sm:block">
            <Button className="rounded-full px-6 h-10 text-sm font-medium">
              Pedir Cita
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === item.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/cita" onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-2 rounded-full">
                  Pedir Cita
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
