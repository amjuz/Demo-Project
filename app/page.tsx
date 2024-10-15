import About from "@/components/About/About";
import Blogs from "@/components/About/Blogs";
import Benefits from "@/components/Benefits/Benefits";
import ContactUs from "@/components/Contact/ContactUs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";

/**
 * 
 * Welcome to landing page of demo project.
 * 
 * All Images for this projects is uploaded to CDN for faster loading,
 * even thou Nextjs helps us to statically generate pages during the build time.
 * 
 * Its not necessary to upload static images to CDN if images doesn't change often, 
 * As on a big production grade projects , this approach is going to be helpful.
 * 
 * I have created different components for better readabilty and have provided meaningful names.
 * Feel free to read through the whole repo, everything is documented
 * 
 * 
 * libraries used for development :-
 *  - Shadcn - Component library used for styling and maintaining the frontend UI
 *  - Datefns - Used to formate Dates
 *  - Lucide-react - Used for adding icons
 *  - TailwindCSS - A utility library used for styling UI
 *  - React - A frontend library
 *  - Next - A full stack framework for building apps 
 */


export default function Home() {
  return (
    <main className="font-poppins">
      <Hero />
      <About />
      <Blogs/>
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
