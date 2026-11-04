import { profile } from "../data/profile";

export default function Experience({ t }) {
  return (
    <section id="experience" className="section experience">
      <div className="section-top reveal">
        <span className="section-number">03</span>
        <span className="eyebrow">{t.label}</span>
      </div>
      <div className="experience-heading reveal">
        <h2 className="display-heading">{t.titleA}<br /><em>{t.titleB}</em></h2>
        <div className="experience-period"><span>{t.period}</span><strong>{profile.experience.period}</strong></div>
      </div>

      <div className="experience-role reveal">
        <div className="experience-company">
          <span>{profile.experience.company}</span>
          <h3>{profile.experience.role}</h3>
        </div>
      </div>
      <div className="experience-highlights">
        {t.bullets.map((bullet, index) => (
          <article className="experience-highlight reveal" key={bullet}>
            <span>0{index + 1}</span><p>{bullet}</p>
          </article>
        ))}
      </div>

    </section>
  );
}
