import { Faq } from "./Components/Home/Faq";
import { Hero } from "./Components/Home/Hero";
import { Note } from "./Components/Home/Note";
import { Partner } from "./Components/Home/Partner";
import { ProblemSolution } from "./Components/Home/problemSolution";
import { Reviews } from "./Components/Home/Reviews";
import { Footer } from "./Components/Share/Footer";
import { Navbar } from "./Components/Share/Navbar";


const App = () => {
  return (
    <main className="font-nunito sans bg-[url(/img/hero-bg.svg)] min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Partner />
      <Faq />
      <Note/>
      <Footer />
    </main>
  );
}
export default App;