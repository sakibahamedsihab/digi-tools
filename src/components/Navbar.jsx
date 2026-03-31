import cart from "../assets/cart.svg";

function Navbar() {
  return (
    <div className="shadow-sm">
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
          <span>
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
