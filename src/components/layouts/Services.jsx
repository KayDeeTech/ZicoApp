import { CreditCard, CreditCardIcon, PiggyBank } from "lucide-react";

function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center w-full px-4 py-12"
    >
      <h2 className="text-5xl font-bold text-center mb-6 capitalize">
        How can we help you
        <br /> with zico!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-6xl">
        <div className="group flex flex-col items-center p-8 hover:border hover:border-purple-800 rounded-lg gap-6 pb-8 bg-white transition-all duration-400 ease-in-out hover:shadow-lg">
          <div
            className="text-white p-8 my-8 rounded-full 
                  bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] 
                  bg-[length:200%_200%] bg-left-top 
                  group-hover:bg-right-bottom 
                  transition-all duration-700 ease-in-out"
          >
            <CreditCardIcon className="group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easily Manage</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Easily manage your payments, subscriptions, and financial
            transactions with Zico’s intuitive dashboard.
          </p>
        </div>

        <div className="group flex flex-col items-center p-8 hover:border hover:border-purple-800 rounded-lg gap-6 pb-8 bg-white transition-all duration-400 ease-in-out hover:shadow-lg">
          <div
            className="text-white p-8 my-8 rounded-full 
                  bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] 
                  bg-[length:200%_200%] bg-left-top 
                  group-hover:bg-right-bottom 
                  transition-all duration-700 ease-in-out"
          >
            <CreditCardIcon className="group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easily Manage</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Easily manage your payments, subscriptions, and financial
            transactions with Zico’s intuitive dashboard.
          </p>
        </div>

        <div className="group flex flex-col items-center p-8 hover:border hover:border-purple-800 rounded-lg gap-6 pb-8 bg-white transition-all duration-400 ease-in-out hover:shadow-lg">
          <div
            className="text-white p-8 my-8 rounded-full 
                  bg-gradient-to-r from-[#d852e8] via-[#d852e8] to-[#f9218d] 
                  bg-[length:200%_200%] bg-left-top 
                  group-hover:bg-right-bottom 
                  transition-all duration-700 ease-in-out"
          >
            <PiggyBank className="group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easily Manage</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Easily manage your payments, subscriptions, and financial
            transactions with Zico’s intuitive dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
