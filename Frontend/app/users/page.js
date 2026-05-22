// "use client";

// import toast from "react-hot-toast";
// import { useEffect, useState } from "react";

// import API from "../services/api";

// import UserCard from "./components/UserCard";
// import Navbar from "./components/NavBar";
// import CreateUserForm from "./components/CreateUserForm";

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleteLoading, setDeleteLoading] = useState("");

//   useEffect(() => {
//     getUsers();
//   }, []);

//   async function getUsers() {
//     try {
//       setLoading(true);
//       const response = await API.get("/user");

//       setUsers(response.data);
//     } catch (error) {
//       console.log(error);

//       toast.error("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function deleteUser(id) {
//     //give confirmation to delete the user
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this user?",
//     );

//     if (!confirmDelete) return;

//     try {
//       setDeleteLoading(id);

//       await API.delete(`/user/${id}`);

//       toast.success("User deleted successfully");

//       setUsers((prev) => prev.filter((user) => user._id !== id));
//     } catch (error) {
//       console.log(error);

//       toast.error("Failed to delete user");
//     } finally {
//       setDeleteLoading("");
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-5 py-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
//             Users Dashboard
//           </h1>
//           <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
//             Manage users efficiently with a clean and modern dashboard
//             interface.
//           </p>
//           <CreateUserForm getUsers={getUsers} setUsers={setUsers} />

//           {loading ? (
//             // <div className="text-center text-gray-400 mt-10">
//             //   Loading users...
//             // </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-40 bg-white/10 rounded-3xl animate-pulse"
//                 />
//               ))}
//             </div>
//           ) : users.length === 0 ? (
//             <div className="bg-white/10 border border-gray-700 rounded-3xl p-12 text-center shadow-2xl flex flex-col items-center">
//               <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
//                 <span className="text-4xl">👥</span>
//               </div>

//               <h2 className="text-3xl font-bold mb-3 text-white">
//                 No users yet
//               </h2>

//               <p className="text-gray-400 max-w-md leading-relaxed mb-6">
//                 Create your first user to start managing your dashboard with a
//                 clean and modern experience.
//               </p>

//               <button
//                 onClick={() =>
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   })
//                 }
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
//               >
//                 Create First User
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {users.map((user) => (
//                 <UserCard
//                   key={user._id}
//                   user={user}
//                   deleteUser={deleteUser}
//                   deleteLoading={deleteLoading}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//     </>
//   );
// }

"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import API from "../services/api";

import UserCard from "./components/UserCard";
import Navbar from "./components/NavBar";
import CreateUserForm from "./components/CreateUserForm";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      setLoading(true);

      const response = await API.get("/user");

      setUsers(response.data);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) return;

    try {
      setDeleteLoading(id);

      await API.delete(`/user/${id}`);

      setUsers((prev) => prev.filter((user) => user._id !== id));

      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete user");
    } finally {
      setDeleteLoading("");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 sm:px-5 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Users Dashboard
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Manage users efficiently with a clean and modern dashboard
              interface.
            </p>
          </div>

          {/* Create User Form */}
          <CreateUserForm getUsers={getUsers} setUsers={setUsers} />

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 rounded-3xl bg-white/10 animate-pulse"
                />
              ))}
            </div>
          ) : users.length === 0 ? (
            /* Empty State */
            <div className="bg-white/10 border border-gray-700 rounded-3xl p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <span className="text-4xl">👥</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                No users yet
              </h2>

              <p className="text-gray-400 max-w-md leading-relaxed mb-6 text-sm sm:text-base">
                Create your first user to start managing your dashboard with a
                clean and modern experience.
              </p>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Create First User
              </button>
            </div>
          ) : (
            /* Users Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {users.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                  deleteUser={deleteUser}
                  deleteLoading={deleteLoading}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
