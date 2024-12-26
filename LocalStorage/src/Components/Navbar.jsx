import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Navbar = () => {
  const mainRef = useRef(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("light")
      ? "light"
      : localStorage.setItem("theme", "dark")
  );
  const handlerToggle = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    mainRef.current.setAttribute("id", theme);
  }, [theme]);

  return (
    <div ref={mainRef} className="h-screen w-full bg-zinc-700 p-5 text-white">
      <div className="flex  items-center justify-between">
        <div className="text-4xl font-mono">Pranjal</div>
        <div className="flex items-center justify-center gap-7">
          <div>Home</div>
          <div>Contact</div>
          <div>Services</div>
          <div>About</div>
          <div
            onClick={handlerToggle}
            className="px-5 py-2 rounded-lg bg-zinc-400 text-zinc-700 cursor-pointer active:scale-95"
          >
            Mode
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-4xl font-mono font-light">Pranjal</div>
      </div>
    </div>
  );
};

export default Navbar;
