// "use client";
// import toast from "react-hot-toast";
// import { useEffect, useState } from "react";

// import API from "../services/api";

// import UserCard from "./components/UserCard";
// import Navbar from "./components/NavBar";
// import CreateUserForm from "./components/CreateUserForm";

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [deleteLoading, setDeleteLoading] = useState("");

//   useEffect(() => {
//     getUsers();
//   }, []);

//   async function getUsers() {
//     try {
//       const response = await API.get("/user");

//       setUsers(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function deleteUser(id) {
//     try {
//       setDeleteLoading(id);
//       await API.delete(`/user/${id}`);

//       toast.success("User deleted successfully");

//       getUsers();

//       setDeleteLoading("");
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to delete user");

//       setDeleteLoading("");
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl font-bold mb-10 text-center">
//             Users Dashboard
//           </h1>

//           <CreateUserForm getUsers={getUsers} />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {users.map((user) => (
//               <UserCard
//                 key={user._id}
//                 user={user}
//                 deleteUser={deleteUser}
//                 deleteLoading={deleteLoading}
//               />
//             ))}
//           </div>
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
  const [deleteLoading, setDeleteLoading] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await API.get("/user");

      setUsers(response.data);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch users");
    }
  }

  async function deleteUser(id) {
    try {
      setDeleteLoading(id);

      await API.delete(`/user/${id}`);

      toast.success("User deleted successfully");

      getUsers();

      setDeleteLoading("");
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete user");

      setDeleteLoading("");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
            Users Dashboard
          </h1>

          <CreateUserForm getUsers={getUsers} />

          {users.length === 0 ? (
            <div className="bg-white/10 border border-gray-700 rounded-3xl p-10 text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-3">No Users Found</h2>

              <p className="text-gray-400">
                Create your first user to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
