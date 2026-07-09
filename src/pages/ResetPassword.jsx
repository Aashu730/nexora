import { FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
            <FaBrain className="text-2xl" />
          </div>

          <h1 className="mt-5 text-3xl font-bold">Reset password</h1>
          <p className="mt-2 text-zinc-400">Create a new password for your account.</p>
        </div>

        <input
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none placeholder:text-zinc-500"
          placeholder="New password"
          type="password"
        />

        <input
          className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none placeholder:text-zinc-500"
          placeholder="Confirm password"
          type="password"
        />

        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold">
          Reset Password
        </button>

        <Link to="/login" className="mt-6 block text-center text-sm text-zinc-500 hover:text-white">
          Back to login
        </Link>
      </div>
    </main>
  );
}

export default ResetPassword;