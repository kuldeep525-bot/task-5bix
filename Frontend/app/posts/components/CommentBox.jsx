"use client";

import { useState } from "react";

import API from "../../services/api";

export default function CommentBox({
  postId,
  getPosts,
}) {

  const [comment, setComment] =
    useState("");

  async function addComment() {

    if (!comment) return;

    try {

      await API.post(
        `/posts/${postId}/comment`,
        {
          comment,
        }
      );

      setComment("");

      getPosts();

    } catch (error) {

      console.log(error);
    }
  }

  return (

    <div className="mt-5">

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Write comment..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          className="flex-1 bg-black/30 border border-gray-700 rounded-xl p-3 outline-none"
        />

        <button
          onClick={addComment}
          className="bg-green-600 hover:bg-green-700 px-5 rounded-xl font-semibold transition"
        >

          Send

        </button>

      </div>

    </div>
  );
}