import { FaBrain, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
              <FaBrain />
            </div>
            <h2 className="text-2xl font-bold">Nexora</h2>
          </div>

          <p className="mt-4 max-w-sm text-zinc-400">
            AI-powered decision intelligence for smarter choices in career,
            products, finance and life.
          </p>

          <div className="mt-6 flex gap-4 text-xl text-zinc-400">
            <FaGithub className="cursor-pointer hover:text-white" />
            <FaLinkedin className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Product</h3>
          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>Decision Engine</li>
            <li>Compare</li>
            <li>Dashboard</li>
            <li>Saved Decisions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>Career Decisions</li>
            <li>Product Decisions</li>
            <li>Finance Decisions</li>
            <li>Education Decisions</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6 text-sm text-zinc-500">
        © 2026 Nexora. Don&apos;t Search. Decide.
      </div>
    </footer>
  );
}

export default Footer;