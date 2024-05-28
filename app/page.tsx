import Content from "./components/content";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.10] bg-grid-black/[0.10] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-7"></div>
      <div
        className={cn(
          "w-1/2 lg:w-1/3 h-52",
          "bg-green-400",
          "absolute",
          "blur-[160px]",
        )}
      ></div>
      <Content />
    </div>
  );
}
