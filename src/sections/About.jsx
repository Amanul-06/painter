
import { ArrowUpRight } from "lucide-react";
import { Check } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const points = [
  "Surface preparation is part of the finish",
  "Residential, commercial and industrial capability",
  "Interior, exterior and specialist coating work",
  "A service area spanning Christchurch and wider Canterbury"
];

export default function About() {
  return <section className="approach section-pad" id="approach">
    <Container className="approach-grid">
      <div className="approach-image">
        <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1300&q=85" alt="Painter applying a fresh coat to an interior wall" loading="lazy" />
        <div className="image-caption"><span>THE DETAILS MAKE THE DIFFERENCE</span><b>01 / PREPARE · 02 / PAINT · 03 / FINISH</b></div>
      </div>
      <div className="approach-copy">
        <SectionTitle eyebrow="THE PERF APPROACH" title={<>A great result<br />starts <em>underneath.</em></>} copy="The public business profile highlights surface preparation alongside painting services. This concept puts that process at the centre of the story." />
        <ul>{points.map(point => <li key={point}><span><Check size={14} /></span>{point}</li>)}</ul>
        <a className="inline-link" href="#contact">Discuss your project <ArrowUpRight size={16} /></a>
      </div>
    </Container>
  </section>;
}
