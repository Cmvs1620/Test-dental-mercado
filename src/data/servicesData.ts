import { Zap, Stethoscope, Smile, Eye, Scissors, Shield, Heart, Crown, RefreshCw } from "lucide-react";
import type { OtherService } from "@/components/ServicePageLayout";

export const allServices: OtherService[] = [
  { title: "Implantes Dentales", slug: "implantes-dentales", icon: Zap, shortDesc: "Tecnología avanzada para restaurar tu sonrisa con implantes de alta calidad." },
  { title: "Odontología General", slug: "odontologia", icon: Stethoscope, shortDesc: "Revisiones, limpiezas y tratamientos preventivos para tu salud bucal." },
  { title: "Ortodoncia", slug: "ortodoncia", icon: Smile, shortDesc: "Soluciones de ortodoncia para alinear tus dientes y mejorar tu sonrisa." },
  { title: "Ortodoncia Invisible", slug: "ortodoncia-invisible", icon: Eye, shortDesc: "Alineadores transparentes Invisalign para corregir tus dientes de forma discreta." },
  { title: "Cirugía Maxilofacial", slug: "cirugia-maxilofacial", icon: Scissors, shortDesc: "Intervenciones quirúrgicas orales desde muelas del juicio hasta implantes." },
  { title: "Periodoncia", slug: "periodoncia", icon: Shield, shortDesc: "Cuidado de las encías para una sonrisa duradera y funcional." },
  { title: "Estética Dental", slug: "estetica-dental", icon: Heart, shortDesc: "Blanqueamiento, carillas y diseño de sonrisa a tu medida." },
  { title: "Prótesis Dental", slug: "protesis-dental", icon: Crown, shortDesc: "Prótesis fijas y removibles para restablecer función y estética." },
  { title: "Rehabilitación Oral", slug: "rehabilitacion-oral", icon: RefreshCw, shortDesc: "Recupera la función oral y calidad de vida tras lesiones o procedimientos." },
];

export const getOtherServices = (currentSlug: string) =>
  allServices.filter((s) => s.slug !== currentSlug);
