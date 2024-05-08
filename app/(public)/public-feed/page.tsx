import Post from "@/components/post";
import { sql } from "@/db";

async function getData() {
  const res = await sql(
    `select p.* ,u.avatar ,u.username from posts p inner join users u
        on p.user_id = u.id order by created_at desc limit 10`
  );
  return res.rows;
}

export default async function PublicFeed() {
  const posts = await getData();
  //   console.log(posts)
  //   return <></>
  return (
    <main>
      <div>
        <h1>Strings</h1>
        <div>
          <h2>Recent Post From the Community</h2>
          {posts.map((post, i) => {
            return <Post key={`post-${i}`} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
}
