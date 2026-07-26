import { SITE_URL } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pirabrinca Recreação Infantil",
    image: `${SITE_URL}/images/logo.jpg`,
    url: SITE_URL,
    telephone: "+5519989106413",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Piracicaba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Piracicaba",
    },
    sameAs: ["https://instagram.com/pirabrinca"],
    description:
      "Recreação infantil para festas, aniversários, condomínios, empresas e eventos em Piracicaba e região.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
