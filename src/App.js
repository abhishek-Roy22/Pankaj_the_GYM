import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Programms from "./components/Programms/Programms";
import Why from "./components/Why/Why";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <header className="App-header">
        <Hero />
      </header>
      <main>
        <Programms />
        <Why />
        <Plans />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
