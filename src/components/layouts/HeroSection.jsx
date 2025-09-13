import { Play, PlayCircle, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 } // 20% visible triggers animation
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mx-auto max-w-7xl"
    >
      <div className="flex flex-col justify-center">
        <p className="uppercase pb-6">App Landing Page</p>
        <h1 className="text-3xl lg:text-[72px] leading-relaxed font-bold mb-4">
          Get things done <br className="" /> with Zico
        </h1>
        <p className="mb-4 leading-loose">
          Our app provides the best features and user experience to help you
          achieve your goals.
        </p>
        <div className="flex gap-4 p-4">
          <button className="bg-[#f9218d] text-white py-4 px-8 rounded-4xl hover:bg-[#f9218d]/90 transition">
            Download
          </button>

          <button className="bg-[#d852e8] text-white py-4 px-4 rounded-4xl hover:bg-gray-200 transition">
            <Play className="mr-2" size={16} />
          </button>
        </div>
      </div>

      <div ref={ref} className="hidden md:block overflow-hidden">
        <img
          src="img/hero_right.png.webp"
          alt="Hero"
          className={`w-full max-w-xs md:max-w-sm lg:max-w-md transform transition-all duration-700 ease-out ${
            visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default HeroSection;
