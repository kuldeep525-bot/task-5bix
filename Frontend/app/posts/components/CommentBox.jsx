
// // "use client";

// // import { useState } from "react";
// // import toast from "react-hot-toast";

// // import API from "../../services/api";

// // export default function CommentBox({
// //   postId,
// //    setPosts,
// // }) {

// //   const [comment, setComment] =
// //     useState("");

// //   const [loading, setLoading] =
// //     useState(false);

// //   async function addComment() {

// //     // prevent double click
// //     if (loading) return;

// //     // validation
// //     if (!comment.trim().replace(/\s+/g, "")) {
// //       toast.error("Comment cannot be empty");
// //       return;
// //     }

// //     try {

// //       setLoading(true);

// //       await API.post(
// //         `/posts/${postId}/comment`,
// //         {
// //           comment,
// //         }
// //       );

// //       setComment("");

// //       setPosts((prev) =>
// //   prev.map((post) =>
// //     post._id === postId
// //       ? {
// //           ...post,
// //           comments: [
// //             ...post.comments,
// //             comment,
// //           ],
// //         }
// //       : post
// //   )
// // );

// //       toast.success(
// //         "Comment added"
// //       );

// //     } catch (error) {

// //       console.log(error);

// //       toast.error(
// //         "Failed to add comment"
// //       );

// //     } finally {

// //       setLoading(false);
// //     }
// //   }

// //   return (

// //     <div className="mt-5">

// //       <div className="flex flex-col sm:flex-row gap-3">

// //         <input
// //           type="text"
// //           placeholder="Write comment..."
// //           value={comment}
// //           onChange={(e) =>
// //             setComment(e.target.value)
// //           }
// //           className="flex-1 bg-black/30 border border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
// //         />

// //         <button
// //           onClick={addComment}
// //           disabled={loading}
// //           className="min-h-[48px] sm:min-w-[120px] bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
// //         >

// //           {loading ? (
// //             <>
// //               <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
// //               Adding...
// //             </>
// //           ) : (
// //             "Send"
// //           )}

// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import toast from "react-hot-toast";
// import API from "../../services/api";

// export default function CommentBox({ postId, setPosts }) {
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function addComment() {
//     if (loading) return;

//     if (!comment.trim().replace(/\s+/g, "")) {
//       toast.error("Comment cannot be empty");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await API.post(`/posts/${postId}/comment`, {
//         comment,
//       });

//       // fallback safe comment
//       const newComment = res.data?.comment || comment;

//       // ✅ SAFE + CLEAN OPTIMISTIC UPDATE
//       setPosts((prev) =>
//         prev.map((post) =>
//           post._id === postId
//             ? {
//                 ...post,
//                 comments: [
//                   ...(post.comments || []),
//                   newComment,
//                 ],
//               }
//             : post
//         )
//       );

//       setComment("");
//       toast.success("Comment added");
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to add comment");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="mt-5">
//       <div className="flex flex-col sm:flex-row gap-3">
//         <input
//           type="text"
//           placeholder="Write comment..."
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="flex-1 bg-black/30 border border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
//         />

//         <button
//           onClick={addComment}
//           disabled={loading}
//           className="min-h-[48px] sm:min-w-[120px] bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
//         >
//           {loading ? (
//             <>
//               <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
//               Adding...
//             </>
//           ) : (
//             "Send"
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import API from "../../services/api";

export default function CommentBox({
  postId,
  setPosts,
}) {

  const [comment, setComment] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function addComment() {

    // prevent double click
    if (loading) return;

    // remove extra spaces
    const trimmedComment =
      comment.trim();

    // validation
    if (!trimmedComment) {

      toast.error(
        "Comment cannot be empty"
      );

      return;
    }

    try {

      setLoading(true);

      const response = await API.post(
        `/posts/${postId}/comment`,
        {
          comment: trimmedComment,
        }
      );

      const updatedPost =
        response.data;

      // optimistic UI update
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId
            ? updatedPost
            : post
        )
      );

      setComment("");

      toast.success(
        "Comment added successfully"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to add comment"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="mt-5">

      <div className="flex flex-col sm:flex-row gap-3">

        {/* Input */}
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          disabled={loading}
          onChange={(e) =>
            setComment(e.target.value)
          }
          className="flex-1 bg-black/30 border border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-60 text-white placeholder:text-gray-500"
        />

        {/* Button */}
        <button
          onClick={addComment}
          disabled={loading}
          className="min-h-[48px] sm:min-w-[130px] bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white"
        >

          {loading ? (
            <>
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>

              Sending...
            </>
          ) : (
            "Send"
          )}

        </button>

      </div>

    </div>
  );
}