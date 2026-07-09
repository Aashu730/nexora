import { FaBrain, FaShieldAlt, FaChartLine, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaBrain />,
    value: "AI",
    label: "Decision Engine",
  },
  {
    icon: <FaShieldAlt />,
    value: "100%",
    label: "Privacy First",
  },
  {
    icon: <FaChartLine />,
    value: "24/7",
    label: "Always Available",
  },
  {
    icon: <FaClock />,
    value: "∞",
    label: "Unlimited Decisions",
  },
];

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-400 transition group-hover:bg-violet-500/20 group-hover:scale-110">
              {item.icon}
            </div>

            <h2 className="mt-7 text-5xl font-extrabold tracking-tight">
              {item.value}
            </h2>

            <p className="mt-3 text-lg text-zinc-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;