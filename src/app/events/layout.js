export const metadata = {
  title: "Thribe Community Events - Tech Community in Africa",
  description: "These are conversations, masterclasses, and challenges designed to bring real techies together.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Thribe Tech Events",
    "url": "https://techthribe.com/events",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "organizer": {
      "@type": "Organization",
      "name": "Thribe",
      "url": "https://techthribe.com"
    }
  };

export default function RootLayout({ children }) {
  return (
    <>
    <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
   <main>
    {children}
    </main>
    </>
  );
}