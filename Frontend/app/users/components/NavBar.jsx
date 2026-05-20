// export default function Navbar() {

//   return (

//     <nav className="bg-black/30 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">

//       <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

//         <h1 className="text-2xl font-bold text-white">
//           Social App
//         </h1>

//         <div className="flex items-center gap-4">

//           <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white font-semibold transition">

//             Users

//           </button>

//           <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-white font-semibold transition">

//             Posts

//           </button>

//         </div>

//       </div>

//     </nav>
//   );
// }

"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="bg-black/30 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          Social App
        </h1>

        <div className="flex items-center gap-4">

          <Link href="/users">

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white font-semibold transition">

              Users

            </button>

          </Link>

          <Link href="/posts">

            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-white font-semibold transition">

              Posts

            </button>

          </Link>

        </div>

      </div>

    </nav>
  );
}