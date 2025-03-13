import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about" className="h-screen bg-green-200 flex items-center justify-center">
        <h1>About</h1>
      </section>
      <section id="projects" className="h-screen bg-yellow-200 flex items-center justify-center">
        <h1>Projects</h1>
      </section>
      <section id="contact" className="h-screen bg-red-200 flex items-center justify-center">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

