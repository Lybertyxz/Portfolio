import TextBox from "./components/TextBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid-background h-screen flex flex-col justify-center items-center overflow-hidden relative">
        <Image
          className=" rounded"
          src="/profile.jpg"
          width={130}
          height={130}
          alt="My profile picture"
        />
        <div>
          <TextBox
            text="Hugo Maltese"
            style="text-white font-custom text-9xl"
            animation={2}
          />
          <div className="flex items-end">
            <TextBox
              text="Software developper"
              style="text-white font-custom text-5xl"
              animation={1}
            />
            <span className="ml-1 mb-2 h-[1.5rem] w-[0.2rem] bg-white animate-blink" />
          </div>
        </div>
      </div>
      <div className="h-screen bg-[url('/path/to/your/image.jpg')] bg-cover flex justify-center items-center">
        <p className="text-white">Section 2</p>
      </div>
    </div>
  );
}
