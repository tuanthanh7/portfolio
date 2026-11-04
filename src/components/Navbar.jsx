import { useState } from "react";
import { Languages } from "lucide-react";

export default function Navbar({ language, onToggleLanguage, t }) {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${open ? "open" : ""}`}>
      <button className="brand" onClick={() => go("#top")} aria-label={language === "en" ? "Back to top" : "Về đầu trang"}>TT<span>®</span></button>
      <nav className="nav-links">
        <button onClick={() => go("#about")}>{t.nav.about}</button>
        <button onClick={() => go("#projects")}>{t.nav.work}</button>
        <button onClick={() => go("#experience")}>{t.nav.experience}</button>
        <button onClick={() => go("#technical")}>{t.nav.skills}</button>
        <button onClick={() => go("#education")}>{t.nav.education}</button>
        <button onClick={() => go("#journey")}>{t.nav.journey}</button>
        <button onClick={() => go("#contact")}>{t.nav.contact}</button>
      </nav>
      <div className="navbar-controls">
        <button className="language-toggle" onClick={onToggleLanguage} aria-label={`Switch language to ${language === "en" ? "Vietnamese" : "English"}`} title={language === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}>
          <Languages size={16} /><span>{language === "en" ? "EN" : "VI"}</span>
        </button>
        <button className="menu-btn" onClick={() => setOpen(!open)}><span>{open ? t.nav.close : t.nav.menu}</span></button>
      </div>
    </header>
  );
}
