import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-implantes.jpg";

const ImplantesDentales = () => (
  <ServicePageLayout
    title="Implantes Dentales"
    subtitle="Implantología dental en Alicante"
    seoTitle="Implantes Dentales en Alicante | Dental Mercado"
    seoDescription="Implantes dentales de alta calidad en Alicante. Tecnología avanzada, equipo especializado y resultados naturales. Pide tu cita en Dental Mercado."
    icon={Zap}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, nos enorgullece ofrecer soluciones de implantología dental de alta calidad para restaurar la salud bucal y la confianza de nuestros pacientes. Con una combinación de experiencia, tecnología de vanguardia y un equipo comprometido de profesionales, estamos aquí para brindarte la sonrisa que siempre has deseado."
    whatIsIt={{
      title: "¿Qué es la implantología dental?",
      text: "La implantología dental es una especialidad de la odontología que se enfoca en la restauración de dientes perdidos o dañados mediante la colocación de implantes dentales. Estos implantes son pequeñas estructuras de titanio que se insertan en los huesos maxilares, proporcionando una base sólida para coronas, puentes o dentaduras postizas.",
    }}
    subServices={[
      { title: "Implantes Dentales Unitarios", desc: "Reemplazamos dientes individuales perdidos con implantes y coronas personalizadas, restaurando la apariencia y función naturales de tu sonrisa." },
      { title: "Puentes Dentales sobre Implantes", desc: "Los puentes dentales sostenidos por implantes son una solución efectiva para reemplazar múltiples dientes faltantes sin afectar los dientes naturales adyacentes." },
      { title: "Dentaduras Completas sobre Implantes", desc: "Ofrecemos dentaduras completas fijas o removibles sobre implantes, lo que brinda a nuestros pacientes una opción cómoda y segura." },
    ]}
    faqs={[
      { q: "¿Qué son los implantes dentales?", a: "Los implantes dentales son pequeños tornillos de titanio que se insertan en el hueso maxilar para reemplazar la raíz de un diente perdido." },
      { q: "¿Quién puede recibir implantes dentales?", a: "Cualquier persona con un buen estado de salud bucal y suficiente densidad ósea puede ser candidata para implantes dentales." },
      { q: "¿Cómo se colocan los implantes dentales?", a: "El proceso implica la inserción quirúrgica del implante en el hueso y, tras la cicatrización, la colocación de una corona dental sobre el implante." },
      { q: "¿Es doloroso el procedimiento?", a: "El procedimiento se realiza bajo anestesia local, lo que minimiza el dolor. Después de la cirugía, puede haber molestias leves que se controlan con analgésicos." },
      { q: "¿Cuánto tiempo dura el proceso?", a: "El proceso completo puede tardar entre 3 y 6 meses, dependiendo de la cicatrización del hueso alrededor del implante." },
      { q: "¿Cuáles son los beneficios?", a: "Los implantes dentales son duraderos, mejoran la estética, permiten comer y hablar con mayor facilidad, y previenen la pérdida ósea en la mandíbula." },
      { q: "¿Qué cuidados requieren?", a: "Es importante mantener una buena higiene bucal, cepillarse y usar hilo dental regularmente, y acudir a revisiones periódicas con el dentista." },
      { q: "¿Cuánto cuestan los implantes dentales?", a: "El costo varía según el caso individual, el número de implantes necesarios y la ubicación geográfica, pero los implantes suelen ser una inversión a largo plazo." },
    ]}
    otherServices={getOtherServices("implantes-dentales")}
  />
);

export default ImplantesDentales;
