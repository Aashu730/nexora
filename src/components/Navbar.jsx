import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070B14]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500">
            <FaBrain className="text-xl text-white" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">Nexora</h1>
        </Link>

        <nav className="hidden items-center gap-10 text-zinc-400 md:flex">
          <Link className="transition hover:text-white" to="/">
            Home
          </Link>

          <Link className="transition hover:text-white" to="/compare">
            Compare
          </Link>

          <Link className="transition hover:text-white" to="/dashboard">
            Dashboard
          </Link>

          <Link className="transition hover:text-white" to="/decision">
            AI Engine
          </Link>
        </nav>

        <Link
          to="/signup"
          className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </motion.header>
  );
}

export default Navbar;