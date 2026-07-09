import { useState } from "react";
import { FaExchangeAlt, FaArrowRight } from "react-icons/fa";

function Compare() {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  const handleCompare = () => {
    if (!option1 || !option2) {
      alert("Please enter both options.");
      return;
    }
    setShowComparison(true);
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">

        <p className="text-sm text-violet-300">Nexora Compare</p>
        <h1 className="mt-2 text-4xl font-bold">Compare Anything</h1>
        <p className="mt-2 text-zinc-400">
          Compare careers, products, colleges or anything else.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              placeholder="First option"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none"
            />

            <input
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              placeholder="Second option"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none"
            />

          </div>

          <button
            onClick={handleCompare}
            className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold"
          >
            <FaExchangeAlt />
            Compare
          </button>

        </div>

        {!showComparison ? (
          <div className="mt-10 rounded-[2rem] border border-dashed border-white/10 p-12 text-center text-zinc-500">
            Your comparison will appear here.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{option1}</h2>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>✔ Pros</li>
                <li>✔ Features</li>
                <li>✔ Pricing</li>
                <li>✔ Growth</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{option2}</h2>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>✔ Pros</li>
                <li>✔ Features</li>
                <li>✔ Pricing</li>
                <li>✔ Growth</li>
              </ul>
            </div>

          </div>
        )}

        {showComparison && (
          <div className="mt-8 rounded-[2rem] border border-violet-500/20 bg-violet-500/10 p-6">

            <h2 className="text-3xl font-bold">AI Recommendation</h2>

            <p className="mt-4 text-zinc-300">
              Nexora will recommend the better option here once AI is connected.
            </p>

            <button className="mt-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3">
              View Detailed Analysis
              <FaArrowRight />
            </button>

          </div>
        )}

      </section>
    </main>
  );
}

export default Compare;