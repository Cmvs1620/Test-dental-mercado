import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().max(20).optional(),
  mensaje: z.string().trim().min(1, "Mensaje requerido").max(1000),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo lo antes posible." });
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Dental Mercado – Clínica Dental Alicante</title>
        <meta name="description" content="Contacta con Dental Mercado. C/ Calderón de la Barca, 24, 03004 Alicante. Tel: 966 456 124 / 680 261 650." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Contacto / Contact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-serif text-foreground">
            Contáctanos
          </motion.h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-serif text-foreground mb-8">
                Información de contacto
              </motion.h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Dirección", value: "C/ Calderón de la Barca, 24, 03004 Alicante, España" },
                  { icon: Phone, label: "Teléfono fijo", value: "+34 966 456 124", href: "tel:+34966456124" },
                  { icon: Phone, label: "Móvil / WhatsApp", value: "+34 680 261 650", href: "tel:+34680261650" },
                  { icon: Mail, label: "Email", value: "info@dentalmercado.es", href: "mailto:info@dentalmercado.es" },
                  { icon: Clock, label: "Horario", value: "Lunes – Viernes: 9:30 – 20:00" },
                ].map((item, i) => (
                  <motion.div key={item.label + i} variants={fadeUp} custom={i + 1} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} custom={6} className="rounded-2xl overflow-hidden border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.8!2d-0.4893!3d38.3461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236e4c1f2b7d7%3A0x4a1b2c3d4e5f6789!2sC.+Calder%C3%B3n+de+la+Barca%2C+24%2C+03004+Alicante!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dental Mercado"
                />
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-serif text-foreground mb-8">
                Envíanos un mensaje
              </motion.h2>
              <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-5 bg-card border rounded-2xl p-8">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre *</label>
                  <Input placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} maxLength={100} className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input type="email" placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Teléfono</label>
                  <Input type="tel" placeholder="+34 ..." value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} maxLength={20} className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensaje *</label>
                  <Textarea placeholder="¿En qué podemos ayudarte?" rows={5} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} maxLength={1000} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full gap-2">
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
