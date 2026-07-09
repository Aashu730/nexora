import { motion } from "framer-motion";
import { FaBalanceScale, FaCheckCircle } from "react-icons/fa";

const comparisons = [
  {
    title: "Deloitte vs TCS",
    left: "Deloitte",
    right: "TCS",
    winner: "Deloitte",
    confidence: "96%",
  },
  {
    title: "iPhone vs Samsung",
    left: "iPhone",
    right: "Samsung",
    winner: "iPhone",
    confidence: "92%",
  },
];

function Comparison() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-violet-400 font-medium">
          AI Comparison Engine
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Compare Before You Decide
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Nexora compares options side-by-side and gives an AI recommendation
          with confidence score.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {comparisons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">
              <FaBalanceScale className="text-violet-400 text-2xl" />
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>
            </div>

            <div className="mt-10 flex items-center justify-between">

              <div className="text-center">
                <div className="text-xl font-semibold">
                  {item.left}
                </div>

                <div className="mt-4 h-3 w-40 rounded-full bg-white/10">
                  <div className="h-3 w-[90%] rounded-full bg-violet-500"></div>
                </div>
              </div>

              <div className="text-zinc-500 font-bold">
                VS
              </div>

              <div className="text-center">
                <div className="text-xl font-semibold">
                  {item.right}
                </div>

                <div className="mt-4 h-3 w-40 rounded-full bg-white/10">
                  <div className="h-3 w-[75%] rounded-full bg-cyan-500"></div>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-3xl bg-violet-500/10 p-6">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                <div>

                  <p className="text-sm text-violet-300">
                    AI Recommendation
                  </p>

                  <h4 className="text-3xl font-bold">
                    {item.winner}
                  </h4>

                </div>

                <div className="ml-auto text-right">

                  <p className="text-sm text-zinc-400">
                    Confidence
                  </p>

                  <h4 className="text-2xl font-bold">
                    {item.confidence}
                  </h4>

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Comparison;