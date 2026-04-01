import cart from "../assets/cart.svg";

function Navbar({ purchasedId, setActiveTab }) {
  return (
    <div className="shadow-sm sticky top-0 z-10 bg-white">
      <nav className="flex justify-between items-center max-w-300 mx-auto">
        <div>
          <h1 className="text-4xl font-bold inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent py-5">
            DigiTools
          </h1>
        </div>

        <ul className="flex gap-5 font-semibold">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href=""></a>Features
          </li>
          <li>
            <a href=""></a>Pricing
          </li>
          <li>
            <a href=""></a>Testimonials
          </li>
          <li>
            <a href=""></a>FAQ
          </li>
        </ul>

        <div className="flex items-center juce gap-5">
          <span
            className="relative cursor-pointer"
            onClick={() => setActiveTab("cart")}
          >
            {purchasedId.length > 0 && (
              <div className="absolute -top-6 left-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                {purchasedId.length}
              </div>
            )}
            <img src={cart} alt="" />
          </span>
          <button className="font-semibold">Login</button>
          <button className="btn rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
