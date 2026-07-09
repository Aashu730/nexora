import { useEffect, useState } from "react";
import { FaTrash, FaSearch, FaBookmark } from "react-icons/fa";
import { getUserDecisions, deleteDecision } from "../services/decisionService";

function Saved() {
  const [decisions, setDecisions] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const data = await getUserDecisions();
      setDecisions(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filtered = decisions.filter((item) =>
    item.question?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!confirm("Delete this decision?")) return;
    await deleteDecision(id);
    setSelected(null);
    loadData();
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Saved Decisions</h1>
        <p className="mt-2 text-zinc-400">Search, view and manage your saved AI decisions.</p>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
          <FaSearch className="text-zinc-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search decisions..."
            className="w-full bg-transparent outline-none placeholder:text-zinc-500"
          />
        </div>

        {loading ? (
          <p className="mt-10 text-zinc-400">Loading...</p>
        ) : filtered.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-white/10 p-10 text-center text-zinc-500">
            No saved decisions found.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-5">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="w-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:bg-white/[0.07]"
                >
                  <h2 className="text-xl font-bold">{item.question}</h2>
                  <p className="mt-3 line-clamp-2 text-zinc-400">
                    {item.answer?.summary || item.answer?.recommendation || "Saved decision"}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-violet-300">
                    <FaBookmark />
                    Saved
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              {!selected ? (
                <div className="py-20 text-center text-zinc-500">
                  Select a decision to view full analysis.
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold">{selected.question}</h2>
                    <button
                      onClick={() => handleDelete(selected.id)}
                      className="rounded-xl bg-red-500/10 p-3 text-red-400 hover:bg-red-500/20"
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold text-violet-300">Recommendation</h3>
                      <p className="mt-2 text-zinc-300">{selected.answer?.recommendation}</p>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold text-cyan-300">Confidence</h3>
                      <p className="mt-2 text-zinc-300">{selected.answer?.confidence}%</p>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold text-green-400">Pros</h3>
                      <ul className="mt-2 list-disc pl-5 text-zinc-300">
                        {(selected.answer?.pros || []).map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold text-red-400">Cons</h3>
                      <ul className="mt-2 list-disc pl-5 text-zinc-300">
                        {(selected.answer?.cons || []).map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold text-yellow-300">Risks</h3>
                      <ul className="mt-2 list-disc pl-5 text-zinc-300">
                        {(selected.answer?.risks || []).map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-black/20 p-5">
                      <h3 className="font-bold">Summary</h3>
                      <p className="mt-2 text-zinc-300">{selected.answer?.summary}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Saved;