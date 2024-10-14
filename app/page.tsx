import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <Hero />
      <About />
      <Services/>
      <Stats/>
      <Features/>
    </main>
  );
}
