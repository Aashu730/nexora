import { useState } from "react";
import {
  FaBrain,
  FaSearch,
  FaArrowRight,
  FaBookmark,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";

import { analyzeDecision } from "../services/gemini";
import { saveDecision } from "../services/decisionService";

function Decision() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!question.trim()) {
      alert("Please enter a decision.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const response = await analyzeDecision(question);
      setResult(response);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!result) {
      alert("Nothing to save.");
      return;
    }

    try {
      setSaving(true);
      await saveDecision(question, result);
      alert("Decision saved successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-6 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm text-violet-300">Nexora AI</p>

        <h1 className="mt-2 text-4xl font-bold">Decision Engine</h1>

        <p className="mt-2 text-zinc-400">
          Ask anything and let Nexora analyze it intelligently.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <h2 className="text-2xl font-bold">
            What decision are you confused about?
          </h2>

          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/20 p-3 md:flex-row">
            <div className="flex items-center px-4 text-zinc-500">
              <FaSearch />
            </div>

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 bg-transparent px-2 py-4 outline-none placeholder:text-zinc-500"
              placeholder="Example: Should I join Deloitte or TCS?"
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Analyze"}
              {!loading && <FaArrowRight />}
            </button>
          </div>
        </div>

        {!result && !loading && (
          <div className="mt-10 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.03] p-14 text-center">
            <FaBrain className="mx-auto text-6xl text-violet-400" />

            <h2 className="mt-6 text-3xl font-bold">
              Your AI Result will appear here
            </h2>

            <p className="mt-4 text-zinc-500">Ask Nexora anything.</p>
          </div>
        )}

        {loading && (
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-14 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />

            <h2 className="mt-6 text-3xl font-bold">Nexora is thinking...</h2>
          </div>
        )}

        {result && (
          <div className="mt-10 space-y-6">
            <div className="rounded-[2rem] border border-violet-500/20 bg-violet-500/10 p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <FaBrain />
                Final Recommendation
              </h2>

              <p className="mt-4 text-lg leading-8">
                {result.recommendation}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <FaChartLine />
                  Confidence
                </h2>

                <span className="text-3xl font-bold text-cyan-400">
                  {result.confidence}%
                </span>
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-green-500/20 bg-green-500/10 p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-green-400">
                  <FaCheckCircle />
                  Pros
                </h2>

                <ul className="mt-5 space-y-3">
                  {(result.pros || []).map((pro, index) => (
                    <li key={index} className="rounded-xl bg-black/20 p-3">
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-red-500/20 bg-red-500/10 p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-red-400">
                  <FaTimesCircle />
                  Cons
                </h2>

                <ul className="mt-5 space-y-3">
                  {(result.cons || []).map((con, index) => (
                    <li key={index} className="rounded-xl bg-black/20 p-3">
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/10 p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-yellow-300">
                <FaExclamationTriangle />
                Risks
              </h2>

              <ul className="mt-5 space-y-3">
                {(result.risks || []).map((risk, index) => (
                  <li key={index} className="rounded-xl bg-black/20 p-3">
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-bold">📝 Summary</h2>

              <p className="mt-4 leading-8 text-zinc-300">{result.summary}</p>
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold disabled:opacity-60"
            >
              <FaBookmark />
              {saving ? "Saving..." : "Save Decision"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Decision;