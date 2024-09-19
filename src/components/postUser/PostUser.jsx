import { getUser } from "@/lib/data";
import Image from "next/image";

// fetch data without api
const PostUser = async ({ postId, createdAt }) => {
  const user = await getUser(postId);

  // Format the date nicely (optional)
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(createdAt));

  return (
    <div className="flex items-center gap-5">
      <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
        <Image
          src={user?.img || "/noavatar.png"}
          alt="Author avatar"
          fill
          priority
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-500 font-bold text-[14px]">Author</span>
        <span>{user?.username || "Unknown User"}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-500 font-bold text-[14px]">Date</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default PostUser;
