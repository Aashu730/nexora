import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaRobot, FaShieldAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm text-violet-300"
          >
            🚀 AI Powered Decision Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-6xl text-6xl font-black leading-tight md:text-8xl"
          >
            Don&apos;t Search.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Decide Smarter.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
          >
            Stop wasting hours reading reviews. Nexora compares, analyzes and
            recommends the best decision using Artificial Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-14 flex w-full max-w-5xl flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl md:flex-row"
          >
            <div className="flex flex-1 items-center px-6 py-5 text-lg text-white">
              <TypeAnimation
                sequence={[
                  "Should I join Deloitte or TCS?",
                  1800,
                  "Should I buy iPhone or Samsung?",
                  1800,
                  "MBA or Job?",
                  1800,
                  "SIP or Fixed Deposit?",
                  1800,
                  "Startup or Job?",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-zinc-300"
              />
            </div>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-9 py-5 text-lg font-semibold transition hover:scale-105">
              Decide
              <FaArrowRight />
            </button>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <button className="rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 transition hover:border-violet-500 hover:bg-violet-500/10">
              Compare Products
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 transition hover:border-violet-500 hover:bg-violet-500/10">
              Career Decisions
            </button>
          </div>
        </div>

        <div className="mt-24 grid gap-7 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
          >
            <FaRobot className="mb-5 text-4xl text-violet-400" />
            <h3 className="text-5xl font-bold">AI</h3>
            <p className="mt-3 text-zinc-400">Smart Decision Engine</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
          >
            <FaShieldAlt className="mb-5 text-4xl text-cyan-400" />
            <h3 className="text-5xl font-bold">100%</h3>
            <p className="mt-3 text-zinc-400">Secure Platform</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
          >
            <h3 className="text-6xl font-black text-violet-400">∞</h3>
            <p className="mt-3 text-zinc-400">Unlimited Decisions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;