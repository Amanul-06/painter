import { ArrowUpRight } from "lucide-react";

export default function Button({ children, href = "#contact", variant = "lime" }) {
  return <a className={`button button--${variant}`} href={href}>
    <span>{children}</span><ArrowUpRight size={17} />
  </a>;
}
