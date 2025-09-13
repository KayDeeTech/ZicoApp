function ScreenshotSlider() {
  const images = [
    "img/App3.png.webp",
    "img/App2.png.webp",
    "img/App3.png.webp",
    "img/App2.png.webp",
    "img/App3.png.webp",
    "img/App2.png.webp",
    "img/App3.png.webp",
  ];

  // Duplicate array for smooth looping
  const loopImages = [...images, ...images];

  return (
    <section className="w-screen px-6 bg-white py-8">
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center my-12">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">App Screenshots</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus necessitatibus possimus sequi unde expedita! Veniam
            dolorem quibusdam assumenda odit molestiae provident rem corporis,
            praesentium repellat tenetur recusandae commodi, obcaecati et.
          </p>
        </div>

        {/* Right: Slider */}
        <div className="relative w-full overflow-hidden hover-pause">
          <div className="flex animate-scroll">
            {loopImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                className="w-[120px] md:w-[220px] flex-shrink-0 mx-2 rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScreenshotSlider;
