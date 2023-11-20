import TextBox from "./components/TextBox";

export default function Home() {
  return (
    <div className="grid-background h-screen flex justify-center items-center">
      <div className="">
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
          <span className="ml-1 h-[1rem] w-[0.2rem] bg-white animate-blink" />
        </div>
      </div>
    </div>
  );
}
