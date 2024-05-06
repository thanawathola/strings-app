import Link from "next/link";
import Image from "next/image";

function Post({ post, showEditBtn }: { post: PostI; showEditBtn?: boolean }) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const createdAt = new Date(post.created_at);
  return (
    <div className="flex flex-row">
      <div>
        {post.avatar && (
          <Link href={`/${post.username}`}>
            <Image
              src={post.avatar}
              width={50}
              height={50}
              alt={post.username}
              className="rounded-full mr-3"
            />
          </Link>
        )}
        {!post.avatar && (
          <div
            className="bg-slate-600 rounded-full mr-3"
            style={{ width: 50, height: 50 }}
          ></div>
        )}
      </div>
      <div className="flex flex-col max-w-xs">
        <div className="font-bold ">
          <Link href={`/${post.username}`}>{post.username}</Link>
        </div>
        <div className="text-slate-400">
          {createdAt.toLocaleDateString("en-us", options)}
        </div>
        <div>{post.content}</div>
      </div>
      {showEditBtn && (
        <div className="text-right flex-grow text-green-400">
          <Link href={`/profile/edit-post/${post.id}`}>Edit</Link>
        </div>
      )}
    </div>
  );
}

export default Post;
