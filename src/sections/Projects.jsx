import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";

function ProjectDetail({ project, onClose, t, lenisRef }) {
  const [expandedImage, setExpandedImage] = useState(null);
  const phoneShots = project.gallery.filter((item) => item.kind === "phone");
  const wideShots = project.gallery.filter((item) => item.kind !== "phone");

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (expandedImage) setExpandedImage(null);
      else onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenisRef.current?.stop();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lenisRef.current?.start();
    };
  }, [onClose, lenisRef, expandedImage]);

  return (
    <div className="project-detail-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <article className="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" onWheel={(event) => event.stopPropagation()} onTouchMove={(event) => event.stopPropagation()}>
        <header className="project-detail-top">
          <span>{t.caseLabel} / {project.number}</span>
          <button onClick={onClose} aria-label={t.close}><X /></button>
        </header>
        <div className="project-detail-intro">
          <p className="project-category">{project.subtitle}</p>
          <h2 id="project-detail-title">{project.title}</h2>
          <p>{project.overview}</p>
          <small><strong>{t.role}:</strong> {project.role} · {project.contribution}</small>
        </div>
        <div className="project-detail-columns">
          <div>
            <h3>{t.highlights}</h3>
            <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>{t.stack}</h3>
            <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
            <a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">{t.source} <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="project-gallery-heading"><span>{t.interface} / {String(project.gallery.length).padStart(2, "0")} {t.screens}</span><span>{t.archive}</span></div>
        <div className="project-detail-gallery">
          {phoneShots.length > 0 && (
            <section className="project-gallery-group">
              <h3>{t.mobileScreens}</h3>
              <div className="project-gallery-group-grid">
                {phoneShots.map((item) => (
                  <figure className="project-shot project-shot-phone" key={item.image}>
                    <div className="project-shot-image">
                      <button className="project-image-trigger" type="button" onClick={() => setExpandedImage(item)} aria-label={`${t.zoomImage}: ${item.title}`}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <span className="project-image-zoom" aria-hidden="true"><ZoomIn size={17} /></span>
                      </button>
                    </div>
                    <figcaption><span>{item.title}</span><span>{t.mobile}</span></figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
          {wideShots.length > 0 && (
            <section className="project-gallery-group project-gallery-group-wide">
              <h3>{t.wideScreens}</h3>
              <div className="project-gallery-group-grid">
                {wideShots.map((item) => (
                  <figure className={`project-shot project-shot-${item.kind}`} key={item.image}>
                    <div className="project-shot-image">
                      <button className="project-image-trigger" type="button" onClick={() => setExpandedImage(item)} aria-label={`${t.zoomImage}: ${item.title}`}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <span className="project-image-zoom" aria-hidden="true"><ZoomIn size={17} /></span>
                      </button>
                    </div>
                    <figcaption><span>{item.title}</span><span>{item.kind === "evidence" ? t.backend : t.admin}</span></figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <button className="project-detail-mobile-close" type="button" onClick={onClose}>
        <X size={16} /><span>{t.close}</span>
      </button>
      {expandedImage && createPortal(
        <div className="project-image-lightbox" role="dialog" aria-modal="true" aria-label={expandedImage.title} onClick={(event) => { if (event.target === event.currentTarget) setExpandedImage(null); }}>
          <button className="lightbox-close" type="button" aria-label={t.closeImage} onClick={() => setExpandedImage(null)}><X /></button>
          <img src={expandedImage.image} alt={expandedImage.title} />
          <span>{expandedImage.title}</span>
        </div>,
        document.body
      )}
    </div>
  );
}

export default function Projects({ projects, activeProject, setActiveProject, language, t, lenisRef }) {
  const data = projects[activeProject];
  const [detailOpen, setDetailOpen] = useState(false);
  const closeDetail = useCallback(() => setDetailOpen(false), []);

  useEffect(() => {
    gsap.fromTo(".project-visual-inner", { opacity: 0, y: 55, rotate: -4 }, { opacity: 1, y: 0, rotate: 0, duration: .8, ease: "power4.out" });
  }, [activeProject]);

  const change = (direction) => setActiveProject((current) => (current + direction + projects.length) % projects.length);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-pin">
        <div className="project-heading">
          <div><span className="section-number light">02</span><span className="eyebrow light-text">{t.section}</span></div>
          <div className="project-counter">{data.number} / {String(projects.length).padStart(2, "0")}</div>
        </div>
        <div className="project-layout">
          <div className="project-info">
            <p className="project-category">{data.subtitle}</p>
            <p className="project-role">{t.role}: {data.role} · {language === "vi" ? "ĐỒ ÁN NHÓM" : "TEAM PROJECT"}</p>
            <h2>{data.title}</h2>
            <p className="project-description">{data.description}</p>
            <div className="tech-list">{data.tech.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-actions">
              <button onClick={() => setDetailOpen(true)} className="button button-light">{t.caseStudy} <ArrowUpRight size={17} /></button>
              <a href={data.github} className="github-link" target="_blank" rel="noreferrer">{t.source} ↗</a>
            </div>
            <div className="project-nav">
              <button onClick={() => change(-1)} aria-label={t.previous}><ArrowLeft /></button>
              <button onClick={() => change(1)} aria-label={t.next}><ArrowRight /></button>
            </div>
          </div>
          <button className="project-visual" onClick={() => setDetailOpen(true)} aria-label={`${t.viewDetails}: ${data.title}`}>
            <div className="project-visual-grid" /><div className="project-visual-number">{data.number}</div>
            <div className="project-visual-inner"><PhoneMockup image={data.heroImage} /></div>
            <div className="visual-caption">{t.selected} / {data.number} · {t.viewDetails} ↗</div>
          </button>
        </div>
        <div className="project-bottom"><span>{t.bottomHint}</span><span>{data.subtitle.toUpperCase()}</span></div>
      </div>
      {detailOpen && <ProjectDetail project={data} onClose={closeDetail} t={t} lenisRef={lenisRef} />}
    </section>
  );
}
