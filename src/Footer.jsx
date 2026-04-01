import insta from "./assets/instagram.svg";
import fb from "./assets/Facebook.svg";
import x from "./assets/x.svg";

function Footer() {
  return (
    <footer className="bg-[#0F1117] text-white px-10 pt-16 pb-8">
      <div className="max-w-300 mx-auto">
        <div className="flex justify-between gap-10 pb-10">
          <div className="col-span-2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">DigiTools</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, <br />
              professionals, and businesses. Work smarter <br />
              with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1">Product</h3>
            {["Features", "Pricing", "Templates", "Integrations"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1">Company</h3>
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 text-sm hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1">Resources</h3>
            {["Documentation", "Help Center", "Community", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex flex-col gap-3 pb-10">
            <h3 className="font-semibold text-white">Social Links</h3>
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
        <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 text-sm hover:text-white transition"
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
