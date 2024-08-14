import { Footer } from "./Components/Footer";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div
      className="mx-auto sm:mx-4 
md:m-[6rem] md:p-[1rem]
    text-[15px] shadow-xl

    "
    >
      <header>
        <Navbar />
      </header>

      <main className="md:grid md:grid-cols-[2fr_1fr] gap-x-4  md:mb-6">
        <Hero />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
