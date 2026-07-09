import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaChartLine } from "react-icons/fa";

function AIPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm text-violet-300">AI Preview</p>
          <h3 className="mt-3 text-4xl font-bold tracking-tight">
            See how Nexora thinks before you decide.
          </h3>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Instead of giving random advice, Nexora breaks decisions into
            recommendation, confidence, risks and reasons.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
        >
          <p className="text-sm text-zinc-500">Question</p>
          <h4 className="mt-2 text-xl font-semibold">
            Should I join Deloitte or TCS?
          </h4>

          <div className="mt-8 rounded-3xl bg-violet-500/10 p-6">
            <p className="text-sm text-violet-300">Final Recommendation</p>
            <h4 className="mt-2 text-3xl font-bold">Choose Deloitte</h4>
            <p className="mt-3 text-zinc-400">
              Better brand value, learning exposure and long-term career growth.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <FaCheckCircle className="text-green-400" />
              <p className="mt-3 text-sm text-zinc-400">Pros</p>
              <h5 className="font-semibold">Strong Growth</h5>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-4">
              <FaExclamationTriangle className="text-yellow-400" />
              <p className="mt-3 text-sm text-zinc-400">Risk</p>
              <h5 className="font-semibold">Workload</h5>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-4">
              <FaChartLine className="text-cyan-400" />
              <p className="mt-3 text-sm text-zinc-400">Confidence</p>
              <h5 className="font-semibold">91%</h5>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AIPreview;