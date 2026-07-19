import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">
            Blog<span className="text-indigo-500">Hub</span>
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to="/signin"
              className="rounded-lg px-4 py-2 text-gray-300 transition hover:text-white"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          ✨ Share your ideas with the world
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Publish stories that
          <span className="text-indigo-500"> inspire.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Create beautiful blogs, discover amazing stories, and connect with
          readers from around the globe. A fast, modern blogging platform built
          for writers and developers.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold transition hover:bg-indigo-700"
          >
            Start Writing
          </Link>

          <Link
            to="/signin"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg transition hover:border-slate-500 hover:bg-slate-900"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mb-4 text-4xl">✍️</div>
          <h3 className="mb-3 text-xl font-semibold">Write with Ease</h3>
          <p className="text-slate-400">
            A distraction-free writing experience that helps you focus on your
            content.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mb-4 text-4xl">🚀</div>
          <h3 className="mb-3 text-xl font-semibold">Publish Instantly</h3>
          <p className="text-slate-400">
            Share your thoughts with a single click and reach readers anywhere.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mb-4 text-4xl">🌍</div>
          <h3 className="mb-3 text-xl font-semibold">Read Everywhere</h3>
          <p className="text-slate-400">
            Explore articles on technology, travel, productivity, and much more.
          </p>
        </div>
      </section>
    </div>
  );
}
