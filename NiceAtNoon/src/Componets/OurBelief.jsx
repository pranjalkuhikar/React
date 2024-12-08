import Tag from "./Tag";

const OurBelief = () => {
  return (
    <div className="mt-20 px-10">
      <div className="text-center text-base font-semibold tracking-tight">
        Our Belief
      </div>
      <div className="relative mt-4 text-center font-sans text-[9em] font-bold uppercase leading-[1em] tracking-tighter">
        Brands just want To have fun
        <div
          className="absolute bottom-2 right-44 inline-block h-36 w-36 animate-spin rounded-full bg-green-600 p-6"
          style={{ animationDuration: "8s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 60 106"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            role="img"
          >
            <path
              d="M0.753906 78.1616C0.753906 74.9688 1.62152 72.7477 3.35675 71.4984C5.09198 70.1796 7.20895 69.5202 9.70768 69.5202C12.137 69.5202 14.2193 70.1796 15.9545 71.4984C17.6897 72.7477 18.5573 74.9688 18.5573 78.1616C18.5573 81.2156 17.6897 83.4367 15.9545 84.8249C14.2193 86.1437 12.137 86.8031 9.70768 86.8031C7.20895 86.8031 5.09198 86.1437 3.35675 84.8249C1.62152 83.4367 0.753906 81.2156 0.753906 78.1616ZM0.753906 36.2038C0.753906 33.011 1.62152 30.7899 3.35675 29.5405C5.09198 28.2218 7.20895 27.5624 9.70768 27.5624C12.137 27.5624 14.2193 28.2218 15.9545 29.5405C17.6897 30.7899 18.5573 33.011 18.5573 36.2038C18.5573 39.2578 17.6897 41.4789 15.9545 42.8671C14.2193 44.1859 12.137 44.8453 9.70768 44.8453C7.20895 44.8453 5.09198 44.1859 3.35675 42.8671C1.62152 41.4789 0.753906 39.2578 0.753906 36.2038Z"
              fill="currentColor"
            ></path>
            <path
              d="M33.1495 0.805176L26.7986 9.86307C37.0017 16.8387 46.2678 34.3298 46.2678 53.0702C46.2678 70.7696 37.9388 87.1154 27.0068 96.1733L33.2536 105.231C50.0159 94.7157 59.282 74.1012 59.282 53.2785C59.282 34.1215 51.4735 12.4659 33.1495 0.805176Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-10 h-full w-full">
        <img
          src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan.webp"
          alt=""
          className="h-full w-full rounded-[6em] object-cover"
        />
      </div>
      <div className="mt-10 flex w-fit items-center justify-center gap-10">
        <Tag text={"Brand Story sessions"} />
        <h1 className="text-base font-semibold text-gray-500">
          Together we discover your brand story
        </h1>
      </div>
    </div>
  );
};

export default OurBelief;
