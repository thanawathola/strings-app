import { useState } from "react";
import PostList from "./post-list";

function PostContainer({
  username,
  showEditBtn,
}: {
  username: string;
  showEditBtn?: boolean;
}) {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(
      <PostList
        index={i}
        username={username}
        key={i}
        showEditBtn={showEditBtn}
      />
    );
  }

  return (
    <div className="my-5">
      {pages}
      <div className="flex flex-row justify-center">
        <button
          onClick={() => setCnt(cnt + 1)}
          className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg my-5"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default PostContainer;
