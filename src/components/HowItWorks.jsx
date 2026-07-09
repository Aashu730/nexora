const steps = [
  {
    number: "01",
    title: "Ask your decision",
    desc: "Type any decision you are confused about — career, product, money or education.",
  },
  {
    number: "02",
    title: "AI compares options",
    desc: "Nexora analyzes pros, cons, risks, cost, timing and personal fit.",
  },
  {
    number: "03",
    title: "Get clear recommendation",
    desc: "You get a structured verdict instead of wasting hours searching online.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-3xl font-bold">How it works</h3>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
          >
            <p className="text-sm text-violet-300">{step.number}</p>
            <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
            <p className="mt-3 text-zinc-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;