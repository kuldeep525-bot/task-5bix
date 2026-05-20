"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10 backdrop-blur-lg">
        <h1 className="text-2xl font-bold tracking-wide">Social Dashboard</h1>

        <div className="flex items-center gap-4">
          <Link
            href="/users"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-semibold"
          >
            Users
          </Link>

          <Link
            href="/posts"
            className="border border-white/20 hover:bg-white/10 transition px-5 py-2 rounded-xl font-semibold"
          >
            Posts
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 uppercase tracking-[5px] mb-5 font-semibold">
            Next.js + NestJS + MongoDB
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Build Modern
            <span className="text-blue-500"> Social Apps </span>
            Faster
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
            A modern full stack social dashboard powered by Next.js frontend,
            NestJS backend, and MongoDB database with beautiful UI and smooth
            performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/users"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-bold transition shadow-2xl"
            >
              Explore Users
            </Link>

            <Link
              href="/posts"
              className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-bold transition"
            >
              View Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <div className="text-5xl mb-5">⚡</div>
            <h2 className="text-2xl font-bold mb-3">Fast Performance</h2>
            <p className="text-gray-300 leading-relaxed">
              Built using modern Next.js architecture with lightning fast page
              rendering and optimized performance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <div className="text-5xl mb-5">🔐</div>
            <h2 className="text-2xl font-bold mb-3">Secure Backend</h2>
            <p className="text-gray-300 leading-relaxed">
              NestJS backend with scalable APIs and MongoDB integration for real
              world applications.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <div className="text-5xl mb-5">🎨</div>
            <h2 className="text-2xl font-bold mb-3">Modern UI</h2>
            <p className="text-gray-300 leading-relaxed">
              Beautiful dark themed responsive interface designed using modern
              Tailwind CSS styling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
