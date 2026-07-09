import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    text: "Nexora made decision-making feel simple. Instead of reading 20 blogs, I got a clear recommendation in minutes.",
  },
  {
    name: "Riya Sharma",
    role: "MBA Student",
    text: "I loved the way Nexora breaks choices into pros, cons, confidence and risk. It feels practical.",
  },
  {
    name: "Karan Patel",
    role: "Founder",
    text: "This is not just another AI tool. It feels like a personal decision partner for everyday life.",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-violet-300">Loved by early users</p>
        <h3 className="mt-3 text-4xl font-bold tracking-tight">
          People choose clarity over confusion.
        </h3>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
          >
            <p className="leading-7 text-zinc-300">“{item.text}”</p>

            <div className="mt-8">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;