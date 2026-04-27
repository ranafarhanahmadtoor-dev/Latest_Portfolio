import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerJourney from "@/components/CareerJourney";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="grid-background">
        <About />
        <CareerJourney />
        <Certifications />
        <Portfolio />
      </div>
      <Footer />
      <Chat />
    </main>

  );
}


