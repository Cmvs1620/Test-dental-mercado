import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

export const DentalClinicSchema = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: "Dental Mercado",
      description: "Clínica dental en Alicante centro. Expertos en salud bucodental y odontología estética.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "C/ Calderón de la Barca, 24",
        addressLocality: "Alicante",
        postalCode: "03004",
        addressCountry: "ES",
      },
      telephone: "+34966456124",
      email: "info@dentalmercado.es",
      openingHours: "Mo-Fr 09:30-20:00",
      url: "https://www.dentalmercado.es",
      priceRange: "€€",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.3461",
        longitude: "-0.4893",
      },
      sameAs: [
        "https://www.instagram.com/dentalmercadoalicante/",
        "https://www.facebook.com/dentalmercado",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "21",
        bestRating: "5",
      },
    }}
  />
);

export default JsonLd;
