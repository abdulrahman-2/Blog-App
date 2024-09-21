import Image from "next/image";
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/actions";
import EditPost from "../editPost/EditPost";

const AdminPosts = async ({ userId }) => {
  const posts = await getPosts();

  return (
    <div className="flex-1">
      <h1 className="text-3xl text-white font-bold mb-10">Posts</h1>
      {posts.map((post) => (
        <div
          className="flex items-center justify-between g-5 my-5"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={post.img || "/noAvatar.png"}
                alt="Avatar"
                fill
                className="rounded-xl"
              />
            </div>
            <span className="text-xl font-semibold">{post.title}</span>
          </div>
          <div className="flex items-center gap-5">
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className="py-[5px] px-[10px] text-text bg-[#F70E0D] font-bold rounded-md border-none">
                Delete
              </button>
            </form>
            <EditPost post={post} userId={userId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
