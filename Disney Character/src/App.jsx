import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-mono relative">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
