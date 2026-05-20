// // ```jsx
// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   async function getUsers() {
//     try {
//       const response = await axios.get("http://localhost:5000/user");

//       setUsers(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl md:text-6xl font-bold mb-3">
//             Social Media Dashboard
//           </h1>

//           <p className="text-gray-300 text-lg">NestJS + Next.js + MongoDB</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {users.map((user) => (
//             <div
//               key={user._id}
//               className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-2xl"
//             >
//               <div className="flex items-center gap-4 mb-5">
//                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
//                   {user.name.charAt(0).toUpperCase()}
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold">{user.name}</h2>

//                   <p className="text-gray-300 text-sm">{user.type}</p>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <p className="text-gray-200 break-all">{user.email}</p>

//                 <div className="flex items-center justify-between mt-5">
//                   <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition">
//                     View Profile
//                   </button>

//                   <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold transition">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
// // ```;

export default function Home() {
  return <div>Home Page</div>;
}
