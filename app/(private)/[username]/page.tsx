"use client";
import PostContainer from "@/components/post-container";
import UserPageHeader from "./user-page-header";

type Props = {
  params: {
    username: string;
  };
};

export default function UserPage({ params }: Props) {
  return (
    <div>
      <UserPageHeader username={params.username} />
      <PostContainer username={params.username}  />
    </div>
  );
}
