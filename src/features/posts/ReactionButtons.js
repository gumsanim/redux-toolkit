import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import React from "react";

const reactionEmoji = {
  thumbsUp: "thumb",
  wow: "wow",
  heart: "heart",
  rocket: "rocket",
  coffee: "coffee",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type={"button"}
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
