import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Award, Users, Heart } from "lucide-react";
import waitingRoom from "@/assets/waiting-room.jpg";
import dentalChair from "@/assets/dental-chair.jpg";
import scan3d from "@/assets/3d-scan.jpg";
import staffFemale from "@/assets/staff-female.jpg";
import staffPortrait from "@/assets/staff-portrait.jpg";
import drCarpena from "@/assets/dr-carpena.jpg";
import drSecond from "@/assets/dr-second.jpg";
import drThird from "@/assets/dr-third.jpg";
import officeCorr from "@/assets/office-corridor.jpg";
import dentalUnit from "@/assets/dental-unit.jpg";
import equipmentDetail from "@/assets/equipment-detail.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const team = [
  { name: "Dra. Elena Sánchez", role: "Directora · Implantología", bio: "Más de 20 años de experiencia en implantología dental y cirugía oral.", img: staffFemale },
  { name: "Dr. Miguel Torres", role: "Ortodoncia", bio: "Especialista en ortodoncia invisible y brackets estéticos.", img: staffPortrait },
  { name: "Dra. Laura Pérez", role: "Estética Dental", bio: "Experta en diseño de sonrisa y tratamientos estéticos avanzados.", img: drCarpena },
  { name: "Dr. Pablo Ruiz", role: "Odontología General", bio: "Dedicado a la prevención y el tratamiento integral de la salud bucal.", img: drSecond },
  
];

const Nosotros = () => (
  <>
    <Helmet>
      <title>Sobre Nosotros | Dental Mercado – Clínica Dental Alicante</title>
      <meta name="description" content="Conoce Dental Mercado, clínica dental en Alicante centro. Expertos en salud bucodental y odontología estética." />
    </Helmet>

    <section className="pt-32 pb-20">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
          Sobre Nosotros / About Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-serif text-foreground mb-4">
          Nuestra clínica
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-lg text-lg">
          Un equipo comprometido con tu sonrisa desde hace más de 15 años.
        </motion.p>
      </div>
    </section>

    {/* Photo Gallery */}
    <section className="pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-elevated">
            <img src={clinicExterior} alt="Exterior de la clínica" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={waitingRoom} alt="Sala de espera" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={dentalChair} alt="Sillón dental moderno" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={scan3d} alt="Tecnología de escaneo 3D" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={officeCorr} alt="Oficina y pasillo de la clínica" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={dentalUnit} alt="Unidad dental equipada" className="w-full h-full object-cover aspect-square" />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pb-24">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl font-serif text-foreground mb-6">
            Dental Mercado
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
            En Dental Mercado entendemos la importancia de una salud bucodental óptima. Nuestro compromiso es cuidar de tu sonrisa, porque nos encanta verte feliz. Ubicados en el centro de Alicante, en C/ Calderón de la Barca, 24, somos expertos en salud bucodental y odontología estética.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8">
            Nuestro equipo de profesionales altamente cualificados está comprometido en brindarte soluciones efectivas y duraderas. Utilizamos tecnología avanzada y equipos especializados para garantizar diagnósticos precisos y tratamientos eficaces.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-5">
            {[
              { icon: Shield, label: "Tecnología avanzada" },
              { icon: Award, label: "Equipo cualificado" },
              { icon: Users, label: "Atención personalizada" },
              { icon: Heart, label: "Compromiso total" },
            ].map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{v.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={equipmentDetail} alt="Equipamiento dental de última generación" className="w-full h-[400px] object-cover" />
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-card border-t">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-serif text-foreground">
            Nuestro equipo
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-background border rounded-2xl overflow-hidden text-center"
            >
              {member.img ? (
                <img src={member.img} alt={member.name} className="w-full h-48 object-cover object-top" />
              ) : (
                <div className="w-full h-48 bg-accent flex items-center justify-center">
                  <span className="font-serif font-bold text-4xl text-accent-foreground">
                    {member.name.split(" ").filter(w => w.length > 2).map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-serif text-foreground mb-1">{member.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Nosotros;
