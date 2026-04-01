import insta from "./assets/instagram.svg";
import fb from "./assets/Facebook.svg";
import x from "./assets/x.svg";

function Footer() {
  return (
    <footer className="bg-[#0F1117] text-white px-4 md:px-10 py-8 md:pt-16 md:pb-8">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 pb-10">
          <div className="col-span-2 flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold">DigiTools</h1>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Premium digital tools for creators, <br />
              professionals, and businesses. Work smarter <br />
              with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm md:text-base mb-1">
              Product
            </h3>
            {["Features", "Pricing", "Templates", "Integrations"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-xs md:text-sm hover:text-white transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm md:text-base mb-1">
              Company
            </h3>
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 text-xs md:text-sm hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm md:text-base mb-1">
              Resources
            </h3>
            {["Documentation", "Help Center", "Community", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-xs md:text-sm hover:text-white transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex flex-col gap-3 pb-10 md:pb-0">
            <h3 className="font-semibold text-white text-sm md:text-base">
              Social Links
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2a2f45] transition"
              >
                <img src={insta} alt="" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2a2f45] transition"
              >
                <img src={fb} alt="" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2a2f45] transition"
              >
                <img src={x} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 text-xs md:text-sm hover:text-white transition whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
