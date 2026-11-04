export default function About({ t }) {
  return (
    <section id="about" className="section about">
      <div className="section-top reveal">
        <span className="section-number">01</span>
        <span className="eyebrow">{t.label}</span>
      </div>

      <div className="about-layout">
        <h2 className="display-heading reveal">
          {t.titleA}<br />
          {t.titleB} <em>{t.titleEm}</em>
        </h2>

        <div className="about-text reveal">
          <p className="lead">{t.lead}</p>
          <p>{t.body}</p>

          <div className="stats">
            {t.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="line-reveal section-rule" />
    </section>
  );
}
