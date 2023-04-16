import "./App.css";
import Home from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
