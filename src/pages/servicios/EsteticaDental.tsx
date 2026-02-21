import { Heart } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-estetica.jpg";

const EsteticaDental = () => (
  <ServicePageLayout
    title="Estética Dental"
    subtitle="Clínica dental estética en Alicante"
    seoTitle="Estética Dental en Alicante | Dental Mercado – Blanqueamiento y Carillas"
    seoDescription="Servicios de estética dental en Alicante: blanqueamiento, carillas, injertos de encías y diseño de sonrisa. Logra la sonrisa que siempre has soñado."
    icon={Heart}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, te ofrecemos una amplia gama de servicios de estética dental para ayudarte a lograr la sonrisa que siempre has soñado. Nuestro equipo de profesionales altamente calificados en estética dental está comprometido en brindarte una atención personalizada y resultados excepcionales."
    whatIsIt={{
      title: "¿Qué es la estética dental?",
      text: "La estética dental se enfoca en mejorar la apariencia de tus dientes y sonrisa. Los tratamientos de estética dental pueden abordar problemas como el color de los dientes, su forma, tamaño, y alineación, y pueden incluir procedimientos que van desde el blanqueamiento dental hasta la colocación de carillas dentales.",
    }}
    subServices={[
      { title: "Blanqueamiento Dental", desc: "Utilizamos tratamientos de blanqueamiento dental seguros y efectivos para eliminar manchas y decoloraciones, devolviéndote una sonrisa más brillante." },
      { title: "Carillas Dentales", desc: "Las carillas dentales son láminas delgadas de porcelana que se adhieren a la superficie de los dientes para mejorar su apariencia en términos de forma, tamaño y color." },
      { title: "Injertos de Encías", desc: "Corregimos encías recesivas o irregulares para mejorar la estética de tu sonrisa." },
      { title: "Coronas y Puentes Estéticos", desc: "Restauramos la apariencia y función de los dientes dañados o perdidos con coronas y puentes dentales que se asemejan a los dientes naturales." },
      { title: "Alargamiento de Coronas", desc: "Ajustamos la longitud de los dientes para una sonrisa más equilibrada y armónica." },
    ]}
    faqs={[
      { q: "¿Qué es la estética dental?", a: "La estética dental es una rama de la odontología que se enfoca en mejorar la apariencia de los dientes, encías y sonrisa en general. Incluye tratamientos como blanqueamiento dental, carillas, ortodoncia invisible y reconstrucción de dientes." },
      { q: "¿Cuáles son los tratamientos más comunes?", a: "Entre los tratamientos más comunes se encuentran el blanqueamiento dental, las carillas dentales, la ortodoncia invisible, el contorneado dental y la reconstrucción de dientes con composites." },
      { q: "¿El blanqueamiento dental daña los dientes?", a: "No, el blanqueamiento dental profesional es un procedimiento seguro cuando es realizado por un dentista cualificado. El tratamiento utiliza productos seguros y controlados que no dañan el esmalte dental." },
      { q: "¿Qué son las carillas dentales y cuándo se recomiendan?", a: "Las carillas dentales son finas láminas de porcelana o composite que se adhieren a la superficie frontal de los dientes para mejorar su apariencia. Se recomiendan para corregir problemas como dientes desalineados, desgastados, decolorados o con espacios." },
      { q: "¿Cuánto tiempo dura un tratamiento de ortodoncia invisible?", a: "La duración del tratamiento varía según la complejidad de cada caso, pero suele durar entre 6 meses y 2 años." },
      { q: "¿Puedo realizarme tratamientos si tengo problemas de encías?", a: "Depende de la gravedad del problema. Es importante que cualquier enfermedad periodontal sea tratada antes de comenzar con tratamientos de estética dental." },
    ]}
    otherServices={getOtherServices("estetica-dental")}
  />
);

export default EsteticaDental;
