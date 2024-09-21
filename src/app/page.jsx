import Image from "next/image";

const Home = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row text-center md:text-left md:gap-[100px]">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-[64px] md:text-[96px] font-bold leading-[1.1]">
          Creative Thoughts Agency.
        </h1>
        <p className="text-[18px] md:text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-5">
          <button
            className="bg-btn p-3 md:p-4 rounded-md font-medium border-none min-w-[120px] cursor-pointer transition-all hover:bg-btnHover"
            aria-label="Learn more about Creative Thoughts Agency"
          >
            Learn More
          </button>
          <button
            className="bg-white text-black p-3 md:p-4 rounded-md font-medium border-none min-w-[120px] cursor-pointer transition-all hover:bg-gray-200"
            aria-label="Contact Creative Thoughts Agency"
          >
            Contact
          </button>
        </div>
        <div className="relative w-full md:w-[500px] h-[50px] grayscale-[1]">
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative w-full h-[500px] lg:h-auto lg:flex-1">
        <Image
          src="/hero.gif"
          alt="hero"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default Home;
