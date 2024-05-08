import { useState } from "react";
import FeedList from "./feed-list";

function FeedContainer() {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<FeedList index={i} key={i} />);
  }

  return (
    <div className="my-3">
      {pages}
      <div className="flex justify-center flex-row">
        <button onClick={() => setCnt(cnt + 1)} className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg my-3">Load More </button>
      </div>
    </div>
  );
}

export default FeedContainer;
