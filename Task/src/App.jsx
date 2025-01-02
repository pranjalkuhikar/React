import One from "./Components/1st";
import Two from "./Components/2nd";
import Third from "./Components/3rd";
import Four from "./Components/4";
import Five from "./Components/5";
import Six from "./Components/6";
import Seven from "./Components/7";

const App = () => {
  return (
    <div className="min-h-screen w-fit p-20 bg-zinc-800">
      <div className="bg-zinc-700 p-10 border border-spacing-80 text-white flex flex-col items-start justify-between gap-4">
        <div className="text-5xl font-mono underline">Task</div>
        <p>1 (Select h1 and change background color)</p>
        <One />
        <p>2 (Changed Button Text when click)</p>
        <Two />
        <p>3 (Hover the para changed font size)</p>
        <Third />
        <p>4 (click on button show the image toggle)</p>
        <Four />
        <p>5 (Change the box color randomly)</p>
        <Five />
        <p>6 (Color)</p>
        <Six />
        <p>7 (Basic Form Validation)</p>
        <Seven />
      </div>
    </div>
  );
};

export default App;
