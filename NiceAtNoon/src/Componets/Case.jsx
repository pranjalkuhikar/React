import { ArrowRight } from "lucide-react";
import HoverImage from "./HoverImage";
import Button from "./Button";

const Case = () => {
  return (
    <>
      <div className="min-h-[100vh] px-5 pb-20 pt-20 lg:px-10">
        <h6 className="text-center font-semibold">Cases</h6>
        <h1 className="relative mb-10 mt-4 line-clamp-3 w-fit text-center font-sans text-6xl font-bold leading-[1em] tracking-tight md:text-9xl lg:text-[9em]">
          HEAD TURNING PROJECTS
          <div className="absolute bottom-2 right-0 -rotate-12 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold tracking-normal md:bottom-3 md:right-20 md:px-8 md:py-4 md:text-lg lg:bottom-3 lg:right-96">
            Gotta see &apos;m all
          </div>
        </h1>
        <div className="flex w-full items-center justify-between text-center">
          <div></div>
          <div className="transition-border group flex w-fit cursor-pointer flex-col justify-center gap-1 rounded-lg border border-zinc-900 bg-transparent px-5 py-3 text-base font-semibold duration-500 hover:rounded-3xl">
            <div className="flex items-center justify-center gap-5">
              All projects{" "}
              <span className="hover:scale-100">
                <ArrowRight strokeWidth={"1.5px"} />
              </span>
            </div>
            <div className="h-[2px] w-0 bg-black transition-all duration-1000 ease-out group-hover:w-full"></div>
          </div>
        </div>
        <div>
          <HoverImage
            img1="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-3200.jpg"
            img2="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN.jpg"
            header="New Schaijk"
            para="The taste of home"
            text1="Brand Story"
            text2="Brand Identity"
            text3="Web Design"
          />
        </div>
        <div className="flex flex-wrap items-start justify-between gap-10">
          <HoverImage
            img1="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-3200.jpg"
            img2="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-3200.jpg"
            header="Cool Creations"
            para=" Creating mood-boosting experiences"
            text1="Brand Story"
            text2="Brand Identity"
            text3="Web Design"
          />
          <HoverImage
            img1="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-3200.jpg"
            img2="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb59c356882b9497fea77_DM_Hand%20Holding%20Pin-min.jpg"
            header="Don't Mind"
            para="Campaigners for eventful brands"
            text1="Brand Story"
            text2="Brand Identity"
            text3="Web Design"
          />
        </div>
        <div className="mt-10 flex w-fit flex-wrap items-center justify-center gap-4 rounded-xl bg-white px-10 py-2 pb-5 font-sans text-lg font-semibold md:gap-10 md:px-20 lg:gap-20">
          <div>Also working with your brand?</div>
          <Button text="Let's Meet" style="border border-zinc-900" />
        </div>
      </div>
    </>
  );
};

export default Case;
