import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function Certificates({ certificates, t }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);
  const current = certificates[index];

  return (
    <section className="section certificates">
      <div className="section-top reveal">
        <span className="section-number">07</span>
        <span className="eyebrow">{t.label}</span>
      </div>

      <div className="cert-layout">
        <div className="cert-copy reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="display-heading">{t.titleA}<br /><em>{t.titleB}</em></h2>
          <p>{t.body}</p>

          <div className="cert-nav">
            <button aria-label={t.previous} onClick={() => setIndex((index - 1 + certificates.length) % certificates.length)}><ArrowLeft /></button>
            <span>{String(index + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
            <button aria-label={t.next} onClick={() => setIndex((index + 1) % certificates.length)}><ArrowRight /></button>
          </div>
        </div>

        <button className={`certificate-card reveal${current.cropToFill ? " certificate-card-fill" : ""}${current.contain ? " certificate-card-contain" : ""}`} onClick={() => setOpen(current)}>
          <div className="certificate-image">
            <img src={current.image} alt={current.title} onError={(e) => e.currentTarget.style.display = "none"} />
            <div className="certificate-placeholder">{t.fallback}</div>
          </div>
          <div className="certificate-meta">
            <div><span>{current.issuer}</span><strong>{current.title}</strong></div>
            <span>{t.view} ↗</span>
          </div>
        </button>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lightbox-close" aria-label={t.close} onClick={() => setOpen(null)}><X /></button>
          <div className="certificate-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img className="certificate-full" src={open.image} alt={open.title} />
            <div className="certificate-lightbox-info">
              <span>{open.issuer}</span>
              <h3>{open.title}</h3>
              {open.learningPoints?.length > 0 && (
                <>
                  <h4>{t.learning}</h4>
                  <ul>{open.learningPoints.map((point) => <li key={point}>{point}</li>)}</ul>
                </>
              )}
              {open.pdf && <a className="certificate-pdf-link" href={open.pdf} target="_blank" rel="noreferrer">{t.download} ↗</a>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
