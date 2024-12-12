import { Search } from "lucide-react";
const Navbar = () => {
  return (
    <nav className=" w-full h-32 flex items-center justify-around">
      <div className="h-full flex items-center gap-2  lg:-ml-20">
        <img src="disney.svg" alt="" className="h-full" />
        <h1 className="text-3xl tracking-tighter font-normal">Characters</h1>
      </div>
      <div className="bg-zinc-100 rounded-full px-6 py-3 hidden md:flex items-center gap-5 justify-center ">
        <div className="text-zinc-400">
          <Search />
        </div>
        <input
          type="text"
          placeholder="Search Character"
          className="border-none outline-none bg-transparent"
        />
      </div>
      <div className="text-2xl tracking-tighter font-normal cursor-pointer">
        Menu &nbsp; <span className="font-bold">: :</span>
      </div>
    </nav>
  );
};

export default Navbar;
