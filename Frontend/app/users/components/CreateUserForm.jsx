"use client";

import { useState } from "react";

import API from "../../services/api";

export default function CreateUserForm({
  getUsers,
}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function createUser(e) {

    e.preventDefault();

    try {

      await API.post("/user", {
        name,
        email,
        type: "normal",
      });

      setName("");
      setEmail("");

      getUsers();

    } catch (error) {

      console.log(error);
    }
  }

  return (

    <form
      onSubmit={createUser}
      className="bg-white/10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl mb-10 shadow-2xl"
    >

      <h2 className="text-3xl font-bold mb-5">
        Create User
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none"
        />

      </div>

      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
      >

        Create User

      </button>

    </form>
  );
}