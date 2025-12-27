// src/components/Section.js
export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section__surface">
          <div className="section__head">
            <h2 className="section__title">{title}</h2>
            {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
          </div>
          <div className="section__body">{children}</div>
        </div>
      </div>
    </section>
  );
}
