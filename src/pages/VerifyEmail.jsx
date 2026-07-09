import { FaBrain, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
          <FaBrain className="text-2xl" />
        </div>

        <FaEnvelopeOpenText className="mx-auto mt-8 text-6xl text-violet-300" />

        <h1 className="mt-6 text-3xl font-bold">Check your email</h1>
        <p className="mt-3 text-zinc-400">
          We sent a verification link to your email address.
        </p>

        <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold">
          Resend Email
        </button>

        <Link to="/login" className="mt-6 block text-sm text-zinc-500 hover:text-white">
          Back to login
        </Link>
      </div>
    </main>
  );
}

export default VerifyEmail;