import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const testimonials = [
  { name: "Francisco Solesio Pilarte", text: "Si tienes miedo al dolor, esta es tu clínica. Me trató Javier Rodríguez y lo hizo con mucho cuidado, sin hacer daño, explicándome en todo momento lo que iba a hacer. Con mucha profesionalidad, tacto y cercanía. Muy buen profesional y dando confianza en todo momento. Estoy muy satisfecho. Muy recomendable", rating: 5 },
  { name: "Boris", text: "Ya varias veces me hice atender con Dr. Carpena en esta clínica y la verdad es que estoy súper satisfecho por los servicios. Trabajo prolijo y de muy buena calidad (no es fácil de encontrar un lugar de excelentes profesionales). Muy recomendable!", rating: 5 },
  { name: "Maria José Ruiz Rodríguez", text: "Les pongo un 10.. tenía mucho miedo a una extracción y todo el equipo,y el doctor Francisco Carpena que tiene unas manos milagrosas me tranquilizaron desde el primer momento,no sentí nada, volveré sin duda.. muchas gracias 😊", rating: 5 },
  { name: "Paula Espallardo", text: "Tuve muy buena experiencia en la clínica Dental Mercado en Alicante. Desde el momento en que llegué el personal fue muy amable y profesional. El Dr. Rodríguez me explicó todo el proceso de manera clara y me hizo sentir completamente cómoda.", rating: 5 },
  { name: "Elena Modesto", text: "Hoy termino de estar allí y; sinceramente gente de Alicante sin duda alguna después de probar sin éxito, varias clínicas, en Alicante, Clínica Dental Mercado para mí sin dudas; actualmente es la mejor clínica que existe en Alicante.", rating: 5 },
  { name: "Joan Aveledo Navarro", text: "Me atendió Naiara una chica muy simpática me an tratado super bien y lo recomiendo al 100 x 100 buen trato económico y buena ubicación.", rating: 5 },
  { name: "Elisa Iturre", text: "Quedé muy conforme con la atención del dentista. Gracias por buscar un espacio para atenderme, lo valoro muchísimo. 🌸", rating: 5 },
  { name: "Mr_cina_", text: "Exelente atencion, gracias al dentista y su personal por la prefecionalidad y amabilidad. 100 % recomendado!", rating: 5 },
  { name: "Candelas Lozano", text: "Acudí para hacerme un implante dental y quedé muy satisfecha con la profesionalidad de todo el equipo. Cuidaron todo tipo de detalles desde el inicio del procedimiento.", rating: 5 },
  { name: "Barbara Diaz", text: "Fui en dos ocasiones y la experiencia fue increíble. El trato del personal es genial, desde la persona que te recibe hasta los doctores/doctoras que trabajan en la clínica dental Mercado. Sin duda lo recomiendo y volveré a ir.", rating: 5 },
  { name: "ODJ", text: "Después de dos experiencias decepcionantes en otros lugares, finalmente encontré un buen dentista, Dental Mercado! ¡Personas conocedoras y amigables que se toman el tiempo para sus clientes! Y equipamiento muy moderno! Estamos muy satisfechos!", rating: 5 },
  { name: "Anastasia Chyzhko", text: "Tuve una excelente experiencia en Dental Mercado. Todo el personal es muy amable y profesional, lo que me hizo sentir muy cómodo durante mi visita. No hablo bien español, pero ellos me ayudaron en todo momento. Además, el equipo técnico es de primera calidad, lo que garantiza tratamientos precisos y efectivos. Sin duda, recomiendo.", rating: 5 },
  { name: "Diego Delgado", text: "Fui a hacerme un tratamiento y súper recomendable. Las instalaciones son totalmente nuevas y a nivel tecnológico está totalmente equipado y con lo más nuevo. El equipo de profesionales con el que cuentan en estupendo. Muy buen trato.", rating: 5 },
  { name: "Andre", text: "Nunca ha sido santo de mi devoción ir al dentista, pero he de decir que me topado con esta clínica y estoy más que encantada. Siempre sales con una sonrisa, tienen un equipo increíble que hacen que el ratito que estés allí estés en familia y sea agrarable. Gracias !", rating: 5 },
  { name: "Fidel Martinez", text: "Normalmente no suelo dar reseñas a no ser que la atención y la profesionalidad sea excelente, como es el caso de esta clínica. Todo el personal es súper amable , muy cercano, y son excelentes profesionales. Sin duda volveré .", rating: 5 },
  { name: "Emi Espallardo", text: "Mi experiencia personal ha sido muy buena, Acudí por primera vez a hacerme una revision dental y he quedado encantado con el trato y el asesoramiento de estos profesionales, se nota en todo momento su experiencia y saber hacer. Gracias por vuestra amabilidad....", rating: 5 },
  { name: "Carlos Muñoz", text: "Muy contento con esta clínica. Grandes profesionales, muy buen trato y muy buen equipamiento. Tanto Javier Gea, mi dentista, como las higienistas te hacen sentir muy cómodo en todo momento. Muy bien comunicado con tram y autobuses.", rating: 5 },
  { name: "Josemico92", text: "Fui recomendado por un amigo, ya que tenía que hacerme una endodoncia y que decir. Totalmente satisfecho, los chicos atentos conmigo en todo momento y también en el postoperatorio. Si tuviera que recomendar un buen dentista en alicante, sin duda.", rating: 5 },
  { name: "fabiola chagas da silva", text: "Un gran equipo, el trato personal, el tratamiento realizado. Todo perfecto. Por fin he encontrado mi clínica.", rating: 5 },
  { name: "Imma Ramos", text: "Quería destacar la atención recibida. Sois unos grandes profesionales tanto los doctores Francisco Carpena y Javier Rodríguez como Lorena Y Sandra. Gracias por todo, habeis ganado una clienta fiel.", rating: 5 },
  { name: "Marta saez", text: "Todo perfecto! Muy profesionales. Altamente recomendables", rating: 5 },
];

const Testimonios = () => (
  <>
    <Helmet>
      <title>Testimonios | 21 Opiniones 5 Estrellas - Dental Mercado Alicante</title>
      <meta name="description" content="Lee las 21 opiniones reales de los pacientes de Dental Mercado. 5.0 estrellas en Google con reseñas verificadas. Clínica dental en Alicante." />
    </Helmet>

    <section className="pt-32 pb-20">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
          Testimonios / Reviews
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-serif text-foreground mb-4">
          Nuestros pacientes opinan
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
          <span className="text-4xl font-serif text-primary">5.0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-muted-foreground">· 21 opiniones en Google</span>
        </motion.div>
      </div>
    </section>

    <section className="pb-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="bg-card border rounded-2xl p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">¿Has sido nuestro paciente? ¡Nos encantaría conocer tu opinión!</p>
          <a
            href="https://g.co/kgs/CFjohC3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Star className="w-4 h-4" />
            Déjanos tu opinión en Google
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Testimonios;
