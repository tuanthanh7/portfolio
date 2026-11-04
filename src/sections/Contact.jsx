import { ArrowUpRight, Facebook, Github, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact({ t }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-grid" />
      <div className="section-top contact-top reveal">
        <span className="section-number light">08</span>
        <span className="eyebrow light-text">{t.label}</span>
      </div>
      <div className="contact-content">
        <p className="eyebrow light-text reveal">{t.eyebrow}</p>
        <h2 className="contact-title reveal">{t.titleA}<br /><em>{t.titleB}</em></h2>
        <a className="contact-mail reveal" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight />
        </a>
        <div className="socials reveal">
          <a href={profile.links.github} target="_blank" rel="noreferrer"><Github /> {t.github}</a>
          <a href={profile.links.facebook} target="_blank" rel="noreferrer"><Facebook /> {t.facebook}</a>
          <a href={`mailto:${profile.email}`}><Mail /> {t.email}</a>
        </div>
      </div>
    </section>
  );
}
