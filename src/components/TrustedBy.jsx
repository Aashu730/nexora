import { motion } from "framer-motion";

const companies = ["Google", "Microsoft", "Deloitte", "TCS", "OpenAI", "Infosys"];

function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-sm text-zinc-500"
      >
        Built for smarter decisions across careers, products and companies
      </motion.p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {companies.map((company, index) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-zinc-400 transition hover:border-violet-400/40 hover:text-white"
          >
            {company}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;