import dbConnect from "@/lib/mongoose";
import Experience from "@/models/Experience";
import Reveal from "@/components/Reveal";
import AccordionList from "../AccordianList";
import { PhotoStack } from "../PhotoStack";

export default async function About() {
  await dbConnect();
  const experience = await Experience.find({}).sort({ order: 1 }).lean();

  return (
    <section id="about" className="text-white max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
        <div>
          <Reveal delay={200}>
            <PhotoStack />
            {/* <div className="bg-white p-3 pb-8 shadow-2xl rounded-sm -rotate-3 w-56 mb-10">
              <img src="/images/profile.jpg" alt="Your name" className="w-full h-56 object-cover" />
            </div> */}
          </Reveal>

          <Reveal delay={300}>
            <p className="text-sm text-gray-500 mb-2">About</p>
            <div className="space-y-1 mb-8">
              <p className="font-semibold text-white">5+ Years Experience</p>
              <p className="font-semibold text-white">5.7M+ Users Reached</p>
              <p className="font-semibold text-gray-500">Felix · Remote-Open</p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2 className="text-3xl font-bold leading-snug mb-6 text-white">
              I bridge the gap between design and code
              <br />
              building products end-to-end
              <br />
              from first sketch to shipped feature.
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-xl">
              Working across both disciplines means I understand the full lifecycle
              of a product: the research, the interface decisions, and the technical
              trade-offs that shape what actually ships.
              I bring that full-picture thinking to everything I build.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <AccordionList items={JSON.parse(JSON.stringify(experience))} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}