import { Reveal } from "@/components/motion";
import { hobbies } from "@/data/about";
import type { Hobby } from "@/data/about";
import type { ReactElement } from "react";

export default function Hobbies(): ReactElement {
  return (
    <section className="hobbies-section">
      <Reveal className="container" delay={0.04}>
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              Hobbies <span>&amp;</span> Interests
            </h3>
          </div>

          {hobbies.map((hobby: Hobby) => (
            <div key={hobby.name} className="col-6 col-md-4 mb-4">
              <div className="hobby-card">
                <div className="hobby-icon-wrap">
                  <i className={`fa ${hobby.icon}`} aria-hidden="true" />
                </div>
                <h6 className="text-uppercase open-sans-font ft-wt-600 mt-3 mb-2">
                  {hobby.name}
                </h6>
                <p className="open-sans-font hobby-desc">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
