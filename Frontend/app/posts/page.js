// "use client";

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import API from "../services/api";

// import Navbar from "../users/components/NavBar";

// import PostCard from "./components/PostCard";

// import CreatePostForm from "./components/CreatePostForm";

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [likeLoading, setLikeLoading] = useState("");

//   useEffect(() => {
//     getPosts();
//   }, []);

//   async function getPosts() {
//     try {
//       const response = await API.get("/posts");

//       setPosts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function likePost(id) {
//     try {
//       setLikeLoading(id);
//       await API.post(`/posts/${id}/like`);
//       toast.success("Post liked");
//       getPosts();
//       setLikeLoading("");
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to like post");

//       setLikeLoading("");
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl font-bold mb-10 text-center">
//             Posts Dashboard
//           </h1>

//           <CreatePostForm getPosts={getPosts} />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {posts.map((post) => (
//               <PostCard
//                 key={post._id}
//                 post={post}
//                 likePost={likePost}
//                 getPosts={getPosts}
//                 likeLoading={likeLoading}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../services/api";

import Navbar from "../users/components/NavBar";

import PostCard from "./components/PostCard";

import CreatePostForm from "./components/CreatePostForm";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [likeLoading, setLikeLoading] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await API.get("/posts");

      setPosts(response.data);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch posts");
    }
  }

  async function likePost(id) {
    try {
      setLikeLoading(id);

      await API.post(`/posts/${id}/like`);

      toast.success("Post liked");

      getPosts();

      setLikeLoading("");
    } catch (error) {
      console.log(error);

      toast.error("Failed to like post");

      setLikeLoading("");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
            Posts Dashboard
          </h1>

          <CreatePostForm getPosts={getPosts} />

          {posts.length === 0 ? (
            <div className="bg-white/10 border border-gray-700 rounded-3xl p-10 text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-3">No Posts Found</h2>

              <p className="text-gray-400">
                Create your first post to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  likePost={likePost}
                  getPosts={getPosts}
                  likeLoading={likeLoading}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
