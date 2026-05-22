"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navLinkClass = (path, activeColor) =>
    `px-4 sm:px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
      isActive(path)
        ? `${activeColor} text-white shadow-lg`
        : "bg-white/10 hover:bg-white/20 text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/40 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
          <span className="text-blue-500">Social</span>App
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">

          <Link
            href="/users"
            className={navLinkClass("/users", "bg-blue-600")}
          >
            Users
          </Link>

          <Link
            href="/posts"
            className={navLinkClass("/posts", "bg-purple-600")}
          >
            Posts
          </Link>

        </div>
      </div>
    </nav>
  );
}