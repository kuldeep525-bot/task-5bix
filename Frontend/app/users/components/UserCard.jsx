export default function UserCard({
  user,
  deleteUser,
   deleteLoading,
}) {

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-2xl">

      <div className="flex items-center gap-4 mb-5">

        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">

          {user.name.charAt(0).toUpperCase()}

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            {user.name}
          </h2>

          <p className="text-gray-300 text-sm">
            {user.type}
          </p>

        </div>

      </div>

      <p className="text-gray-200 break-all mb-5">
        {user.email}
      </p>

      <div className="flex items-center justify-between">

        <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 px-4 py-2 rounded-xl font-semibold transition">

          View Profile

        </button>

        <button
  onClick={() =>
    deleteUser(user._id)
  }
  disabled={
    deleteLoading === user._id
  }
  className="bg-red-600 hover:bg-red-700 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed px-4 py-2 rounded-xl font-semibold transition"
>

  {deleteLoading === user._id ? (
  <>
    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
    Deleting...
  </>
) : (
  "Delete"
)}

</button>

      </div>

    </div>
  );
}