import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaBrain,
  FaBalanceScale,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaQuestionCircle />,
    title: "Ask a Question",
    desc: "Type any decision you want help with.",
  },
  {
    icon: <FaBrain />,
    title: "AI Analysis",
    desc: "Nexora analyzes all available options.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Compare",
    desc: "See pros, cons and confidence score.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Decide",
    desc: "Take the best decision confidently.",
  },
];

function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-violet-400 font-medium">
          How It Works
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Four Simple Steps
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          From question to recommendation in seconds.
        </p>
      </div>

      <div className="relative mt-20 grid gap-10 md:grid-cols-4">

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15 text-3xl text-violet-400">
              {step.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {step.desc}
            </p>

            <div className="absolute -top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold">
              {index + 1}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Timeline;