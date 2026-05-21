// import CommentBox from "./CommentBox";

// export default function PostCard({
//   post,
//   likePost,
//   getPosts,
//    likeLoading,
// }) {

//   return (

//     <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition duration-300">

//       <div className="flex items-center justify-between mb-4">

//         <div>

//           <h2 className="text-2xl font-bold text-white">
//             {post.title}
//           </h2>

//           <p className="text-gray-400 text-sm">
//             {post.user?.name}
//           </p>

//         </div>

//         <div className="bg-pink-600 px-4 py-2 rounded-xl text-white font-semibold">

//           ❤️ {post.likes}

//         </div>

//       </div>

//       <p className="text-gray-200 leading-7 mb-5">

//         {post.content}

//       </p>

//      <button
//   onClick={() =>
//     likePost(post._id)
//   }
//   disabled={
//     likeLoading === post._id
//   }
//   className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 px-5 py-2 rounded-xl font-semibold transition"
// >

//   {likeLoading === post._id
//     ? "Liking..."
//     : "Like Post"}

// </button>

//       <div className="mt-5">

//         <h3 className="text-lg font-semibold mb-3">

//           Comments

//         </h3>

//         <div className="space-y-2">

//           {post.comments?.map(
//             (comment, index) => (

//               <div
//                 key={index}
//                 className="bg-black/30 p-3 rounded-xl text-gray-200"
//               >

//                 {comment}

//               </div>

//             )
//           )}

//         </div>

//         <CommentBox
//           postId={post._id}
//           getPosts={getPosts}
//         />

//       </div>

//     </div>
//   );
// }


import CommentBox from "./CommentBox";

export default function PostCard({
  post,
  likePost,
  getPosts,
  likeLoading,
}) {

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition duration-300">

      <div className="flex items-center justify-between mb-4">

        <div>

          <h2 className="text-2xl font-bold text-white">

            {post.title}

          </h2>

          <p className="text-gray-400 text-sm">

            {post.user?.name}

          </p>

        </div>

        <div className="bg-pink-600 px-4 py-2 rounded-xl text-white font-semibold">

          ❤️ {post.likes}

        </div>

      </div>

      <p className="text-gray-200 leading-7 mb-5">

        {post.content}

      </p>

      <button
        onClick={() =>
          likePost(post._id)
        }
        disabled={
          likeLoading === post._id
        }
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 px-5 py-2 rounded-xl font-semibold transition"
      >

        {likeLoading === post._id
          ? "Liking..."
          : "Like Post"}

      </button>

      <div className="mt-5">

        <h3 className="text-lg font-semibold mb-3">

          Comments

        </h3>

        {post.comments?.length === 0 && (

          <p className="text-gray-500">

            No comments yet

          </p>

        )}

        <div className="space-y-2">

          {post.comments?.map(
            (comment, index) => (

              <div
                key={index}
                className="bg-black/30 p-3 rounded-xl text-gray-200"
              >

                {comment}

              </div>

            )
          )}

        </div>

        <CommentBox
          postId={post._id}
          getPosts={getPosts}
        />

      </div>

    </div>
  );
}