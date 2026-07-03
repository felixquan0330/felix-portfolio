// import Link from "next/link";
// import ProjectCard from "@/components/ProjectCard";
// import dbConnect from "@/lib/mongoose";
// import Project from "@/models/Project";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";

export default function Home() {
  // await dbConnect();
  // const featuredProjects = await Project.find({}).lean();

  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>

    // <div>
    //   <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
    //     <h1 className="text-4xl sm:text-5xl font-bold mb-4 typewriter">
    //       Hi, I'm Felix Quan
    //     </h1>
    //     <p className="text-lg text-gray-600 mb-8">
    //       I'm a Full-Stack Engineer and AI/ML Engineer passionate about building
    //       modern, scalable, and intelligent applications that solve real-world
    //       problems. I enjoy working across the entire development process—from
    //       creating responsive user interfaces and designing robust backend systems
    //       to integrating AI and machine learning into products that deliver
    //       meaningful value. I believe great software combines clean architecture,
    //       thoughtful design, and a seamless user experience. I'm always eager
    //       to learn new technologies, take on challenging projects, and create
    //       solutions that make a lasting impact.
    //     </p>
    //     <div className="flex justify-center gap-4">
    //       <Link
    //         href="/projects"
    //         className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
    //       >
    //         View My Work
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="border px-6 py-3 rounded-md font-medium hover:bg-gray-50"
    //       >
    //         Get in Touch
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Featured projects */}
    //   <section className="max-w-6xl mx-auto px-6 pb-24">
    //     <div className="flex items-center justify-between mb-8">
    //       <h2 className="text-2xl font-bold">Featured Projects</h2>
    //       <Link
    //         href="/projects"
    //         className="text-sm text-blue-600 hover:underline"
    //       >
    //         View all →
    //       </Link>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {featuredProjects.map((p) => (
    //         <ProjectCard key={p.title} {...p} />
    //       ))}
    //     </div>
    //   </section>
    // </div>
  );
}