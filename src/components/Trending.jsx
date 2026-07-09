import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMobileAlt,
  FaChartLine,
  FaLaptop,
} from "react-icons/fa";

const items = [
  {
    title: "Deloitte vs TCS",
    category: "Career",
    icon: <FaBriefcase />,
  },
  {
    title: "MBA vs Job",
    category: "Education",
    icon: <FaGraduationCap />,
  },
  {
    title: "iPhone vs Samsung",
    category: "Technology",
    icon: <FaMobileAlt />,
  },
  {
    title: "SIP vs FD",
    category: "Finance",
    icon: <FaChartLine />,
  },
  {
    title: "MacBook vs Windows",
    category: "Technology",
    icon: <FaLaptop />,
  },
];

function Trending() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm text-violet-300">Popular right now</p>
          <h3 className="mt-2 text-3xl font-bold">Trending Decisions</h3>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-5">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-violet-400/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl text-violet-300">
              {item.icon}
            </div>

            <h4 className="font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm text-zinc-500">{item.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Trending;