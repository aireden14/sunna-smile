import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuizPromo from "@/components/QuizPromo";
import Team from "@/components/Team";
import Implantology from "@/components/Implantology";
import Pricing from "@/components/Pricing";
import BeforeAfter from "@/components/BeforeAfter";
import VideoReviews from "@/components/VideoReviews";
import Guarantees from "@/components/Guarantees";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Implantology />
      <Pricing />
      <BeforeAfter />
      <QuizPromo />
      <VideoReviews />
      <Guarantees />
      <FAQ />
      <BookingSection />
      <Contact />
      <Footer />
    </main>
  );
}
