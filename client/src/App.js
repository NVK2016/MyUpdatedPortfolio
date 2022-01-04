
import './App.css';

//import all pages & components 
import Landing from "./pages/Landing";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/AboutMe";
import Project from "./pages/Project";
// import NavBar from "./components/Navbar"; 
// import Footer from "./components/Footer"; 
function App() {
  return (

    <div>

      <Landing />
      {/* <NavBar /> */}
      <About />
      <Skills />
      <Project />
      <Contact />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
