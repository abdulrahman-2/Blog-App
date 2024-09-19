import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

// fetch data with api
// const getPost = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await res.json();

//   return data;
// };

// fetch data without api

const Post = async ({ params }) => {
  const { slug } = params;

  // fetch data with api
  // const post = await getPost(slug);

  // fetch data without api
  const post = await getPost(slug);

  return (
    <div className="my-10 flex flex-col lg:flex-row gap-[50px] md:gap-[100px]">
      <div className="rounded-md overflow-hidden relative lg:flex-1 w-full h-[350px] md:h-[500px] lg:h-[calc(100vh-200px)]">
        {post.img && (
          <Image
            src={post.img}
            alt="Post image"
            fill
            priority
            // className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-10 flex-[2]">
        <h1 className="text-6xl font-bold">{post?.title}</h1>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser postId={post?.userId} createdAt={post?.createdAt} />
          </Suspense>
        )}
        <span className="text-gray-300 font-bold">{post?.desc}</span>
      </div>
    </div>
  );
};

export default Post;
