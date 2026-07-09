import { motion } from "framer-motion";
import {
  FaBrain,
  FaBalanceScale,
  FaBookmark,
  FaChartPie,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI Reasoning",
    desc: "Understand every decision with clear logic, pros, cons, risk and final verdict.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Compare Anything",
    desc: "Compare jobs, colleges, products, cities, courses and financial choices.",
  },
  {
    icon: <FaBookmark />,
    title: "Save Decisions",
    desc: "Save your important decisions and revisit them anytime from your dashboard.",
  },
  {
    icon: <FaChartPie />,
    title: "Confidence Score",
    desc: "Every recommendation comes with a confidence score so you know how strong it is.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Risk Analysis",
    desc: "Nexora highlights hidden risks before you take the final step.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Clarity",
    desc: "Stop wasting hours reading random reviews. Get clarity in seconds.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-violet-300">Why people choose Nexora</p>
        <h3 className="mt-3 text-4xl font-bold tracking-tight">
          Built for better decisions.
        </h3>
        <p className="mt-4 text-zinc-400">
          Nexora turns confusion into structured recommendations that are easy
          to understand and act on.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-violet-400/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl text-violet-300">
              {feature.icon}
            </div>

            <h4 className="text-xl font-semibold">{feature.title}</h4>
            <p className="mt-3 leading-7 text-zinc-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;