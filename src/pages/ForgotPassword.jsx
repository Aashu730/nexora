import { FaBrain, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
            <FaBrain className="text-2xl" />
          </div>

          <h1 className="mt-5 text-3xl font-bold">Forgot password?</h1>
          <p className="mt-2 text-zinc-400">
            Enter your email and we&apos;ll send you a reset link.
          </p>
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-12 py-4 outline-none placeholder:text-zinc-500"
            placeholder="Email address"
            type="email"
          />
        </div>

        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold">
          Send Reset Link
        </button>

        <Link
          to="/login"
          className="mt-6 block text-center text-sm text-zinc-500 hover:text-white"
        >
          ← Back to login
        </Link>
      </div>
    </main>
  );
}

export default ForgotPassword;