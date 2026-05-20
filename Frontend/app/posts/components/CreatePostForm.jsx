"use client";

import { useEffect, useState } from "react";

import API from "../../services/api";

export default function CreatePostForm({
  getPosts,
}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {

    getUsers();

  }, []);

  async function getUsers() {

    try {

      const response = await API.get(
        "/user"
      );

      setUsers(response.data);

    } catch (error) {

      console.log(error);
    }
  }

  async function createPost(e) {

    e.preventDefault();

    try {

      await API.post("/posts", {
        title,
        content,
        user,
      });

      setTitle("");
      setContent("");
      setUser("");

      getPosts();

    } catch (error) {

      console.log(error);
    }
  }

  return (

    <form
      onSubmit={createPost}
      className="bg-white/10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl mb-10 shadow-2xl"
    >

      <h2 className="text-3xl font-bold mb-5">

        Create Post

      </h2>

      <div className="grid grid-cols-1 gap-5">

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none"
        />

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none h-32"
        />

        <select
          value={user}
          onChange={(e) =>
            setUser(e.target.value)
          }
          className="bg-black/30 border border-gray-700 rounded-xl p-4 outline-none"
        >

          <option value="">
            Select User
          </option>

          {users.map((user) => (

            <option
              key={user._id}
              value={user._id}
            >

              {user.name}

            </option>

          ))}

        </select>

      </div>

      <button
        type="submit"
        className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition"
      >

        Create Post

      </button>

    </form>
  );
}