import { useEffect, useState } from "react";
import {
  FaBrain,
  FaHome,
  FaRobot,
  FaBookmark,
  FaChartLine,
  FaCog,
  FaBell,
  FaSearch,
  FaArrowRight,
  FaSignOutAlt,
} from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { getUserDecisions } from "../services/decisionService";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState("");
  const [decisions, setDecisions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      setUser(currentUser);

      try {
        const data = await getUserDecisions();
        setDecisions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleAnalyze = () => {
    navigate("/decision", {
      state: { question },
    });
  };

  const navItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaRobot />, label: "AI Engine", path: "/decision" },
    { icon: <FaBookmark />, label: "Saved", path: "/saved" },
    { icon: <FaChartLine />, label: "Analytics", path: "/analytics" },
    { icon: <FaCog />, label: "Profile", path: "/profile" },
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-white/[0.03] p-6 lg:block">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
              <FaBrain />
            </div>
            <h1 className="text-2xl font-bold">Nexora</h1>
          </Link>

          <nav className="mt-12 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="mt-10 flex w-full items-center gap-3 rounded-2xl bg-red-500/10 px-4 py-3 text-red-300 hover:bg-red-500/20"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </aside>

        <section className="flex-1 p-6 lg:p-8">
          <header className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Dashboard</h2>
              <p className="mt-1 text-zinc-400">Logged in as {user?.email}</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <FaBell />
              </button>

              <Link
                to="/profile"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 font-bold"
              >
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </Link>
            </div>
          </header>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-sm text-violet-300">AI Decision Workspace</p>
            <h3 className="mt-3 text-3xl font-bold">
              What decision are you confused about?
            </h3>

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
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 font-semibold"
              >
                Analyze <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h4 className="text-zinc-400">Total Decisions</h4>
              <p className="mt-3 text-4xl font-bold">{decisions.length}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h4 className="text-zinc-400">Saved</h4>
              <p className="mt-3 text-4xl font-bold">{decisions.length}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h4 className="text-zinc-400">AI Status</h4>
              <p className="mt-3 text-2xl font-bold text-green-400">Online</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-2xl font-bold">Recent Decisions</h3>

              {loading ? (
                <div className="mt-8 text-center text-zinc-500">
                  Loading...
                </div>
              ) : decisions.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-dashed border-white/10 p-10 text-center text-zinc-500">
                  No recent decisions yet.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {decisions.slice(0, 5).map((decision) => (
                    <div
                      key={decision.id}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <h4 className="font-semibold">{decision.question}</h4>
                      <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
                        {decision.answer?.summary ||
                          decision.answer?.recommendation ||
                          "Saved decision"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Saved Decisions</h3>

                <Link
                  to="/saved"
                  className="text-sm text-violet-300 hover:text-violet-200"
                >
                  View All →
                </Link>
              </div>

              {loading ? (
                <div className="mt-8 text-center text-zinc-500">
                  Loading...
                </div>
              ) : decisions.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-dashed border-white/10 p-10 text-center text-zinc-500">
                  No saved decisions yet.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {decisions.slice(0, 5).map((decision) => (
                    <div
                      key={decision.id}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <h4 className="font-semibold">{decision.question}</h4>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                        {decision.answer?.summary ||
                          decision.answer?.recommendation ||
                          "Saved decision"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 p-8">
            <h3 className="text-2xl font-bold">🚀 Quick Actions</h3>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/decision"
                className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
              >
                New AI Decision
              </Link>

              <Link
                to="/compare"
                className="rounded-2xl border border-white/10 px-6 py-3 hover:bg-white/10"
              >
                Compare Options
              </Link>

              <Link
                to="/profile"
                className="rounded-2xl border border-white/10 px-6 py-3 hover:bg-white/10"
              >
                Profile
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;