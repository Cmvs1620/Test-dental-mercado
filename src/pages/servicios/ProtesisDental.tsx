import { Crown } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-protesis.jpg";

const ProtesisDental = () => (
  <ServicePageLayout
    title="Prótesis Dental"
    subtitle="Protésico dental en Alicante"
    seoTitle="Prótesis Dental en Alicante | Dental Mercado"
    seoDescription="Servicios de prótesis dental en Alicante: prótesis completas, parciales, fijas y removibles. Restaura la función y estética de tu sonrisa."
    icon={Crown}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, ofrecemos una amplia gama de servicios de prótesis dental diseñados para ayudarte a restaurar la función y estética de tu sonrisa. Nuestro equipo de profesionales altamente calificados en prótesis dentales está comprometido en brindarte soluciones personalizadas y resultados excepcionales."
    whatIsIt={{
      title: "¿Qué son las prótesis dentales?",
      text: "Las prótesis dentales son dispositivos diseñados para reemplazar dientes perdidos o dañados, restaurando la función y apariencia de tu sonrisa. Existen diferentes tipos de prótesis dentales, incluyendo prótesis parciales, completas, fijas y removibles, cada una adaptada a las necesidades específicas de los pacientes.",
    }}
    subServices={[
      { title: "Prótesis Dentales Completas", desc: "Para aquellos que han perdido todos sus dientes, ofrecemos prótesis completas que restauran la función y estética de la boca." },
      { title: "Prótesis Parciales", desc: "Las prótesis parciales son ideales para reemplazar dientes faltantes en áreas específicas de la boca, ancladas a los dientes adyacentes." },
      { title: "Prótesis Fijas", desc: "Las prótesis fijas, como puentes y coronas, son soluciones permanentes que se utilizan para restaurar la forma y función de un diente dañado." },
      { title: "Implantes Dentales y Prótesis", desc: "La colocación de implantes dentales puede servir de base para prótesis fijas o removibles, ofreciendo una solución segura y duradera." },
      { title: "Prótesis Removibles", desc: "Ofrecemos prótesis removibles que se pueden retirar para su limpieza y mantenimiento." },
    ]}
    faqs={[
      { q: "¿Qué es una prótesis dental?", a: "Las prótesis dentales son dispositivos utilizados para reemplazar dientes perdidos y restaurar la función y estética dental." },
      { q: "¿Qué tipos de prótesis dentales existen?", a: "Prótesis removibles (completas y parciales) y prótesis fijas (coronas, puentes e implantes)." },
      { q: "¿Quién necesita una prótesis dental?", a: "Personas que han perdido uno o más dientes y desean restaurar la funcionalidad y estética de su boca." },
      { q: "¿Cuánto tiempo dura el proceso de colocación?", a: "El tiempo varía según el tipo de prótesis, desde unas semanas hasta varios meses." },
      { q: "¿Es doloroso el proceso?", a: "El proceso no suele ser doloroso, pero puede haber alguna incomodidad inicial que se resuelve con el ajuste de la prótesis." },
      { q: "¿Cuánto cuesta una prótesis dental?", a: "El coste varía según el tipo de prótesis y el material utilizado. Consúltanos para un presupuesto detallado." },
      { q: "¿Cómo debo cuidar mi prótesis dental?", a: "Mantén una buena higiene oral, limpia la prótesis regularmente y visita al dentista para revisiones periódicas." },
    ]}
    otherServices={getOtherServices("protesis-dental")}
  />
);

export default ProtesisDental;
