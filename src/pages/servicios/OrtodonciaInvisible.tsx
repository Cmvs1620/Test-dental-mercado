import { Eye } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-invisalign.jpg";

const OrtodonciaInvisible = () => (
  <ServicePageLayout
    title="Ortodoncia Invisible"
    subtitle="Ortodoncia invisible con Invisalign en Alicante"
    seoTitle="Ortodoncia Invisible Invisalign en Alicante | Dental Mercado"
    seoDescription="Ortodoncia invisible con Invisalign en Alicante. Alineadores transparentes, cómodos y removibles para una sonrisa perfecta sin brackets."
    icon={Eye}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro trabajamos la ortodoncia invisible con Invisalign para alinear tus dientes de manera discreta y efectiva. Nuestro equipo te proporcionará un tratamiento personalizado para lograr una sonrisa perfecta sin las molestias de los brackets tradicionales."
    whatIsIt={{
      title: "¿Cómo funciona la ortodoncia con Invisalign?",
      text: "Invisalign utiliza alineadores transparentes y removibles que se fabrican a medida para cada paciente. Estos alineadores corrigen gradualmente la posición de tus dientes, siendo prácticamente invisibles y muy cómodos de llevar. El proceso incluye: consulta inicial para evaluar tu sonrisa, plan de tratamiento con tecnología 3D, uso de alineadores cada dos semanas, y revisiones periódicas para monitorear tu progreso.",
    }}
    subServices={[
      { title: "Comodidad", desc: "Los alineadores Invisalign son extremadamente cómodos, ofreciendo una solución estética e higiénica que facilita llevar el tratamiento sin molestias significativas." },
      { title: "Transparencia", desc: "Al ser prácticamente invisibles, los alineadores permiten a los pacientes continuar con su vida diaria sin la incomodidad estética asociada a los brackets tradicionales." },
      { title: "Diseño a Medida", desc: "Cada alineador se fabrica específicamente para la boca del paciente, asegurando un ajuste perfecto y un tratamiento personalizado." },
      { title: "Removibles", desc: "La ortodoncia con Invisalign permite quitar los alineadores para comer y cepillarse, mejorando significativamente la higiene bucal." },
      { title: "Mayor Higiene", desc: "La posibilidad de remover los alineadores facilita su limpieza y el mantenimiento de una higiene oral óptima." },
      { title: "Menos Doloroso", desc: "Los alineadores mueven los dientes de manera gradual y suave, minimizando el dolor y la incomodidad en comparación con otros tratamientos." },
    ]}
    faqs={[
      { q: "¿Qué es la ortodoncia invisible?", a: "La ortodoncia invisible, como Invisalign, utiliza alineadores transparentes y removibles para corregir la posición de los dientes." },
      { q: "¿Cómo funciona?", a: "Los alineadores aplican una presión suave y constante para mover los dientes a la posición deseada. Se cambian cada una o dos semanas por un nuevo juego." },
      { q: "¿Quién puede usar ortodoncia invisible?", a: "La ortodoncia invisible es adecuada para adolescentes y adultos con problemas de alineación dental leves a moderados." },
      { q: "¿Cuánto tiempo dura el tratamiento?", a: "La duración varía según la complejidad del caso, pero generalmente dura entre 6 meses y 2 años." },
      { q: "¿Es doloroso el tratamiento?", a: "Puede haber incomodidad inicial y después de ajustes, pero generalmente es manejable." },
      { q: "¿Cuáles son los beneficios?", a: "Los alineadores son prácticamente invisibles, removibles, y permiten una limpieza dental más fácil en comparación con los brackets tradicionales." },
      { q: "¿Cómo debo cuidar mis alineadores?", a: "Limpia los alineadores diariamente con agua y jabón suave, y evita comer o beber cualquier cosa que no sea agua mientras los usas." },
      { q: "¿Cuánto cuesta la ortodoncia invisible?", a: "El coste puede variar según la duración y complejidad del tratamiento. Consúltanos para obtener un presupuesto personalizado." },
    ]}
    otherServices={getOtherServices("ortodoncia-invisible")}
    ctaText="¿Quieres una sonrisa perfecta sin brackets?"
  />
);

export default OrtodonciaInvisible;
