import { Scissors } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-cirugia.jpg";

const CirugiaMaxilofacial = () => (
  <ServicePageLayout
    title="Cirugía Maxilofacial"
    subtitle="Cirugía oral en Alicante"
    seoTitle="Cirugía Maxilofacial en Alicante | Dental Mercado"
    seoDescription="Servicios de cirugía maxilofacial en Alicante: extracción de muelas del juicio, implantes, cirugía pre-protésica y más. Equipo especializado."
    icon={Scissors}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, estamos dedicados a proporcionar una amplia gama de servicios de cirugía maxilofacial con un enfoque en la salud y el bienestar de nuestros pacientes. Nuestro equipo altamente calificado de cirujanos orales se compromete a brindar atención de calidad y soluciones efectivas para tus necesidades específicas."
    whatIsIt={{
      title: "¿Qué es la cirugía maxilofacial?",
      text: "La cirugía oral es una rama especializada de la odontología que se enfoca en el diagnóstico y el tratamiento de afecciones y procedimientos quirúrgicos relacionados con la boca, la mandíbula y el rostro. Nuestros servicios de cirugía oral en Alicante abarcan una variedad de procedimientos que van desde la extracción de dientes de sabiduría hasta la colocación de implantes dentales.",
    }}
    subServices={[
      { title: "Extracción de Dientes Incluidos", desc: "Nuestros cirujanos orales están capacitados para realizar extracciones de dientes incluidos de manera segura y eficiente, minimizando cualquier molestia o complicación." },
      { title: "Implantología Dental", desc: "Si necesitas reemplazar dientes perdidos o dañados, ofrecemos la colocación de implantes dentales para restaurar la función y la estética de tu sonrisa." },
      { title: "Cirugía Pre-Protésica", desc: "Preparamos la boca y los tejidos circundantes para la colocación de prótesis dentales, asegurando un ajuste óptimo y una mayor comodidad." },
      { title: "Cirugía de Encías", desc: "Tratamos afecciones de las encías, como la enfermedad periodontal, con procedimientos quirúrgicos para restaurar la salud bucal." },
      { title: "Cirugía de Quistes y Tumores", desc: "Abordamos lesiones orales, quistes y tumores con cirugía oral, garantizando un diagnóstico preciso y un tratamiento adecuado." },
      { title: "Cirugía de Restauración Ósea", desc: "Utilizamos técnicas avanzadas para restaurar o reconstruir el hueso dental dañado o perdido." },
    ]}
    faqs={[
      { q: "¿Qué es la cirugía oral?", a: "La cirugía oral incluye procedimientos quirúrgicos para tratar problemas en la boca, dientes y mandíbula." },
      { q: "¿Qué tipos de cirugía oral existen?", a: "Extracciones dentales, implantes dentales, cirugías de los maxilares y tratamiento de enfermedades de las encías." },
      { q: "¿Cuándo es necesaria una cirugía oral?", a: "Para extraer dientes impactados, colocar implantes o corregir anomalías maxilofaciales." },
      { q: "¿Es dolorosa la cirugía oral?", a: "Se utilizan anestesia local o general para minimizar el dolor durante el procedimiento." },
      { q: "¿Cuánto tiempo lleva recuperarse?", a: "El tiempo de recuperación varía según el tipo de cirugía, pero generalmente va de unos días a unas semanas." },
      { q: "¿Cuáles son los riesgos?", a: "Infección, sangrado y complicaciones relacionadas con la anestesia, aunque son raras." },
      { q: "¿Cuánto cuesta una cirugía oral?", a: "El coste depende del tipo de cirugía y su complejidad. Consúltanos para un presupuesto detallado." },
    ]}
    otherServices={getOtherServices("cirugia-maxilofacial")}
  />
);

export default CirugiaMaxilofacial;
