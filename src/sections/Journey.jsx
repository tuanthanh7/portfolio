import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function Journey({ journey, t }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="journey" className="section journey">
      <div className="section-top reveal">
        <span className="section-number">06</span>
        <span className="eyebrow">{t.label}</span>
      </div>
      <div className="journey-intro reveal">
        <h2 className="display-heading">{t.titleA}<br /><em>{t.titleB}</em></h2>
        <p>{t.body}</p>
      </div>
      <div className="journey-grid">
        {journey.map((item, i) => (
          <button className="journey-card reveal" key={item.image} onClick={() => setSelected(item)}>
            <div className="journey-image">
              <img src={item.image} alt={item.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <div className="image-placeholder">{item.title}</div>
            </div>
            <div className="journey-caption">
              <span>{item.year}</span><strong>{item.title}</strong><ArrowUpRight size={17} />
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label={t.close}><X /></button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <div><span>{selected.year}</span><h3>{selected.title}</h3><p>{selected.description}</p></div>
          </div>
        </div>
      )}
    </section>
  );
}
