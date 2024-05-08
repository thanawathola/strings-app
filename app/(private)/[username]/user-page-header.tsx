import { notFound } from "next/navigation";
import useSWR, { mutate } from "swr";

type Props = {
  username: string;
};

export default function UserPageHeader({ username }: Props) {
  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR("/api/users?username=" + username);

  const {
    data: dataFollow,
    error: errorFollow,
    isLoading: isLoadingFollow,
  } = useSWR(() => "/api/follows?user_id=" + dataUser.data[0].id);

  if (errorFollow || errorUser) return <div>failed to load </div>;
  if (isLoadingFollow || isLoadingUser) return <div>loading ...</div>;

  console.log(dataUser, dataFollow);

  if (dataUser.data.length == 0) {
    notFound();
  }

  const user = dataUser.data[0];

  async function handleFollow() {
    const res = await fetch("/api/follows", {
      method: "POST",
      body: JSON.stringify({ user_id: user.id }),
    });
    if (res.ok) {
      mutate("/api/follows?user_id=" + user.id);
    }
  }
  async function handleUnfollow() {
    const res = await fetch("/api/follows/" + user.id, {
      method: "DELETE",
    });
    if (res.ok) {
      mutate("/api/follows?user_id=" + user.id);
    }
  }

  return (
    <header className="w-full dark:bg-slate-800 bg-slate-300 p-2 rounded-lg flex flex-row justify-between">
      <h1 className="text-lg font-bold">{username}</h1>
      {dataFollow.data.length > 0 && (
        <button
          onClick={handleUnfollow}
          className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg"
        >
          Unfollow
        </button>
      )}
      {dataFollow.data.length == 0 && (
        <button onClick={handleFollow} className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg">
          Follow
        </button>
      )}
    </header>
  );
}
