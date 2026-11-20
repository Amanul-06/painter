export default function SectionTitle({ eyebrow, title, copy, light = false }) {
  return <div className={`section-title ${light ? "section-title--light" : ""}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>;
}
