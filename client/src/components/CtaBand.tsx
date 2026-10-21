import { Link } from "react-router-dom";

const CtaBand = ({ title = ["Have a project", "in mind?"] }: { title?: string[] }) => (
  <section className="cta-band" aria-labelledby="cta-band-title">
    <h2 id="cta-band-title" className="cta-band-title">
      {title.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
    <Link to="/contact" className="site-cta">
      Let's talk
      <span className="site-cta-dot" aria-hidden="true" />
    </Link>
  </section>
);

export default CtaBand;
