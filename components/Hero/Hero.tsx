import HeroImage from "./HeroImage";
import HeroTextContext from "./HeroTextContext";

/**
 * 
 * This page shows the first part of landing page with Hero image and textual content
 * 
 */

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-end">
      <HeroImage />
      <HeroTextContext />
    </div>
  );
}
