import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";
import { profile } from "../data/profile";

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div className="hero-noise" />

      <div className="hero-orbit orbit-a" />
      <div className="hero-orbit orbit-b" />

      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">{t.role}</p>

        <h1 className="hero-title">
          <span className="hero-title-line">TUAN</span>
          <span className="hero-title-line hero-title-indent">THANH<span className="accent-dot">.</span></span>
        </h1>

        <p className="hero-intro">{t.intro}</p>

        <div className="hero-actions">
          <a href="#projects" className="button button-dark">
            {t.explore} <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="text-link">{t.talk}</a>
          <a className="cv-download" href={`${import.meta.env.BASE_URL}${profile.cv}`} download="Tran-Tuan-Thanh-CV.pdf">
            <Download size={14} aria-hidden="true" />{t.downloadCv}
          </a>
        </div>
      </div>

      <div className="hero-person" aria-label={t.portrait}>
        <div className="portrait-halo" />
        <img
          src={`${import.meta.env.BASE_URL}assets/photos/profile.png`}
          alt={t.portrait}
          width="1349"
          height="1166"
          decoding="async"
        />
      </div>

      <div className="hero-phone-wrap">
        <div className="phone-label">
          <span>01</span>{t.selected}
        </div>
        <div className="hero-phone-glow" />
        <PhoneMockup className="hero-phone" alt={t.selected} />
      </div>

      <div className="hero-side-note">
        <span>{t.scroll}</span>
        <ArrowDown size={16} />
      </div>

      <div className="hero-meta">
          <span>LUMEN / PHP / SQL</span>
        <span>01 — 08</span>
      </div>
    </section>
  );
}
