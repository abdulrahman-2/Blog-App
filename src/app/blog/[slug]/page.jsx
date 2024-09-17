import Image from "next/image";

const Post = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row gap-[50px] md:gap-[100px]">
      <div className="rounded-md overflow-hidden relative lg:flex-1 w-full h-[350px] md:h-[500px] lg:h-[calc(100vh-200px)]">
        <Image
          src="/noavatar.png"
          alt="Post image"
          fill
          priority
          // className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 flex-[2]">
        <h1 className="text-6xl font-bold">Title</h1>
        <div className="flex items-center gap-5">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
            <Image src="/noavatar.png" alt="Author avatar" fill priority />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500 font-bold text-[14px]">
              Published by
            </span>
            <span>Author Name</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500 font-bold text-[14px]">Date</span>
            <span>Sept 17, 2024</span>
          </div>
        </div>
        <span className="text-gray-300 font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          dolore nobis nam vel quibusdam non eligendi sed magni illum, sapiente
          quae obcaecati? Eius adipisci magnam suscipit minima odit ipsum
          consectetur.
        </span>
      </div>
    </div>
  );
};

export default Post;
