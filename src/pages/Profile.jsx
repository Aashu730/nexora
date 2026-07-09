import { FaUserCircle, FaEnvelope, FaLock, FaMoon, FaBell, FaSignOutAlt } from "react-icons/fa";

function Profile() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white px-6 py-10">
      <section className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">Profile</h1>
        <p className="mt-2 text-zinc-400">
          Manage your Nexora account settings.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Left Card */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-6xl">
              <FaUserCircle />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Your Name
            </h2>

            <p className="mt-2 text-zinc-400">
              your@email.com
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 font-semibold">
              Edit Profile
            </button>

          </div>

          {/* Right Settings */}
          <div className="lg:col-span-2 space-y-6">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">

              <h2 className="text-2xl font-bold">
                Account
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-5">
                  <div className="flex items-center gap-4">
                    <FaEnvelope />
                    Email Address
                  </div>

                  <button className="text-violet-300">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-5">
                  <div className="flex items-center gap-4">
                    <FaLock />
                    Password
                  </div>

                  <button className="text-violet-300">
                    Update
                  </button>
                </div>

              </div>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">

              <h2 className="text-2xl font-bold">
                Preferences
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-5">
                  <div className="flex items-center gap-4">
                    <FaMoon />
                    Dark Mode
                  </div>

                  <input type="checkbox" defaultChecked />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-5">
                  <div className="flex items-center gap-4">
                    <FaBell />
                    Notifications
                  </div>

                  <input type="checkbox" defaultChecked />
                </div>

              </div>

            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-semibold">
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Profile;