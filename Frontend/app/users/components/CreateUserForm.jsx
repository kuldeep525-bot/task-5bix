"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";

export default function CreateUserForm({ getUsers,setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function createUser(e) {
    e.preventDefault();

    // prevent double submit
    if (loading) return;

    // validation
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both Name and Email");
      return;
    }

    try {
      setLoading(true);

     const response= await API.post("/user", {
        name,
        email,
        type: "normal",
      });

      setName("");
      setEmail("");

      setUsers((prev) => [response.data, ...prev]);

      toast.success("User created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={createUser}
      className="bg-white/10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl mb-10 shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-5">Create User</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <button
  type="submit"
  disabled={loading}
  className="mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
      Creating...
    </>
  ) : (
    "Create User"
  )}
</button>
    </form>
  );
}