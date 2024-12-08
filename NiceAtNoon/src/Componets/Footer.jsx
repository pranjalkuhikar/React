import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between px-10 py-20 text-white">
        <div className="mb-10 flex flex-col items-start gap-5 text-5xl font-semibold">
          Let&apos;s turn some heads!
          <Button
            text={"Contact"}
            style={"bg-[#0A0B0C] w-fit border border-zinc-100 text-white"}
            width={"bg-white"}
          />
        </div>
        <div className="mb-5 flex items-start justify-between gap-10 uppercase">
          <div>
            <h1 className="mb-4 font-custom text-lg font-semibold capitalize">
              Socials
            </h1>
            <h2 className="mb-2 text-xs">Instagram</h2>
            <h2 className="mb-2 text-xs">LinkedIn</h2>
          </div>
          <div>
            <h1 className="mb-4 font-custom text-lg font-semibold capitalize">
              Sitemap
            </h1>
            <h2 className="mb-2 text-xs">Home</h2>
            <h2 className="mb-2 text-xs">Projects</h2>
            <h2 className="mb-2 text-xs">About</h2>
            <h2 className="mb-2 text-xs">ContACT</h2>
          </div>
          <div>
            <h1 className="mb-4 font-custom text-lg font-semibold capitalize">
              Info
            </h1>
            <h2 className="mb-2 text-xs">Terms and conditions</h2>
            <h2 className="mb-2 text-xs">Privacy Policy</h2>
            <h2 className="mb-2 text-xs">Cookie Policy</h2>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <img
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
