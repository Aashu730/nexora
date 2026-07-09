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
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const signupWithEmail = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const signupWithGithub = async () => {
    try {
      await signInWithPopup(auth, new GithubAuthProvider());
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") signupWithEmail();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
            <FaBrain className="text-2xl" />
          </div>
          <h1 className="mt-5 text-3xl font-bold">Create Account</h1>
          <p className="mt-2 text-zinc-400">Start making smarter decisions.</p>
        </div>

        <button onClick={signupWithGoogle} className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-semibold hover:bg-white/[0.08]">
          <FaGoogle /> Continue with Google
        </button>

        <button onClick={signupWithGithub} className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-semibold hover:bg-white/[0.08]">
          <FaGithub /> Continue with GitHub
        </button>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm text-zinc-500">or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onKeyDown={handleEnter}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onKeyDown={handleEnter}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none"
        />

        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onKeyDown={handleEnter}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 pr-12 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          onClick={signupWithEmail}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-300">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Signup;