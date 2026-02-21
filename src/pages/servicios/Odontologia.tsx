import { Stethoscope } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-odontologia.jpg";

const Odontologia = () => (
  <ServicePageLayout
    title="Odontología General"
    subtitle="Servicios de odontología en Alicante"
    seoTitle="Odontología General en Alicante | Dental Mercado"
    seoDescription="Servicios de odontología general en Alicante: revisiones, limpiezas, empastes y tratamientos preventivos. Atención integral y personalizada."
    icon={Stethoscope}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, te ofrecemos una amplia gama de servicios de odontología general diseñados para mantener tu salud bucal y tu sonrisa en óptimas condiciones. Nuestro equipo de profesionales altamente calificados se dedica a brindarte atención odontológica integral y personalizada."
    whatIsIt={{
      title: "Odontología General",
      text: "En nuestra clínica, creemos en la importancia de la prevención y la atención temprana para mantener una sonrisa saludable. Nuestros servicios de odontología en Alicante abarcan una variedad de áreas, desde exámenes regulares hasta tratamientos para problemas dentales comunes. Fomentamos la prevención como la base de una buena salud bucal.",
    }}
    subServices={[
      { title: "Revisiones y Limpiezas", desc: "Realizamos exámenes regulares y limpiezas profesionales para prevenir problemas dentales y mantener una boca saludable." },
      { title: "Obturaciones Dentales", desc: "Tratamos caries dentales con obturaciones de alta calidad para restaurar la función y estética de los dientes." },
      { title: "Tratamientos de Conductos", desc: "Ofrecemos tratamientos de conductos para salvar dientes dañados y evitar extracciones innecesarias." },
      { title: "Extracciones Dentales", desc: "Realizamos extracciones cuidadosas y, cuando es necesario, ofrecemos opciones de restauración, como implantes dentales." },
      { title: "Atención de Emergencia", desc: "Estamos disponibles para atender emergencias dentales y aliviar el dolor de manera oportuna." },
    ]}
    faqs={[
      { q: "¿Qué es la odontología general?", a: "La odontología general se enfoca en la prevención, diagnóstico y tratamiento de enfermedades y condiciones comunes de la boca, dientes y encías. Incluye procedimientos como limpiezas, empastes, extracciones y tratamiento de caries." },
      { q: "¿Con qué frecuencia debo visitar al dentista?", a: "Se recomienda visitar al dentista al menos dos veces al año para realizar limpiezas dentales y chequeos regulares. Sin embargo, la frecuencia puede variar según las necesidades individuales de cada paciente." },
      { q: "¿Cuáles son los tratamientos más comunes?", a: "Los tratamientos más comunes incluyen limpiezas dentales, empastes para caries, extracciones dentales, tratamiento de enfermedades de las encías, y radiografías para detectar problemas subyacentes." },
      { q: "¿Qué puedo hacer para prevenir las caries?", a: "La prevención incluye una buena higiene oral, cepillarse los dientes al menos dos veces al día, usar hilo dental diariamente, limitar el consumo de alimentos y bebidas azucaradas, y acudir regularmente al dentista." },
      { q: "¿Qué debo hacer si tengo dolor de dientes o encías?", a: "Si experimentas dolor en los dientes o encías, es importante que acudas al dentista lo antes posible. El dolor puede ser un signo de caries, infección o problemas en las encías." },
      { q: "¿Cuáles son las señales de enfermedades de las encías?", a: "Las señales incluyen encías rojas, inflamadas o sangrantes, mal aliento persistente, sensibilidad dental, y retracción de las encías." },
    ]}
    otherServices={getOtherServices("odontologia")}
  />
);

export default Odontologia;
