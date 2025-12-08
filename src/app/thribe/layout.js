export const metadata = {
  title: "About Thribe Community - Tech Community in Africa",
  description: "Our goal Is to build a tech-powered, value-driven community where individuals don&#39;t just exist but build valuable relationships, gain visibility, collaborate and contribute to real-world impact",
};

 const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Thribe",
    "url": "https://techthribe.com/thribe",
    "description": "Thribe is a digital innovation community that hosts tech events, membership programs and startup networking.",
    "logo": "https://techthribe.com/logo.png"
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