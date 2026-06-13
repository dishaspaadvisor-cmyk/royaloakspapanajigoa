import HeroSection from "./herosection/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import GallerySection from "./gallery/page";
import ContactPage from "./contact/page";
import FAQPage from "./faq/page";
import OfferCards from "./offer/page";

export const metadata = {
  title: "Royal Oak Spa Panaji - Best Spa in Panaji Goa",
  description:
    "Experience ultimate relaxation and rejuvenation at Royal Oak Spa Panaji, the best spa in Panaji Goa. Indulge in luxurious treatments, expert therapists, and a serene ambiance for your wellness journey.",

  keywords: [
    "spa near panaji goa",
    "Best Spa in Panaji Goa",
    "best spa in goa",
    "Spa in Goa",
    "luxury spa in goa",
    "Full Body Massage",
    "spa in goa india",
    "russian spa in goa",
    " Female to Male Massage " ,
    "Four Hand Massage",
    "vip thai spa panaji goa",
    "Hot Oil Massage Goa",
    "Deep Tissue Massage",
    "Swedish Massage",
    "Jacuzzi Massage",
    "the top-rated spa services available in Panaji?",
    "Best spa services available in Goa Panaji",

  ],

  openGraph: {
    title: "Royal Oak Spa Panaji - Best Spa in Panaji Goa",
    description:
      "Experience ultimate relaxation and rejuvenation at Royal Oak Spa Panaji with luxury spa therapies and professional massage services.",
    type: "website",
    locale: "en_IN",
    siteName: "Royal Oak Spa Panaji",
  },

  twitter: {
    card: "summary_large_image",
    title: "Royal Oak Spa Panaji - Best Spa in Panaji Goa",
    description:
      "Luxury spa treatments, massage therapies, and wellness experiences in Panaji Goa.",
  },

  // icons: {
  //   icon: "/favicon/Royal-oak-pajim-fav-icon.png",
  //   shortcut: "/favicon/Royal-oak-pajim-fav-icon.png",
  //   apple: "/favicon/Royal-oak-pajim-fav-icon.png",
  // },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <ServicesPage />
      <OfferCards />
      <GallerySection />
      <ContactPage />
      <FAQPage />
    </>
  );
}