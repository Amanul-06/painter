import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { projectImages } from "../data/content";

export default function Work() {
  return <section className="work section-pad" id="work">
    <Container>
      <div className="work-head">
        <SectionTitle eyebrow="PROJECT GALLERY" title={<>A closer look at<br /><em>the finish.</em></>} copy="A visual space to showcase completed work across interiors, exteriors and commercial properties." />
        <p className="gallery-alert">IMAGE PLACEHOLDERS<br />Replace with approved Perf Painting project photography before publishing.</p>
      </div>
      <div className="gallery">{projectImages.map((item, index) => <figure className={`gallery-item gallery-item--${index + 1}`} key={item.label}>
        <img src={item.image} alt={item.label} loading="lazy" /><figcaption><span>INSPIRATION IMAGE</span><b>{item.label}</b></figcaption>
      </figure>)}</div>
    </Container>
  </section>;
}
