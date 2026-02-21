import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { allServices } from "@/data/servicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

const Servicios = () => (
  <>
    <Helmet>
      <title>Servicios Dentales | Dental Mercado – Implantes, Ortodoncia, Estética</title>
      <meta name="description" content="Servicios dentales completos en Alicante: implantología, ortodoncia, Invisalign, cirugía maxilofacial, periodoncia, estética dental y más. Pide tu cita." />
    </Helmet>

    <section className="pt-32 pb-16">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
          Nuestros Servicios / Our Services
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-serif text-foreground mb-4">
          Tratamientos y servicios
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-lg text-lg">
          Ofrecemos una amplia gama de tratamientos para mejorar tu sonrisa.
        </motion.p>
      </div>
    </section>

    <section className="pb-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link
                to={`/servicios/${service.slug}`}
                className="block bg-card border rounded-2xl p-7 hover:shadow-card transition-all group h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                  Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-4xl font-serif text-primary-foreground mb-4">¿Necesitas alguno de nuestros servicios?</h2>
        <p className="text-primary-foreground/70 mb-8">Pide tu cita y te asesoraremos sin compromiso.</p>
        <Link to="/cita">
          <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2">
            <Calendar className="w-5 h-5" />
            Pedir Cita Online
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default Servicios;
