function Pricing() {
  return (
    <section className="py-20 max-w-300 mx-auto">
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-neutral/80">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div>
          {/* card-1 */}
          <div className="flex flex-col gap-5 w-fit shadow-lg p-8 rounded-lg bg-[#F2F2F2]">
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
          <div className="flex flex-col gap-5 w-fit shadow-lg p-8 rounded-lg bg-linear-to-br text-white from-[#4F39F6] to-[#9514FA]">
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
                Get Started Free
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
