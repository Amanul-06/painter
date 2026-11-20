import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { services, capabilities } from "../data/content";

export default function Services() {
  return <section className="services section-pad" id="services">
    <Container>
      <div className="services-intro">
        <SectionTitle eyebrow="WHAT WE DO" title={<>From prep work<br />to the <em>final coat.</em></>} copy="A range of painting and finishing services for residential, commercial and industrial projects." />
        <div className="capability-box"><span>ALSO PART OF THE PROCESS</span><div>{capabilities.map(item => <b key={item}>{item}</b>)}</div></div>
      </div>
      <div className="service-grid">
        {services.map(service => <article className="service-card" key={service.no}>
          <div className="service-image"><img src={service.image} alt="" loading="lazy" /><span>{service.no}</span></div>
          <div className="service-body"><div><h3>{service.title}</h3><p>{service.text}</p></div><a href="#contact" aria-label={`Enquire about ${service.title}`}><ArrowUpRight /></a></div>
        </article>)}
      </div>
    </Container>
  </section>;
}
