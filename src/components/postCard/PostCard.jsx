import Image from "next/image";
import Link from "next/link";
import React from "react";

const postCard = ({ post }) => {
  // Format the date nicely (optional)
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.createdAt));

  return (
    <div className="bg-bg h-auto overflow-hidden rounded-lg shadow-sm shadow-white">
      <div className="relative h-[350px] lg:h-[400px]">
        <Image src={post.img} alt="avatar" fill priority className="" />
      </div>
      <div className="flex flex-col gap-4 text-text p-5">
        <span className="date ml-auto">{formattedDate}</span>
        <h2 className="postTitle text-2xl font-bold">{post.title}</h2>
        <span className="desc text-gray-300">{post.desc}</span>
        <Link href={`/blog/${post.slug}`} className=" underline">
          Reed More
        </Link>
      </div>
    </div>
  );
};

export default postCard;
