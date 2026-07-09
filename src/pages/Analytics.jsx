import { useEffect, useState } from "react";
import { FaBrain, FaBookmark, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import { getUserDecisions } from "../services/decisionService";

function Analytics() {
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getUserDecisions();
      setDecisions(data);
    }
    loadData();
  }, []);

  const avgConfidence =
    decisions.length === 0
      ? 0
      : Math.round(
          decisions.reduce((sum, item) => sum + Number(item.answer?.confidence || 0), 0) /
            decisions.length
        );

  const thisMonth = decisions.filter((item) => {
    const date = item.createdAt?.toDate?.();
    if (!date) return false;
    const now = new Date();
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;

  const cards = [
    { title: "Total Decisions", value: decisions.length, icon: <FaBrain /> },
    { title: "Saved Decisions", value: decisions.length, icon: <FaBookmark /> },
    { title: "Avg Confidence", value: `${avgConfidence}%`, icon: <FaChartLine /> },
    { title: "This Month", value: thisMonth, icon: <FaCalendarAlt /> },
  ];

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <p className="mt-2 text-zinc-400">Your Nexora usage overview.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-2xl text-violet-300">{card.icon}</div>
              <h2 className="mt-4 text-zinc-400">{card.title}</h2>
              <p className="mt-3 text-4xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>

          {decisions.length === 0 ? (
            <p className="mt-6 text-zinc-500">No activity yet.</p>
          ) : (
            <div className="mt-6 space-y-4">
              {decisions.slice(0, 6).map((item) => (
                <div key={item.id} className="rounded-2xl bg-black/20 p-4">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Confidence: {item.answer?.confidence || 0}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Analytics;