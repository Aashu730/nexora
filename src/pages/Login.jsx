import { useState } from "react";
import {
  FaBrain,
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const loginWithEmail = async () => {
    if (loading || socialLoading) return;

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    if (loading || socialLoading) return;

    try {
      setSocialLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.code !== "auth/cancelled-popup-request") {
        alert(error.message);
      }
    } finally {
      setSocialLoading(false);
    }
  };

  const loginWithGithub = async () => {
    if (loading || socialLoading) return;

    try {
      setSocialLoading(true);
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.code !== "auth/cancelled-popup-request") {
        alert(error.message);
      }
    } finally {
      setSocialLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      loginWithEmail();
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
            <FaBrain className="text-2xl" />
          </div>

          <h1 className="mt-5 text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-zinc-400">Login to continue to Nexora.</p>
        </div>

        <button
          type="button"
          onClick={loginWithGoogle}
          disabled={loading || socialLoading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-semibold transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaGoogle />
          {socialLoading ? "Opening popup..." : "Continue with Google"}
        </button>

        <button
          type="button"
          onClick={loginWithGithub}
          disabled={loading || socialLoading}
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-semibold transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaGithub />
          {socialLoading ? "Opening popup..." : "Continue with GitHub"}
        </button>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm text-zinc-500">or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onKeyDown={handleEnter}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-violet-500/50"
        />

        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onKeyDown={handleEnter}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 pr-12 outline-none placeholder:text-zinc-500 focus:border-violet-500/50"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <Link
          to="/forgot-password"
          className="mt-4 block text-sm text-violet-300 hover:text-white"
        >
          Forgot Password?
        </Link>

        <button
          type="button"
          onClick={loginWithEmail}
          disabled={loading || socialLoading}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-violet-300 hover:text-white">
            Sign Up
          </Link>
        </p>

        <Link
          to="/"
          className="mt-6 block text-center text-sm text-zinc-500 hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Login;