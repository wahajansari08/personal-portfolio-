import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import Skills from "@/components/about/Skills/Skills";
import Experience from "@/components/about/Experience/Experience";
import Education from "@/components/about/Education/Education";
import Hobbies from "@/components/about/Hobbies/Hobbies";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About | Wahaj Ansari",
  description: "About me — background, skills, experience, and education.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <hr className="separator" />
      <Skills />
      <hr className="separator mt-1" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Reveal delay={0.06}>
              <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                Experience <span>&</span> Education
              </h3>
            </Reveal>
          </div>
          <Experience />
          <Education />
        </div>
      </div>
      <hr className="separator mt-1" />
      <Hobbies />
    </main>
  );
}
