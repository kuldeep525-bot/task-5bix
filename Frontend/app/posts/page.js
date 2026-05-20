"use client";

import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../users/components/NavBar";

import PostCard from "./components/PostCard";

import CreatePostForm from "./components/CreatePostForm";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await API.get("/posts");

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function likePost(id) {
    try {
      await API.post(`/posts/${id}/like`);

      getPosts();
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
            Posts Dashboard
          </h1>

          <CreatePostForm getPosts={getPosts} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                likePost={likePost}
                getPosts={getPosts}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
