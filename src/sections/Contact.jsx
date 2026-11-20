import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Instagram, MapPin } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { company } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event) { event.preventDefault(); setSent(true); }
  return <section className="contact section-pad" id="contact">
    <Container className="contact-grid">
      <div className="contact-copy">
        <SectionTitle eyebrow="LET'S GET YOUR PROJECT MOVING" title={<>What's your<br /><em>next project?</em></>} copy="Get in touch to discuss the scope, surfaces and finish you're looking for." />
        <div className="contact-links">
          <a href={company.instagram} target="_blank" rel="noreferrer"><span><Instagram /></span><div><small>SEE THE SOCIAL PROFILE</small><b>{company.instagramHandle}</b></div><ArrowUpRight /></a>
          <div className="contact-location"><span><MapPin /></span><div><small>BASED IN</small><b>{company.base}</b></div></div>
        </div>
        <p className="contact-caveat">Phone number and email address were not confirmed in the public source used for this concept. Add verified contact details before launch.</p>
      </div>
      <form className="enquiry-form" onSubmit={submit}>
        <div className="form-kicker"><span>PERF PAINTING LTD</span><span>PROJECT ENQUIRY</span></div>
        {sent ? <div className="success"><CheckCircle2 size={40} /><h3>Enquiry preview submitted.</h3><p>This demo form does not send or store information. Connect a form endpoint before the website goes live.</p><button type="button" className="button button--navy" onClick={() => setSent(false)}>Send another <ArrowUpRight size={16} /></button></div> : <>
          <h3>Tell us a little<br />about the job.</h3>
          <label>Your name<input required placeholder="Name" /></label>
          <label>Email address<input type="email" required placeholder="you@example.com" /></label>
          <label>Type of work<select defaultValue=""><option value="" disabled>Select a service</option><option>Interior painting</option><option>Exterior painting</option><option>Roof painting</option><option>Plastering / patch repairs</option><option>New build</option><option>Commercial / industrial</option><option>Other</option></select></label>
          <label>Project details<textarea rows="3" placeholder="Property location, surfaces and timing..." /></label>
          <button className="button button--navy form-button" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
          <p className="form-note">Demo form only · no data is transmitted.</p>
        </>}
      </form>
    </Container>
  </section>;
}
