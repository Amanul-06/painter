import { ArrowUpRight, Instagram } from "lucide-react";
import Container from "./Container";
import { company } from "../data/content";

export default function Footer() {
  return <footer className="footer">
    <Container>
      <div className="footer-main">
        <a className="logo logo--footer" href="#top"><span className="logo-symbol">P<span>.</span></span><span className="logo-copy">PERF PAINTING<small>LIMITED · CHRISTCHURCH</small></span></a>
        <p>Good preparation.<br /><strong>Great finishes.</strong></p>
        <a className="footer-social" href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> Follow on Instagram <ArrowUpRight size={15} /></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Perf Painting Ltd · Website concept</span><span>Christchurch, New Zealand</span><a href={company.profile} target="_blank" rel="noreferrer">Business profile <ArrowUpRight size={13} /></a></div>
    </Container>
  </footer>;
}
