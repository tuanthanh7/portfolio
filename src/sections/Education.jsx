import { profile } from "../data/profile";

export default function Education({ t, language }) {
  const education = profile.education;
  const toeic = profile.certifications[0];

  return (
    <section id="education" className="section education">
      <div className="section-top reveal">
        <span className="section-number">05</span>
        <span className="eyebrow">{t.label}</span>
      </div>
      <div className="education-summary reveal">
        <div className="education-summary-main">
          <span className="education-period">{education.period}</span>
          <h2>{language === "vi" ? education.institutionVi : education.institution}</h2>
          <p>{language === "vi" ? education.degreeVi : education.degree}</p>
        </div>
        <div className="education-summary-facts">
          <div className="education-fact-gpa"><span>{t.gpa}</span><strong>{education.gpa}</strong></div>
          <div className="education-fact-language">
            <span>{t.language}</span>
            <strong>{toeic.name} {toeic.score} · {language === "vi" ? toeic.skillsVi : toeic.skills} · {toeic.year}</strong>
            <small>{t.expired}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
