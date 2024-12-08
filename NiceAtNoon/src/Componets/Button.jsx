/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";

const Button = ({ text, style, width }) => {
  return (
    <div
      className={`${style} transition-border group mt-3 flex min-w-48 cursor-pointer flex-col justify-center gap-1 rounded-lg bg-white px-5 py-3 text-base font-semibold duration-500 hover:rounded-3xl`}
    >
      <div className="flex items-center justify-center gap-5">
        {text}
        <span className="group-hover:scale-100">
          <ArrowRight strokeWidth={"1.5px"} />
        </span>
      </div>
      <div
        className={`${width} -mt-1 h-[2px] w-0 bg-black transition-all duration-1000 ease-out group-hover:w-full`}
      ></div>
    </div>
  );
};

export default Button;
