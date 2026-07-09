import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaBrain } from "react-icons/fa";

function LiveAIDemo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-violet-400">Live AI Demo</p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Watch Nexora turn confusion into clarity.
          </h2>

          <p className="mt-5 max-w-xl text-zinc-400">
            Nexora does not just answer. It compares, scores, explains risks and gives a clear final recommendation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl"
        >
          <div className="rounded-2xl bg-black/30 p-5">
            <p className="text-sm text-zinc-500">User asked</p>
            <h3 className="mt-2 text-xl font-semibold">
              Should I join Deloitte or TCS?
            </h3>
          </div>

          <div className="mt-6 flex items-center gap-3 text-violet-300">
            <FaBrain />
            <span>AI Thinking...</span>
          </div>

          <div className="mt-5 space-y-3">
            <div className="h-3 w-full rounded-full bg-white/10">
              <div className="h-3 w-[91%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"></div>
            </div>
            <p className="text-sm text-zinc-400">Confidence Score: 91%</p>
          </div>

          <div className="mt-7 rounded-3xl bg-violet-500/10 p-6">
            <p className="text-sm text-violet-300">Final Recommendation</p>
            <h3 className="mt-2 text-3xl font-bold">Choose Deloitte</h3>
            <p className="mt-3 text-zinc-400">
              Better learning exposure, brand value and long-term career growth.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.04] p-5">
              <FaCheckCircle className="text-green-400" />
              <h4 className="mt-3 font-semibold">Pros</h4>
              <p className="mt-2 text-sm text-zinc-400">
                Better brand, learning and career growth.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-5">
              <FaExclamationTriangle className="text-yellow-400" />
              <h4 className="mt-3 font-semibold">Risk</h4>
              <p className="mt-2 text-sm text-zinc-400">
                Workload can be higher in some teams.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LiveAIDemo;