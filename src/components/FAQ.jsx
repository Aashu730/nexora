const faqs = [
  {
    q: "Is Nexora a search engine?",
    a: "No. Nexora is a decision engine. It helps you choose better, not just search more.",
  },
  {
    q: "Can I compare two options?",
    a: "Yes. In upcoming versions, you will compare colleges, jobs, products, cities and more.",
  },
  {
    q: "Will it use real AI?",
    a: "Yes. First we build the UI, then we connect Gemini or OpenAI API.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-3xl font-bold">Questions, answered</h3>

      <div className="mt-8 grid gap-5">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h4 className="font-semibold">{item.q}</h4>
            <p className="mt-2 text-zinc-400">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;