function Trial() {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-10 text-white text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        <h2 className="text-4xl font-bold">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/80 text-base">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex gap-4 mt-2">
          <button className="btn rounded-full bg-white text-[#4F39F6] font-semibold border-none hover:bg-white/90">
            Explore Products
          </button>
          <button className="btn rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10">
            View Pricing
          </button>
        </div>

        <p className="text-white/60 text-sm mt-1">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default Trial;
