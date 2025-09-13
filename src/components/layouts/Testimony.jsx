import { useState, useEffect } from "react";

function Testimony() {
  const testimonials = [
    {
      text: "This service has changed my life! Highly recommend to everyone.",
      author: "Happy Customer",
    },
    {
      text: "Amazing experience! The team was so helpful and responsive.",
      author: "Satisfied Client",
    },
    {
      text: "I can't believe how easy this was. Will definitely use again!",
      author: "Repeat Customer",
    },
    {
      text: "I can't believe how easy this was. Will definitely use again!",
      author: "Kay Customer",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What our customers say
        </h2>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-gray-100/30 rounded-xl shadow-md p-8 transition-all duration-700 ease-in-out">
            <p className="text-lg text-gray-700 mb-4 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-semibold">- {testimonials[current].author}</p>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition ${
                idx === current ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
