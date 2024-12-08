import Tag from "./Tag";

/* eslint-disable react/prop-types */
const HoverImage = ({ img1, img2, header, para, text1, text2, text3 }) => {
  return (
    <div className="flex flex-col items-start justify-between">
      <div className="group relative mt-16 h-full w-full overflow-hidden rounded-3xl transition-all duration-500 hover:rounded-[9em]">
        <img
          src={img1}
          alt=""
          className="relative h-full w-full object-cover transition-all duration-500 hover:scale-125"
        />
        <img
          src={img2}
          alt=""
          className="absolute left-1/2 top-1/2 h-96 w-96 translate-x-[-50%] translate-y-[-50%] rounded-[5em] opacity-0 transition-all duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="pt-10">
        <h2 className="font-custom text-xl text-gray-500">{header}</h2>
        <p className="-mt-1 text-2xl font-semibold">{para}</p>
        <div className="mt-3 flex items-center justify-start gap-8">
          <Tag text={text1} />
          <Tag text={text2} />
          <Tag text={text3} />
        </div>
      </div>
    </div>
  );
};

export default HoverImage;
