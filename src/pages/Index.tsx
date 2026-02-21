import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Stethoscope, Smile, Siren, Baby, ArrowRight, ChevronLeft, ChevronRight, Check, Plus, Minus, Heart, Zap, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DentalClinicSchema } from "@/components/JsonLd";
import { AnimatedSparkle, Sparkle, DotGrid, CircleRing } from "@/components/AbstractShapes";
/**
 * 🖼️ HERO IMAGE — Change the path below to swap the hero photo.
 * Just replace the file at src/assets/hero-dental.jpg or point to a new image:
 * e.g. import heroImage from "@/assets/my-new-hero.jpg";
 */
import heroImage from "@/assets/hero-dental.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }
  })
};

const highlights = [
{ num: "01", title: "Abiertos L-V", desc: "Lunes a viernes de 9:30 a 20:00 para tu comodidad." },
{ num: "02", title: "Alicante Centro", desc: "C/ Calderón de la Barca, 24 – en el centro de la ciudad." },
{ num: "03", title: "Experiencia", desc: "Expertos en salud bucodental y odontología estética." },
{ num: "04", title: "Centro de Implantes", desc: "Especialistas en implantología dental avanzada." }];


const testimonials = [
{ name: "Francisco Solesio Pilarte", city: "Alicante", headline: "Si tienes miedo al dolor, esta es tu clínica.", text: "Me trató Javier Rodríguez y lo hizo con mucho cuidado, sin hacer daño, explicándome en todo momento lo que iba a hacer. Con mucha profesionalidad, tacto y cercanía. Muy recomendable.", rating: 5 },
{ name: "Boris", city: "Alicante", headline: "Trabajo prolijo y de muy buena calidad.", text: "Ya varias veces me hice atender con Dr. Carpena en esta clínica y la verdad es que estoy súper satisfecho por los servicios. No es fácil de encontrar un lugar de excelentes profesionales.", rating: 5 },
{ name: "Maria José Ruiz Rodríguez", city: "Alicante", headline: "Les pongo un 10. Unas manos milagrosas.", text: "Tenía mucho miedo a una extracción y todo el equipo, y el doctor Francisco Carpena me tranquilizaron desde el primer momento. No sentí nada, volveré sin duda.", rating: 5 },
{ name: "Paula Espallardo", city: "Alicante", headline: "El Dr. Rodríguez me explicó todo de manera clara.", text: "Tuve muy buena experiencia en la clínica Dental Mercado. Desde el momento en que llegué el personal fue muy amable y profesional. Me hizo sentir completamente cómoda.", rating: 5 },
{ name: "Elena Modesto", city: "Alicante", headline: "Sin duda la mejor clínica de Alicante.", text: "Después de probar sin éxito varias clínicas en Alicante, Clínica Dental Mercado para mí sin dudas actualmente es la mejor clínica que existe en Alicante.", rating: 5 },
{ name: "Joan Aveledo Navarro", city: "Alicante", headline: "Buen trato económico y buena ubicación.", text: "Me atendió Naiara, una chica muy simpática. Me han tratado súper bien y lo recomiendo al 100x100.", rating: 5 },
{ name: "Elisa Iturre", city: "Alicante", headline: "Gracias por buscar un espacio para atenderme.", text: "Quedé muy conforme con la atención del dentista. Lo valoro muchísimo.", rating: 5 },
{ name: "Mr_cina_", city: "Alicante", headline: "Excelente atención, 100% recomendado.", text: "Gracias al dentista y su personal por la profesionalidad y amabilidad.", rating: 5 }];


const services = [
{ icon: Zap, title: "Implantología Dental", desc: "Tecnología avanzada y equipos especializados para un análisis minucioso de tu estructura ósea." },
{ icon: Stethoscope, title: "Odontología General", desc: "Revisiones completas, limpiezas profesionales y tratamientos preventivos." },
{ icon: Smile, title: "Ortodoncia", desc: "Análisis completo de tu expresión dental para una solución a medida." },
{ icon: Heart, title: "Estética Dental", desc: "Tratamientos de embellecimiento dental a medida: blanqueamiento, carillas y diseño de sonrisa." },
{ icon: Siren, title: "Cirugía Maxilofacial", desc: "Desde muelas del juicio hasta implantes dentales con técnica avanzada." },
{ icon: Baby, title: "Periodoncia", desc: "Mantenimiento de encías óptimas para una sonrisa duradera y funcional." }];


const marqueeItems = [
"Implantología", "Ortodoncia", "Invisalign", "Blanqueamiento", "Periodoncia",
"Cirugía Maxilofacial", "Carillas", "Prótesis Dental", "Estética Dental", "Rehabilitación Oral"];


const faqs = [
{ q: "¿Qué incluye la primera consulta gratuita?", a: "La primera consulta incluye un examen dental completo, radiografías digitales y un plan de tratamiento personalizado." },
{ q: "¿Ofrecéis planes de financiación?", a: "Sí, ofrecemos planes de pago flexibles sin intereses para que puedas acceder a todos nuestros tratamientos." },
{ q: "¿Cuánto dura un tratamiento de implantes?", a: "El proceso completo de implantes suele durar entre 3 y 6 meses, dependiendo de cada caso." },
{ q: "¿Atendéis en inglés?", a: "Sí, nuestro equipo es bilingüe. Atendemos tanto en español como en inglés." }];


/* Google "G" logo SVG */
const GoogleG = () =>
<svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.4 3.2 29.5 1 24 1 14.9 1 7.2 6.3 3.7 13.9l7 5.4C12.5 13.3 17.8 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.2-9.9 6.2-16.9z" />
    <path fill="#FBBC05" d="M10.7 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7-5.4C2.1 17 1 20.4 1 24s1.1 7 3.7 10.1l7-5.4z" />
    <path fill="#34A853" d="M24 47c5.5 0 10.1-1.8 13.5-4.9l-7.4-5.7c-1.8 1.2-4.1 1.9-6.1 1.9-6.2 0-11.5-3.8-13.3-9.3l-7 5.4C7.2 41.7 14.9 47 24 47z" />
  </svg>;


/* Premium two-column reviews section */
const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left column — heading + stat card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-[1.08]">
              Reseñas<br />de nuestros<br />clientes
            </motion.h2>

            <motion.div variants={fadeUp} custom={1} className="bg-[hsl(var(--reviews-card))] rounded-3xl p-8 relative overflow-hidden">
              <Sparkle size={90} className="absolute -bottom-2 -right-2 text-white opacity-10" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-[240px]">
                Reseñas verificadas de nuestros pacientes en Google
              </p>
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl text-white leading-none">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) =>
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Anterior reseña"
                className="w-12 h-12 rounded-full border-2 border-foreground/15 flex items-center justify-center hover:border-foreground/40 hover:bg-foreground/5 transition-all">

                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente reseña"
                className="w-12 h-12 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all">

                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              <span className="text-sm text-muted-foreground ml-2">
                {current + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>

          {/* Right column — stacked testimonial cards */}
          <div className="relative min-h-[320px] lg:min-h-[380px]">
            {/* Shadow cards for stacked effect */}
            <div className="absolute inset-x-3 top-3 bottom-0 bg-card/60 border rounded-3xl" />
            <div className="absolute inset-x-1.5 top-1.5 bottom-0 bg-card/80 border rounded-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-card border rounded-3xl p-8 lg:p-10 shadow-card">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-semibold text-foreground text-lg">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.city}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <GoogleG />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) =>
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Headline */}
                <p className="font-serif text-xl lg:text-2xl text-foreground leading-snug mb-4">
                  {t.headline}
                </p>

                {/* Full text */}
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  "{t.text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>);

};

const Index = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <DentalClinicSchema />

      {/* ===== HERO ===== */}
      <section className="pt-24 pb-6 px-4 lg:px-6">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-end">
          {/* Background image */}
          <img src={heroImage} alt="Clínica Dental Alicante" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />

          {/* Abstract shapes */}
          <div className="absolute top-6 right-6 opacity-30 hidden lg:block">
            <DotGrid className="text-white" rows={4} cols={4} />
          </div>

          {/* Floating highlight card */}
          <div className="absolute top-8 left-6 lg:left-10 z-20 hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHighlight}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card/95 backdrop-blur-md rounded-2xl p-5 shadow-elevated w-64 lg:w-72">

                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-mono">{highlights[currentHighlight].num}</span>
                  <AnimatedSparkle size={24} className="text-primary" delay={0} />
                </div>
                <h3 className="font-serif italic text-lg text-foreground mb-1">{highlights[currentHighlight].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{highlights[currentHighlight].desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => setCurrentHighlight((prev) => (prev - 1 + highlights.length) % highlights.length)}
                className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors">

                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="flex gap-1.5 flex-1">
                {highlights.map((_, i) =>
                <div key={i} className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${i === currentHighlight ? "bg-white" : "bg-white/30"}`} />
                )}
              </div>
              <button
                onClick={() => setCurrentHighlight((prev) => (prev + 1) % highlights.length)}
                className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors">

                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Hero bottom content */}
          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 mb-2">
                  Dental Mercado · Centro de implantes en Alicante
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-[1.05] max-w-2xl">
                  Experiencia e<br />innovación
                </motion.h1>
              </div>

              {/* CTA + feature badge */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-start lg:items-end gap-3">
                <div className="bg-primary rounded-2xl px-6 py-4 text-primary-foreground max-w-xs">
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <Check className="w-3.5 h-3.5" /> Primera consulta gratuita
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3.5 h-3.5" /> Financiación sin intereses
                  </div>
                </div>
                <Link to="/cita">
                  <Button size="lg" className="rounded-full px-8 text-base gap-2 h-11">
                    Pedir Cita <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <ReviewsSection />

      {/* ===== HOW IT WORKS ===== */}
      <section className="mx-4 lg:mx-6 rounded-[2rem] py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-6 right-8 opacity-20">
          <Sparkle size={60} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-6 left-8 opacity-10">
          <DotGrid className="text-primary-foreground" rows={3} cols={3} />
        </div>

        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">
              Cuidado dental sin complicaciones
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70">
              Empieza en 3 simples pasos
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
            { step: "01", title: "Reserva tu cita", desc: "Elige día y hora online o llámanos." },
            { step: "02", title: "Visítanos", desc: "Te haremos un diagnóstico completo." },
            { step: "03", title: "Tu plan dental", desc: "Plan personalizado para tu sonrisa." }].
            map((item, i) =>
            <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <span className="text-5xl lg:text-6xl font-serif text-primary-foreground/20 block mb-3">{item.step}</span>
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mt-10">
            <Link to="/cita">
              <Button variant="secondary" size="lg" className="rounded-full px-8 gap-2">
                Pedir Cita <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute bottom-20 left-0 opacity-10 hidden lg:block">
          <AnimatedSparkle size={50} className="text-primary" delay={0.5} />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4">
                Nuestros servicios
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-muted-foreground mb-6 max-w-md text-sm">
                Atención dental completa para toda la familia.
              </motion.p>
              <Link to="/cita">
                <Button className="rounded-full px-6 gap-2 mb-6">
                  Pedir Cita <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden hidden lg:block">
                <img src={clinicImage} alt="Interior de la clínica" className="w-full h-[320px] object-cover" />
              </motion.div>
            </div>

            <div className="space-y-0">
              {services.map((service, i) =>
              <ServiceAccordionItem key={service.title} service={service} index={i} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-3 overflow-hidden border-y">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) =>
          <span key={i} className="inline-flex items-center gap-3 px-4 py-1.5 mx-1.5 text-sm rounded-full border text-foreground/60">
              {item}
            </span>
          )}
        </div>
      </section>

      {/* ===== CLINIC + STATS ===== */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <img alt="Sala de tratamiento" className="w-full h-[280px] object-cover" src="/lovable-uploads/4fd3cc3e-347a-467f-b706-e77eebd54b02.png" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <img alt="Nuestro equipo" className="w-full h-[280px] object-cover" src="/lovable-uploads/8c69546f-85f8-4457-b169-5a789c952647.png" />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
            { num: "9", label: "Especialidades" },
            { num: "5.0★", label: "Valoración Google" },
            { num: "100%", label: "Compromiso" }].
            map((stat, i) =>
            <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-serif text-primary">{stat.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute top-16 right-16 opacity-10 hidden lg:block">
          <Sparkle size={40} className="text-primary" />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">Sobre tu visita</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">FAQ</h2>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, i) =>
              <div key={i} className="border-b last:border-b-0">
                  <button className="w-full flex items-start justify-between py-5 text-left group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-serif text-lg text-foreground pr-8 group-hover:text-primary transition-colors">{faq.q}</span>
                    <span className="mt-1 shrink-0">
                      {openFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i &&
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="pb-5 text-muted-foreground text-sm leading-relaxed pr-12">{faq.a}</p>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="mx-4 lg:mx-6 mb-6 rounded-[2rem] py-14 lg:py-16 bg-card border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-5">Encuéntranos</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">C/ Calderón de la Barca, 24, 03004 Alicante</p>
                    <p className="text-xs text-muted-foreground">En el centro de Alicante</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="font-medium text-foreground text-sm">L–V: 9:30 – 20:00</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+34966456124" className="font-medium text-foreground text-sm hover:text-primary transition-colors">+34 966 456 124</a>
                </div>
              </div>
              <Link to="/contacto">
                <Button variant="outline" className="rounded-full px-6 gap-2">
                  Contacto <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.481!3d38.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDIwJzQyLjAiTiAwwrAyOCc1MS42Ilc!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Dental Alicante" />

            </div>
          </div>
        </div>
      </section>
    </>);

};

/* Expandable service item component */
const ServiceAccordionItem = ({ service, index }: {service: typeof services[0];index: number;}) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp} className="border-b last:border-b-0">
      <button className="w-full flex items-center justify-between py-5 text-left group" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3">
          <service.icon className="w-5 h-5 text-primary shrink-0" />
          <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{service.title}</span>
        </div>
        <span className="shrink-0 ml-4">
          {open ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
        </span>
      </button>
      <AnimatePresence>
        {open &&
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 pl-8 text-muted-foreground text-sm leading-relaxed pr-8">{service.desc}</p>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

};

export default Index;