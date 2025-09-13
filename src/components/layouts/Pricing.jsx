function Pricing() {
  return (
    <>
      <section
        id="pricing"
        className="bg-gradient-to-r from-[#d852e8] to-purple-600 text-white py-20 px-6 my-20 relative"
      >
        <div className="flex flex-col items-center max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose your very best pricing plan
          </h2>

          {/* Card container */}
          <div className="flex flex-col md:flex-row justify-center gap-8 w-full  -mb-56">
            {/* Pricing Card */}
            <div className="max-w-sm flex-1 bg-white rounded-xl shadow-lg p-6 text-center border border-slate-200 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800">Basic Plan</h3>
              <p className="text-4xl font-extrabold text-purple-600 mt-6 mb-4">
                $10
                <span className="text-lg font-medium text-slate-500">
                  /month
                </span>
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>✔ 5 Projects</li>
                <li>✔ Basic Support</li>
                <li>✔ Access to Dashboard</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                Choose Plan
              </button>
            </div>

            {/* Pricing Card */}
            <div className="max-w-sm flex-1 bg-white rounded-xl shadow-lg p-6 text-center border border-slate-200 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800">Pro Plan</h3>
              <p className="text-4xl font-extrabold text-purple-600 mt-6 mb-4">
                $29
                <span className="text-lg font-medium text-slate-500">
                  /month
                </span>
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>✔ Unlimited Projects</li>
                <li>✔ Priority Support</li>
                <li>✔ Team Collaboration</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                Choose Plan
              </button>
            </div>

            {/* Pricing Card */}
            <div className="max-w-sm flex-1 bg-white rounded-xl shadow-lg p-6 text-center border border-slate-200 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800">Premium Plan</h3>
              <p className="text-4xl font-extrabold text-purple-600 mt-6 mb-4">
                $49
                <span className="text-lg font-medium text-slate-500">
                  /month
                </span>
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>✔ Everything in Pro</li>
                <li>✔ Dedicated Manager</li>
                <li>✔ Advanced Analytics</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <div className="mb-40"></div>
    </>
  );
}

export default Pricing;
