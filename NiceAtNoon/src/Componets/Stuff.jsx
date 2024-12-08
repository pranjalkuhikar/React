const Stuff = () => {
  return (
    <div className="relative px-10 py-40">
      <div className="text-3xl font-semibold">Did some cool stuff for</div>
      <hr className="my-4 border-zinc-900" />
      <div className="flex flex-wrap items-center justify-start text-2xl font-semibold text-gray-400 lg:gap-48">
        <div className="flex flex-col items-start gap-2">
          <h1>Security service of MOOK</h1>
          <h1>Van der Heijden construction</h1>
          <h1>Speyz</h1>
          <h1>Zeth</h1>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1>Ozo Connecting care</h1>
          <h1>Signal Stream</h1>
          <h1>Cool creations</h1>
          <h1>Lunenburg Events</h1>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1>Twofiftyk</h1>
          <h1>Adevil</h1>
          <h1>Sweet moment</h1>
          <h1>Forex library</h1>
        </div>
      </div>
      <div
        className="absolute bottom-1 right-28 animate-spin cursor-pointer"
        style={{ animationDuration: "8s" }}
      >
        <img
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg"
          alt=""
          className="scale-90 object-cover transition-all duration-500 hover:scale-100"
        />
      </div>
    </div>
  );
};

export default Stuff;
