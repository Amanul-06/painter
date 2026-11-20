import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Container from "./Container";
import { company } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header">
    <Container className="header-inner">
      <a href="#top" className="logo" onClick={close}>
        <span className="logo-symbol">P<span>.</span></span>
        <span className="logo-copy">PERF PAINTING<small>LIMITED · CHRISTCHURCH</small></span>
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav nav--open" : "nav"}>
        <a href="#services" onClick={close}>Services</a>
        <a href="#approach" onClick={close}>Our approach</a>
        <a href="#work" onClick={close}>Gallery</a>
        <a href="#areas" onClick={close}>Areas</a>
        <a className="nav-cta" href="#contact" onClick={close}>Request a quote <ArrowUpRight size={15} /></a>
      </nav>
    </Container>
  </header>;
}
