function Pricing() {
  return (
    <section className="py-20 max-w-300 mx-auto px-4 md:px-0">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-neutral/80">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* card-1 */}
          <div className="flex flex-col flex-1 gap-5 shadow-lg p-8 rounded-lg bg-[#F2F2F2]">
            <span>
              <h1 className="text-xl font-bold">Starter</h1>
              <p className="text-neutral/80">Perfect for getting started</p>
            </span>
            <p className="text-3xl font-bold">
              $0 <span className="text-sm text-neutral/80">/Month</span>
            </p>

            <span className="flex-1">
              <ul>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Access to
                  10 free tools
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Basic
                  templates
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Community
                  support
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> 1 project
                  per month
                </li>
              </ul>
            </span>

            <button className="btn btn-primary rounded-full">
              Get Started Free
            </button>
          </div>
          {/* card-2 */}
          <div className="flex flex-col flex-1 gap-5 shadow-lg p-8 rounded-lg relative bg-linear-to-br text-white from-[#4F39F6] to-[#9514FA]">
            <span className="bg-[#FEF3C6] px-3 py-2 rounded-full w-fit absolute -top-5 left-30 shadow-md">
              <p className="text-[#BB4D00] font-semibold">Most Popular</p>
            </span>
            <span>
              <h1 className="text-xl font-bold">Pro</h1>
              <p className="">Best for professionals</p>
            </span>
            <p className="text-3xl font-bold">
              $29 <span className="text-sm font-light">/Month</span>
            </p>

            <span className="flex-1">
              <ul>
                <li>
                  <span className="text-white font-bold">✓</span> Access to all
                  premium tools
                </li>
                <li>
                  <span className="text-white font-bold">✓</span> Unlimited
                  templates
                </li>
                <li>
                  <span className="text-white font-bold">✓</span> Priority
                  support
                </li>
                <li>
                  <span className="text-white font-bold">✓</span> Unlimited
                  projects
                </li>
                <li>
                  <span className="text-white font-bold">✓</span> Cloud sync
                </li>
                <li>
                  <span className="text-white font-bold">✓</span> Advanced
                  analytics
                </li>
              </ul>
            </span>

            <button className="btn btn-primary bg-white rounded-full">
              <p className="bg-linear-to-br from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Start Pro Trial
              </p>
            </button>
          </div>
          {/* card-3 */}
          <div className="flex flex-col flex-1 gap-5 shadow-lg p-8 rounded-lg bg-[#F2F2F2]">
            <span>
              <h1 className="text-xl font-bold">Enterprise</h1>
              <p className="text-neutral/80">For teams and businesses</p>
            </span>
            <p className="text-3xl font-bold">
              $99 <span className="text-sm text-neutral/80">/Month</span>
            </p>

            <span className="flex-1">
              <ul>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Everything
                  in Pro
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Team
                  collaboration
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Dedicated
                  support
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> SLA
                  guarantee
                </li>
                <li>
                  <span className="text-green-500 font-bold">✓</span> Custom
                  branding
                </li>
              </ul>
            </span>

            <button className="btn btn-primary rounded-full">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
