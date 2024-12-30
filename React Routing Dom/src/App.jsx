import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Kodr from "./components/Kodr";
import Courses from "./components/Courses";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kodr" element={<Kodr />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:name" element={<Details />} />
        <Route path="/courses/:name/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
