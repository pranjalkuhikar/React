/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";

const Box = ({ img, heading, para, style }) => {
  return (
    <div className="group h-[30em] w-[22em] cursor-pointer">
      <div className="h-3/5 w-full">
        <img
          src={img}
          alt=""
          className="h-full w-full rounded-t-3xl object-cover transition-all duration-500 group-hover:rounded-[4em]"
        />
      </div>
      <div
        className={`${style} flex h-2/5 w-full flex-col items-center justify-evenly rounded-b-3xl px-10 py-5 transition-all duration-500 group-hover:rounded-[4em]`}
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {heading}
          </h1>
          <div className="text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowRight />
          </div>
        </div>
        <div className="text-base font-normal tracking-normal text-white">
          {para}
        </div>
      </div>
    </div>
  );
};

export default Box;
