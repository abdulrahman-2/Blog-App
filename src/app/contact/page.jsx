import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Next.js Contact description",
};

const Contact = () => {
  return (
    <div className="mb-10 flex flex-col lg:flex-row items-center md:gap-[100px]">
      <div className="w-full lg:flex-1 relative h-[500px]">
        <Image
          src="/contact.png"
          alt="contact"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="w-full lg:flex-1">
        <form action="" className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="w-full p-3 border-none outline-none rounded-md bg-bgSoft text-text"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 border-none outline-none rounded-md bg-bgSoft text-text"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="w-full p-3 border-none outline-none rounded-md bg-bgSoft text-text"
          />
          <textarea
            name="textarea"
            id="textarea"
            className="w-full h-[150px] resize-none p-3 border-none outline-none rounded-md bg-bgSoft text-text"
          ></textarea>
          <button className="p-3 w-full font-bold border-none rounded-md text-text cursor-pointer bg-btn transition-all hover:bg-btnHover">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
