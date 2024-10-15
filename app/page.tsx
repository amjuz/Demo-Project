import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import ContactUs from "@/components/Contact/ContactUs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights/Insights";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="font-poppins">
      <Hero />
      <About />
      <Services/>
      <Stats/>
      <Features/>
      <Benefits/>
      <Insights/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
