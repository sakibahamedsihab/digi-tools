import user from "../assets/user.png";
import box from "../assets/package.png";
import rocket from "../assets/rocket.png";

function GetStarted() {
  return (
    <section className="bg-base-200 p-10">
      <div className="flex flex-col items-center justify-center text-center gap-2 max-w-300 mx-auto py-10">
        <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-neutral/60 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="flex gap-8 my-10">
          {/* card-1 */}
          <div className="flex flex-col gap-3 items-center relative justify-center px-6 py-20 bg-white rounded-xl">
            <span className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center rounded-full absolute top-5 right-5 text-white font-bold">
              <p>01</p>
            </span>
            <span>
              <img src={user} alt="" />
            </span>
            <h1 className="text-2xl font-semibold">Create Account</h1>
            <p className="text-neutral/80">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* card-2 */}
          <div className="flex flex-col relative gap-3 items-center justify-center px-6 py-20 bg-white rounded-xl">
            <span className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center rounded-full absolute top-5 right-5 text-white font-bold">
              <p>02</p>
            </span>
            <span>
              <img src={box} alt="" />
            </span>
            <h1 className="text-2xl font-semibold">Choose Products</h1>
            <p className="text-neutral/80">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          {/* card-3 */}
          <div className="flex flex-col relative gap-3 items-center justify-center px-6 py-20 bg-white rounded-xl">
            <span className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center rounded-full absolute top-5 right-5 text-white font-bold">
              <p>03</p>
            </span>
            <span>
              <img src={rocket} alt="" />
            </span>
            <h1 className="text-2xl font-semibold">Start Creating</h1>
            <p className="text-neutral/80">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GetStarted;
