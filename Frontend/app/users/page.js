"use client";

import { useEffect, useState } from "react";

import API from "../services/api";

import UserCard from "./components/UserCard";
import Navbar from "./components/NavBar";
import CreateUserForm from "./components/CreateUserForm";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await API.get("/user");

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await API.delete(`/user/${id}`);

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-10 text-center">
            Users Dashboard
          </h1>

          <CreateUserForm getUsers={getUsers} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user._id} user={user} deleteUser={deleteUser} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
