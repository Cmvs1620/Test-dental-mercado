import { Shield } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-periodoncia.jpg";

const Periodoncia = () => (
  <ServicePageLayout
    title="Periodoncia"
    subtitle="Salud periodontal en Alicante"
    seoTitle="Periodoncia en Alicante | Dental Mercado – Especialistas en Encías"
    seoDescription="Servicios de periodoncia en Alicante: tratamiento de gingivitis, limpiezas profundas, cirugía periodontal y regeneración ósea. Cuida tus encías."
    icon={Shield}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, te ofrecemos servicios de periodoncia de primera calidad para mantener la salud de tus encías y mejorar tu bienestar bucal. Nuestro equipo de especialistas en encías y periodoncia está comprometido en brindarte atención personalizada y soluciones efectivas."
    whatIsIt={{
      title: "¿Qué es la periodoncia?",
      text: "La periodoncia es la rama de la odontología que se enfoca en el diagnóstico, prevención y tratamiento de las enfermedades periodontales, que afectan las encías y las estructuras de soporte de los dientes. Mantener una salud periodontal adecuada es esencial para garantizar una sonrisa duradera y funcional.",
    }}
    subServices={[
      { title: "Tratamiento de Gingivitis", desc: "Abordamos la gingivitis en sus primeras etapas, ayudando a prevenir su progresión a enfermedades periodontales más graves." },
      { title: "Limpiezas Profundas", desc: "Realizamos limpiezas profundas para eliminar la placa y el sarro que se acumulan en las bolsas periodontales, ayudando a restaurar la salud de las encías." },
      { title: "Cirugía de Bolsas Periodontales", desc: "En casos más avanzados, ofrecemos cirugía para eliminar las bolsas periodontales y restaurar las encías y los tejidos circundantes." },
      { title: "Implantes Dentales", desc: "Los implantes dentales pueden ser una solución efectiva después de la pérdida de dientes debido a enfermedades periodontales." },
      { title: "Regeneración Ósea", desc: "Utilizamos técnicas de regeneración ósea para restaurar el soporte de los dientes y prevenir la pérdida dental." },
    ]}
    faqs={[
      { q: "¿Qué es la periodoncia?", a: "La periodoncia es una especialidad dental que se enfoca en la prevención, diagnóstico y tratamiento de enfermedades de las encías y del hueso que sostiene los dientes." },
      { q: "¿Qué enfermedades trata la periodoncia?", a: "Principalmente la gingivitis y la periodontitis." },
      { q: "¿Cuáles son los síntomas de enfermedades periodontales?", a: "Encías rojas, inflamadas, sangrantes, retracción de encías, mal aliento persistente y movilidad dental." },
      { q: "¿Qué causa las enfermedades periodontales?", a: "La principal causa es la acumulación de placa bacteriana y sarro en los dientes y encías." },
      { q: "¿Cómo se tratan?", a: "Tratamientos incluyen limpiezas profundas (raspado y alisado radicular), antibióticos y, en casos avanzados, cirugía periodontal." },
      { q: "¿Cómo puedo prevenirlas?", a: "Mantener una buena higiene oral, cepillarse dos veces al día, usar hilo dental y acudir a revisiones periódicas con el dentista." },
      { q: "¿Es doloroso el tratamiento periodontal?", a: "Los tratamientos pueden causar alguna incomodidad, pero se utilizan anestésicos locales para minimizar el dolor." },
      { q: "¿Cuánto cuesta el tratamiento periodontal?", a: "El coste varía según el tipo y gravedad de la enfermedad. Consúltanos para obtener un presupuesto detallado." },
    ]}
    otherServices={getOtherServices("periodoncia")}
  />
);

export default Periodoncia;
