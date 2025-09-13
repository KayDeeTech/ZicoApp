import RevealOnScroll from "../RevealOnScroll";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import ScreenshotSlider from "./ScreenshotSlider";
import Services from "./Services";
import Testimony from "./Testimony";

function Main() {
  return (
    <div className="mx-8">
      <RevealOnScroll>
        <HeroSection />
        <Features />
        <Services />
        <ScreenshotSlider />
        <Pricing />
        <Testimony />
      </RevealOnScroll>
    </div>
  );
}

export default Main;
