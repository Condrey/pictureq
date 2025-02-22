import { geistSans } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { WEB_NAME } from "./utils/constants";

export default function Home() {
  return (
    <div className="  w-full h-full flex flex-col justify-center items-center">
      <h1
        className={cn(
          "text-pretty  text-[4.5rem] sm:text[8rem] bg-clip-text bg-no-repeat bg-cover text-transparent bg-hero-pattern lg:text-[15rem] xl:text-[18rem] font-extrabold tracking-tight",
          geistSans.className
        )}
      >
        {WEB_NAME}
      </h1>
      <p className="max-w-prose text-justify  ">
        <cite className="font-bold ">PictureQ</cite> delivers daily Bible quotes
        paired with inspiring visuals, designed to uplift and encourage through
        faith and reflection.
      </p>
    </div>
  );
}
