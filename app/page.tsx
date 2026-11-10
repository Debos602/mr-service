import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Workspace } from "@/components/sections/Workspace";
import { areas, site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  image: `${site.url}/images/hero_branded.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
    streetAddress: "Madhurawada",
  },
  openingHours: "Mo-Su 09:00-21:00",
  areaServed: areas.map((a) => a.name),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <WhyUs />
        <ServiceAreas />
        <About />
        <Testimonials />
        <Workspace />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
