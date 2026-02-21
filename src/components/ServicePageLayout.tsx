import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { LucideIcon } from "lucide-react";

export interface SubService {
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface OtherService {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  icon: LucideIcon;
  intro: string;
  heroImage?: string;
  whatIsIt: { title: string; text: string };
  subServices: SubService[];
  faqs: FAQ[];
  otherServices: OtherService[];
  ctaText?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ServicePageLayout = ({
  title, subtitle, seoTitle, seoDescription, icon: Icon,
  intro, heroImage, whatIsIt, subServices, faqs, otherServices, ctaText,
}: ServicePageLayoutProps) => (
  <>
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
    </Helmet>

    {/* Hero */}
    <section className="pt-28 pb-16 bg-accent/30">
      <div className="container">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{title}</span>
        </nav>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">{subtitle}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground mb-6">{title}</h1>
        </motion.div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{intro}</p>
            <Link to="/cita">
              <Button className="rounded-full px-8 gap-2">
                <Calendar className="w-5 h-5" />
                Pedir Cita
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl h-64 lg:h-80 overflow-hidden"
          >
            {heroImage ? (
              <img src={heroImage} alt={title} className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Icon className="w-28 h-28 text-primary/15" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>

    {/* What is it */}
    <section className="py-16 bg-accent/20">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">{whatIsIt.title}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{whatIsIt.text}</p>
        </motion.div>
      </div>
    </section>

    {/* Sub-services */}
    <section className="py-16 lg:py-20">
      <div className="container">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-3xl sm:text-4xl font-serif text-foreground mb-12 text-center"
        >
          Nuestros servicios
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } } }}
              className="bg-card border rounded-2xl p-6 hover:shadow-card transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-primary-foreground mb-4">
          {ctaText || `¿Necesitas ${title.toLowerCase()}?`}
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Pide tu cita y te asesoraremos sin compromiso. Estamos aquí para ayudarte.
        </p>
        <Link to="/cita">
          <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2">
            <Calendar className="w-5 h-5" />
            Pedir Cita Online
          </Button>
        </Link>
      </div>
    </section>

    {/* FAQs */}
    {faqs.length > 0 && (
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl sm:text-4xl font-serif text-foreground mb-10 text-center"
          >
            Preguntas frecuentes
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5">
                <AccordionTrigger className="text-left text-foreground font-medium text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )}

    {/* Other Services */}
    <section className="py-16 bg-accent/20">
      <div className="container">
        <h2 className="text-3xl font-serif text-foreground mb-10 text-center">Otros tratamientos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="bg-card border rounded-xl p-5 hover:shadow-card transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <s.icon className="w-4.5 h-4.5 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{s.shortDesc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-medium">
                Ver más <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicePageLayout;
