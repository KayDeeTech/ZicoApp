import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Pages", href: "#pages" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className=" lg:mx-48 mt-4 flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="mb-2 text-4xl font-bold px-4 uppercase">Zico App</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-[#450b78] font-medium">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative p-2 group"
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-[#6929a1] transition-all duration-300
            ${active === item.name ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button + Drawer */}
          <div className="lg:hidden w-full relative bg-[#4c4c4c]">
            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center focus:outline-none m-2 bg-slate-900/90 text-white px-2 rounded-md hover:bg-slate-800/70 uppercase"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-sm px-1 py-2 font-black">Menu</span>
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Drawer */}
            <div
              className={`fixed top-[72px] left-0 w-screen bg-[#4c4c4c] overflow-hidden mt-8 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
              }`}
            >
              <div className=" space-y-2 mb-2">
                {menu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 tracking-wider px-4 text-sm hover:text-md text-white hover:bg-slate-200 hover:text-slate-800/80 transition-all duration-300 rounded"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-32"></div>
    </>
  );
}

export default Header;
