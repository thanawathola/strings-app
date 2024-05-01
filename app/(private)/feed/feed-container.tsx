import { useState } from "react";
import FeedList from "./feed-list";

function FeedContainer() {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<FeedList index={i} key={i} />);
  }

  return (
    <div>
      {pages}
      <div className="flex justify-center pt-3">
        <button onClick={() => setCnt(cnt + 1)} className="bg-slate-900 p-2 rounded-lg">Load More </button>
      </div>
    </div>
  );
}

export default FeedContainer;
