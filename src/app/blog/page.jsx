import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// fetch data with api
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const data = await res.json();

//   return data;
// };

// fetch data without api

const Blog = async () => {
  // fetch data with api
  // const posts = await getPosts();

  // fetch data without api
  const posts = await getPosts();
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
