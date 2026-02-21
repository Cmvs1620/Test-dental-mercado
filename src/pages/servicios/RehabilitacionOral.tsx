import { RefreshCw } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getOtherServices } from "@/data/servicesData";
import heroImage from "@/assets/service-rehabilitacion.jpg";

const RehabilitacionOral = () => (
  <ServicePageLayout
    title="Rehabilitación Oral"
    subtitle="Dentistas especializados en rehabilitación"
    seoTitle="Rehabilitación Oral en Alicante | Dental Mercado"
    seoDescription="Servicios de rehabilitación oral en Alicante: postoperatorio, prótesis, terapia de habla y tratamiento de dolor. Recupera tu función oral."
    icon={RefreshCw}
    heroImage={heroImage}
    intro="En nuestra clínica dental en Alicante centro, ofrecemos servicios de readaptación funcional y rehabilitación oral diseñados para ayudarte a recuperar la función oral y la calidad de vida después de lesiones o procedimientos dentales. Nuestro equipo de profesionales altamente calificados está comprometido en brindarte soluciones personalizadas y resultados excepcionales."
    whatIsIt={{
      title: "¿Qué es la Rehabilitación Oral?",
      text: "La readaptación funcional o rehabilitación oral se enfoca en la restauración de la función oral después de lesiones, cirugías o procedimientos dentales. Nuestros servicios están diseñados para ayudarte a recuperar la capacidad de hablar, comer y sonreír con comodidad y confianza.",
    }}
    subServices={[
      { title: "Procedimientos de Postoperatorio", desc: "Si has pasado por una cirugía dental o bucal, nuestros especialistas pueden ayudarte a recuperar la función oral de manera óptima." },
      { title: "Prótesis y Dispositivos de Ayuda", desc: "Ofrecemos prótesis dentales y dispositivos de ayuda que pueden restaurar la función de masticación y habla." },
      { title: "Rehabilitación Oral Completa", desc: "Trabajamos en estrecha colaboración contigo para desarrollar un plan de rehabilitación oral personalizado para abordar tus necesidades específicas." },
      { title: "Terapia de Habla", desc: "Si experimentas dificultades en el habla debido a una cirugía o lesión, ofrecemos terapia de habla para mejorar la comunicación." },
      { title: "Evaluación y Tratamiento de Dolor", desc: "Si sufres de dolor oral o facial, nuestros especialistas pueden diagnosticar y tratar el dolor para mejorar tu calidad de vida." },
    ]}
    faqs={[
      { q: "¿Qué es la rehabilitación oral?", a: "La rehabilitación oral es un conjunto de tratamientos que busca restaurar la funcionalidad, estética y salud de la boca, abarcando desde prótesis hasta implantes y ortodoncia." },
      { q: "¿Cuándo se necesita una rehabilitación oral?", a: "Se recomienda en casos de pérdida de múltiples dientes, desgastes severos, maloclusión o problemas estéticos que afectan la calidad de vida del paciente." },
      { q: "¿Qué tratamientos incluye?", a: "Los tratamientos pueden incluir implantes dentales, coronas, puentes, prótesis removibles, carillas y ortodoncia, dependiendo de las necesidades específicas del paciente." },
      { q: "¿Es doloroso el proceso?", a: "Muchos procedimientos se realizan bajo anestesia local, y aunque puede haber molestias leves posteriores, estas se manejan fácilmente con analgésicos." },
      { q: "¿Cuánto tiempo dura una rehabilitación oral completa?", a: "El tiempo varía según la complejidad del caso, pero puede extenderse entre varios meses y más de un año." },
      { q: "¿Cuáles son los beneficios?", a: "Mejora la función masticatoria, la estética de la sonrisa, la salud bucal general y la calidad de vida, al permitir al paciente comer, hablar y sonreír con confianza." },
      { q: "¿Cómo se cuidan los resultados?", a: "Es fundamental mantener una rutina de higiene bucal adecuada, asistir a revisiones periódicas con el dentista y, en algunos casos, usar protectores dentales." },
      { q: "¿Cuánto cuesta una rehabilitación oral?", a: "El costo depende del tipo y cantidad de tratamientos requeridos, pero suele ser una inversión considerable en la salud y estética bucal del paciente." },
    ]}
    otherServices={getOtherServices("rehabilitacion-oral")}
  />
);

export default RehabilitacionOral;
