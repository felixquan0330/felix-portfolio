import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";

export default function Home() {

  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}