import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaBrain,
  FaBookmark,
  FaCalendarAlt,
} from "react-icons/fa";
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

  const cards = [
    { title: "Total Decisions", value: decisions.length, icon: <FaBrain /> },
    { title: "Saved Decisions", value: decisions.length, icon: <FaBookmark /> },
    { title: "AI Analyses", value: decisions.length, icon: <FaChartLine /> },
    { title: "This Month", value: decisions.length, icon: <FaCalendarAlt /> },
  ];

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <p className="mt-2 text-zinc-400">Your Nexora usage overview.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-2xl text-violet-300">{card.icon}</div>
              <h2 className="mt-4 text-zinc-400">{card.title}</h2>
              <p className="mt-3 text-4xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Analytics;