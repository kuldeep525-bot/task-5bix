// "use client";

// import API from "../../services/api";

// import CommentBox from "./CommentBox";

// export default function PostCard({
//   post,
//   likePost,
//   setPosts,
//   likeLoading,
// }) {

//   async function deleteComment(postId, index) {

//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this comment?"
//     );

//     if (!confirmDelete) return;

//     try {

//       const res = await API.post(
//         `/posts/${postId}/comment/delete`,
//         { index }
//       );

//       const updatedPost = res.data;

//       setPosts((prev) =>
//         prev.map((p) =>
//           p._id === postId
//             ? updatedPost
//             : p
//         )
//       );

//     } catch (error) {

//       console.log(error);

//     }
//   }

//   return (
//     <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40">

//       {/* Top Section */}
//       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">

//         <div className="flex items-center gap-3">

//           {/* Avatar */}
//           <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-lg shadow-lg">

//             {post.user?.name?.charAt(0)?.toUpperCase()}

//           </div>

//           <div>

//             <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
//               {post.title}
//             </h2>

//             <p className="text-gray-400 text-sm mt-1">
//               Posted by {post.user?.name}
//             </p>

//           </div>

//         </div>

//         {/* Likes Count */}
//         <div className="bg-pink-600 px-4 py-2 rounded-2xl text-white font-semibold shadow-lg whitespace-nowrap">

//           ❤️ {post.likes}

//         </div>

//       </div>

//       {/* Content */}
//       <div className="bg-black/20 border border-gray-800 rounded-2xl p-4 mb-6">

//         <p className="text-gray-200 leading-7 break-words text-sm sm:text-base">
//           {post.content}
//         </p>

//       </div>

//       {/* Like Button */}
//       <button
//         onClick={() =>
//           likePost(post._id)
//         }
//         disabled={
//           likeLoading === post._id
//         }
//         className={`min-h-[48px] w-full sm:w-auto py-3 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
//           post.isLiked
//             ? "bg-red-600 hover:bg-red-700"
//             : "bg-blue-600 hover:bg-blue-700"
//         } disabled:bg-gray-600 disabled:cursor-not-allowed`}
//       >

//         {likeLoading === post._id ? (
//           <>
//             <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
//             Loading...
//           </>
//         ) : post.isLiked ? (
//           "💔 Unlike"
//         ) : (
//           "❤️ Like"
//         )}

//       </button>

//       {/* Comments */}
//       <div className="mt-6">

//         <h3 className="text-lg font-semibold mb-4">
//           Comments
//         </h3>

//         {post.comments?.length === 0 ? (

//           <div className="bg-black/20 border border-gray-800 rounded-2xl p-4 text-center">

//             <p className="text-gray-500">
//               No comments yet
//             </p>

//           </div>

//         ) : (

//           <div className="space-y-3 max-h-72 overflow-y-auto pr-1">

//             {(post.comments || []).map((comment, index) => (

//               <div
//                 key={index}
//                 className="flex justify-between items-start bg-black/30 border border-gray-800 p-4 rounded-2xl text-gray-200 gap-3"
//               >

//                 <p className="break-words flex-1">
//                   {comment}
//                 </p>

//                 <button
//                   onClick={() =>
//                     deleteComment(post._id, index)
//                   }
//                   className="text-red-400 hover:text-red-500 text-sm font-medium whitespace-nowrap transition"
//                 >
//                   Delete
//                 </button>

//               </div>

//             ))}

//           </div>

//         )}

//         {/* Comment Box */}
//         <CommentBox
//           postId={post._id}
//           setPosts={setPosts}
//         />

//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import API from "../../services/api";

import CommentBox from "./CommentBox";

export default function PostCard({
  post,
  likePost,
  setPosts,
  likeLoading,
}) {

  const [deleteLoading, setDeleteLoading] =
    useState("");

  async function deleteComment(postId, index) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (!confirmDelete) return;

    try {

      setDeleteLoading(index);

      const res = await API.post(
        `/posts/${postId}/comment/delete`,
        { index }
      );

      const updatedPost = res.data;

      setPosts((prev) =>
        prev.map((p) =>
          p._id === postId
            ? updatedPost
            : p
        )
      );

      toast.success("Comment deleted");

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to delete comment"
      );

    } finally {

      setDeleteLoading("");
    }
  }

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">

        <div className="flex items-start gap-4">

          {/* Avatar */}
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">

            {post.user?.name?.charAt(0)?.toUpperCase()}

          </div>

          <div>

            <h2 className="text-xl sm:text-2xl font-bold text-white break-words">

              {post.title}

            </h2>

            <p className="text-gray-400 text-sm mt-1">

              Posted by{" "}
              <span className="text-white font-medium">
                {post.user?.name}
              </span>

            </p>

          </div>

        </div>

        {/* Likes */}
        <div className="bg-pink-600 px-4 py-2 rounded-2xl text-white font-semibold shadow-lg whitespace-nowrap text-center">

          ❤️ {post.likes}

        </div>

      </div>

      {/* Content */}
      <div className="bg-black/20 border border-gray-800 rounded-2xl p-4 mb-6">

        <p className="text-gray-200 leading-7 break-words text-sm sm:text-base">

          {post.content}

        </p>

      </div>

      {/* Like Button */}
      <button
        onClick={() =>
          likePost(post._id)
        }
        disabled={
          likeLoading === post._id
        }
        className={`min-h-[48px] w-full sm:w-auto py-3 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
          post.isLiked
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        } disabled:bg-gray-600 disabled:cursor-not-allowed`}
      >

        {likeLoading === post._id ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>

            Loading...
          </>
        ) : post.isLiked ? (
          "💔 Unlike"
        ) : (
          "❤️ Like"
        )}

      </button>

      {/* Comments Section */}
      <div className="mt-6">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-lg font-semibold">

            Comments
          </h3>

          <span className="text-sm text-gray-400">

            {post.comments?.length || 0} Total

          </span>

        </div>

        {post.comments?.length === 0 ? (

          <div className="bg-black/20 border border-gray-800 rounded-2xl p-5 text-center">

            <p className="text-gray-500">

              No comments yet

            </p>

            <p className="text-gray-600 text-sm mt-1">

              Be the first to comment.

            </p>

          </div>

        ) : (

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">

            {(post.comments || []).map((comment, index) => (

              <div
                key={index}
                className="bg-black/30 border border-gray-800 p-4 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/40"
              >

                <div className="flex justify-between items-start gap-3">

                  <div className="flex gap-3 flex-1">

                    {/* Comment Avatar */}
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-sm font-bold text-white shrink-0">

                      U

                    </div>

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-2 mb-1">

                        <p className="font-semibold text-white text-sm">

                          User

                        </p>

                        <span className="text-xs text-gray-500">

                          Just now

                        </span>

                      </div>

                      <p className="text-gray-200 break-words text-sm leading-6">

                        {comment}

                      </p>

                    </div>

                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() =>
                      deleteComment(
                        post._id,
                        index
                      )
                    }
                    disabled={
                      deleteLoading === index
                    }
                    className="text-red-400 hover:text-red-500 text-sm font-medium whitespace-nowrap transition disabled:opacity-50"
                  >

                    {deleteLoading === index
                      ? "Deleting..."
                      : "Delete"}

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Comment Input */}
        <CommentBox
          postId={post._id}
          setPosts={setPosts}
        />

      </div>

    </div>
  );
}