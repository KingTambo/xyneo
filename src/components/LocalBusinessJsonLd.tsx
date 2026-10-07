import { site } from "@/data/site";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.website}${site.heroPhotoSrc}`,
    telephone: site.phoneTel,
    email: site.email,
    url: site.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Rue Gambetta",
      addressLocality: site.city,
      postalCode: "01000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.204677,
      longitude: 5.2259015,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviews,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 46.204677,
        longitude: 5.2259015,
      },
      geoRadius: `${site.zoneRadiusKm * 1000}`,
    },
    sameAs: [site.googleReviewsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
