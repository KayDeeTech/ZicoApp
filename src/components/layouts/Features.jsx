import { Settings } from "lucide-react";

function Features() {
  return (
    <section id="features" className="w-screen bg-white">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 p-4">
        <div className="hidden lg:block">
          <img
            src="img/best-features.png.webp"
            alt="Features"
            className="w-full max-w-md  mb-4"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-20 leading-10">
            Some of the best features Of
            <br /> Our App!
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 mb-4 tracking-wide">
              <div className=" ">
                <Settings
                  className="text-white bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] px-3 rounded-4xl"
                  size={72}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Easy to Use</h2>
                <p className="text-gray-600">
                  Our app is designed with a user-friendly interface that makes
                  it easy for anyone to navigate and use.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-4 tracking-wide">
              <div className=" ">
                <Settings
                  className="text-white bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] px-3 rounded-4xl"
                  size={72}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Easy to Customize
                </h2>
                <p className="text-gray-600">
                  Our app is designed with a user-friendly interface that makes
                  it easy for anyone to navigate and use.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-4 tracking-wide">
              <div className=" ">
                <Settings
                  className="text-white bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] px-3 rounded-4xl"
                  size={72}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Extreme Security
                </h2>
                <p className="text-gray-600">
                  Our app is designed with a user-friendly interface that makes
                  it easy for anyone to navigate and use.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-4 tracking-wide">
              <div className=" ">
                <Settings
                  className="text-white bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] px-3 rounded-4xl"
                  size={72}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Customer Support
                </h2>
                <p className="text-gray-600">
                  Our app is designed with a user-friendly interface that makes
                  it easy for anyone to navigate and use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
