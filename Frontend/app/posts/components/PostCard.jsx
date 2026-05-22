import CommentBox from "./CommentBox";

export default function PostCard({
  post,
  likePost,
  getPosts,
  likeLoading,
}) {

  return (
   <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">

        <div>

          <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
            {post.title}
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Posted by {post.user?.name}
          </p>

        </div>

        <div className="bg-pink-600 px-4 py-2 rounded-2xl text-white font-semibold shadow-lg whitespace-nowrap">

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
        className="min-h-[48px] w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed active:scale-95 py-3 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
      >

        {likeLoading === post._id ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            Liking...
          </>
        ) : (
          "Like Post"
        )}

      </button>

      {/* Comments */}
      <div className="mt-6">

        <h3 className="text-lg font-semibold mb-4">
          Comments
        </h3>

        {post.comments?.length === 0 ? (

          <div className="bg-black/20 border border-gray-800 rounded-2xl p-4 text-center">

            <p className="text-gray-500">
              No comments yet
            </p>

          </div>

        ) : (

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">

            {post.comments?.map(
              (comment, index) => (

                <div
                  key={index}
                  className="bg-black/30 border border-gray-800 p-4 rounded-2xl text-gray-200 break-words"
                >

                  {comment}

                </div>

              )
            )}

          </div>

        )}

        <CommentBox
          postId={post._id}
          getPosts={getPosts}
        />

      </div>

    </div>
  );
}