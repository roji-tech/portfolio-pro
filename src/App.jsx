import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
// import Services from "./components/Services";
import Projects from "./components/Projects";
// import Testimonies from "./components/Testimonies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      {/* <Services /> */}
      <Projects />
      {/* <Testimonies /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
