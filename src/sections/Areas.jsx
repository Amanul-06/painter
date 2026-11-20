import { MapPin } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { company } from "../data/content";

export default function Areas() {
  return <section className="areas section-pad" id="areas">
    <Container className="areas-grid">
      <div><SectionTitle eyebrow="WHERE WE WORK" title={<>Christchurch<br />and <em>beyond.</em></>} copy="The business profile lists the following locations as service areas. Please confirm the current coverage before launch." /></div>
      <div className="area-panel"><div className="area-panel-top"><MapPin /><span>LISTED SERVICE AREAS</span></div><div className="area-tags">{company.areas.map(area => <span key={area}>{area}</span>)}</div><p>Based in Christchurch, New Zealand</p></div>
    </Container>
  </section>;
}
