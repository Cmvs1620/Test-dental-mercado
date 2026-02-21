import { Smile } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-ortodoncia.jpg";

const Ortodoncia = () => (
  <ServicePageLayout
    title="Ortodoncia"
    subtitle="Ortodoncia y estética en Alicante"
    seoTitle="Ortodoncia en Alicante | Dental Mercado – Brackets y Alineadores"
    seoDescription="Servicios de ortodoncia en Alicante: brackets tradicionales, estéticos, Invisalign y ortodoncia para adultos. Sonrisa perfecta en Dental Mercado."
    icon={Smile}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, te ofrecemos soluciones de ortodoncia de alta calidad que pueden transformar tu sonrisa y mejorar tu salud bucal. Nuestro equipo de ortodoncistas altamente calificados está dedicado a brindarte una atención personalizada y resultados excepcionales."
    whatIsIt={{
      title: "¿Qué es la ortodoncia?",
      text: "La ortodoncia es la especialidad de la odontología que se enfoca en el diagnóstico, prevención y corrección de problemas de malposición dental y de la mandíbula. A través de tratamientos de ortodoncia, podemos alinear tus dientes y lograr una mordida saludable y estética.",
    }}
    subServices={[
      { title: "Brackets Tradicionales", desc: "Ofrecemos la opción de brackets metálicos que son efectivos en la corrección de problemas de alineación dental." },
      { title: "Brackets Estéticos", desc: "Para aquellos que buscan una opción más discreta, ofrecemos brackets cerámicos que son menos visibles." },
      { title: "Invisalign", desc: "Sistema de ortodoncia con alineadores transparentes y removibles para corregir la posición de los dientes sin brackets o alambres." },
      { title: "Ortodoncia para Adultos", desc: "Nunca es tarde para mejorar tu sonrisa. Ofrecemos tratamientos de ortodoncia adaptados a las necesidades de los adultos." },
    ]}
    faqs={[
      { q: "¿Qué es un implante dental?", a: "Un implante dental es una raíz artificial de titanio que se inserta en el hueso maxilar o mandibular para soportar una corona, puente o dentadura." },
      { q: "¿Quién puede optar por un implante dental?", a: "Cualquier persona con suficiente hueso en la mandíbula y buena salud oral y general es candidata para un implante dental." },
      { q: "¿El procedimiento es doloroso?", a: "El procedimiento se realiza bajo anestesia local, por lo que no es doloroso. Puede haber molestias leves después de la cirugía." },
      { q: "¿Cuánto tiempo dura el proceso?", a: "El proceso completo, que incluye la inserción del implante y la colocación de la corona, puede durar de 3 a 6 meses." },
      { q: "¿Cuánto tiempo duran los implantes dentales?", a: "Con el cuidado adecuado, los implantes dentales pueden durar toda la vida." },
      { q: "¿Cuáles son los cuidados posteriores?", a: "Es esencial mantener una buena higiene oral, asistir a controles regulares con el dentista y evitar hábitos perjudiciales como fumar." },
      { q: "¿Cuánto cuesta un implante dental?", a: "El coste puede variar según el caso individual. Consúltanos para obtener una estimación precisa." },
      { q: "¿Existen riesgos o complicaciones?", a: "Como con cualquier procedimiento quirúrgico, existen riesgos, pero las complicaciones son raras. Pueden incluir infecciones, rechazo del implante o daño a los nervios." },
    ]}
    otherServices={getOtherServices("ortodoncia")}
  />
);

export default Ortodoncia;
