import { useEffect, useState } from "react";
import { FaTrash, FaBookmark } from "react-icons/fa";
import { getUserDecisions, deleteDecision } from "../services/decisionService";

function Saved() {
  const [decisions, setDecisions] = useState([]);
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

  const handleDelete = async (id) => {
    if (!confirm("Delete this decision?")) return;
    await deleteDecision(id);
    loadData();
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Saved Decisions</h1>
        <p className="mt-2 text-zinc-400">Your saved AI decisions.</p>

        {loading ? (
          <p className="mt-10 text-zinc-400">Loading...</p>
        ) : decisions.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-white/10 p-10 text-center text-zinc-500">
            No saved decisions yet.
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {decisions.map((item) => (
              <div
                key={item.id}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex justify-between gap-4">
                  <h2 className="text-xl font-bold">{item.question}</h2>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTrash />
                  </button>
                </div>

                <p className="mt-4 text-zinc-400">
                  {item.answer?.summary ||
                    item.answer?.recommendation ||
                    "Saved decision"}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-violet-300">
                  <FaBookmark />
                  Saved
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Saved;