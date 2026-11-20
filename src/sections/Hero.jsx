import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-photo" />
    <div className="hero-shade" />
    <Container className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow eyebrow--light"><span /> CHRISTCHURCH · CANTERBURY</p>
        <h1>Make every<br />surface a <em>fresh</em><br />start.</h1>
        <p className="hero-description">Painting, plastering and surface finishing for homes, businesses and new-build projects.</p>
        <div className="hero-actions">
          <a className="button button--lime" href="#contact">Talk about your project <ArrowUpRight size={17} /></a>
          <a className="hero-link" href="#services">Explore services <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-foot"><span>PERF PAINTING LIMITED</span><span>RESIDENTIAL / COMMERCIAL / INDUSTRIAL</span></div>
      <div className="hero-badge"><b>PERF</b><span>THE FINISH<br />MATTERS.</span></div>
    </Container>
  </section>;
}
