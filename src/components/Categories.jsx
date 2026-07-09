import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMobileAlt,
  FaMoneyBillWave,
  FaPlane,
  FaHome,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaBriefcase />,
    title: "Career",
    desc: "TCS vs Deloitte",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    desc: "MBA vs Job",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "Technology",
    desc: "iPhone vs Samsung",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Finance",
    desc: "SIP vs FD",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaPlane />,
    title: "Travel",
    desc: "Goa vs Manali",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <FaHome />,
    title: "Lifestyle",
    desc: "Rent vs Buy Home",
    color: "from-purple-500 to-fuchsia-500",
  },
];

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-violet-400 font-medium">
          Explore Decisions
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Decision Categories
        </h2>

        <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
          Whatever decision you're facing,
          Nexora helps you compare your options
          and choose confidently.
        </p>
      </div>

      <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-2xl text-white shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {item.desc}
            </p>

            <button className="mt-7 text-violet-400 font-semibold group-hover:text-white transition">
              Explore →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categories;