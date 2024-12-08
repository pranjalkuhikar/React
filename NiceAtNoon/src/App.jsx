import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import Case from "./Componets/Case";
import Services from "./Componets/Services";
import OurBelief from "./Componets/OurBelief";
import Stuff from "./Componets/Stuff";
import Footer from "./Componets/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#E4E4E4] font-normal">
        <div className="mx-auto max-w-screen-2xl">
          <Navbar />
          <Hero />
          <Case />
        </div>
      </div>
      <div className="min-h-[100vh] bg-[#F4F4F1] pb-20 font-normal">
        <div className="mx-auto max-w-screen-2xl">
          <Services />
          <OurBelief />
          <Stuff />
        </div>
      </div>
      <div className="bg-[#0A0B0C] font-normal">
        <Footer />
      </div>
    </>
  );
};

export default App;
