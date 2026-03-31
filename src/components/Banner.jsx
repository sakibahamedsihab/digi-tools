import group from "../assets/group.svg";
import banner from "../assets/banner.png";
import play from "../assets/play.svg";

function Banner() {
  return (
    <section className="max-w-300 mx-auto py-10 flex items-center gap-5 justify-between">
      {/* left */}
      <div className="space-y-5 flex flex-col w-1/2">
        <span className="bg-[#E1E7FF] flex gap-2 w-fit rounded-full px-4 py-1 mb-5">
          <img src={group} alt="" />
          <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold inline-block">
            New: AI-Powered Tools Available
          </p>
        </span>

        <h1 className="text-6xl font-bold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-lg text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-5">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>
          <button className="btn rounded-full bg-transparent border-[#4F39F6] text-[#4F39F6]">
            <img src={play} alt="" />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Watch Demo
            </p>
          </button>
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 flex justify-end">
        <img src={banner} alt="" />
      </div>
    </section>
  );
}

export default Banner;
