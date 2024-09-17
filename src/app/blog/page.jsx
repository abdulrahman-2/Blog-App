import PostCard from "@/components/postCard/PostCard";

const Blog = () => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Blog;
