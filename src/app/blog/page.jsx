import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "Next.js Blog description",
};

// fetch data with api
// const getPosts = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// fetch data without api

const Blog = async () => {
  // Fetch data with API
  // const posts = await getPosts();

  // Fetch data without API
  const posts = await getPosts();

  return (
    <>
      {posts.length > 0 ? (
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center text-5xl font-bold">
          Blog Is Empty
        </div>
      )}
    </>
  );
};

export default Blog;
