import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { projects, certificates, journey } from "./data/content";
import { translations } from "./data/i18n";
import { profile } from "./data/profile";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Technical from "./sections/Technical";
import Journey from "./sections/Journey";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [showDeviceNotice, setShowDeviceNotice] = useState(() =>
    window.matchMedia("(max-width: 760px), (orientation: portrait)").matches &&
    sessionStorage.getItem("portfolio-device-notice-dismissed") !== "1"
  );
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") === "vi" ? "vi" : "en");
  const lenisRef = useRef(null);
  const t = translations[language];
  const localizedProjects = projects.map((project, index) => ({
    ...project,
    ...t.projects[index],
    title: t.projects[index].title,
    gallery: project.gallery.map((image, imageIndex) => ({ ...image, title: t.projects[index].gallery[imageIndex] ?? image.title }))
  }));
  const localizedJourney = journey.map((item, index) => ({ ...item, title: t.journey.items[index], description: t.journey.descriptions[index] }));
  const localizedCertificates = certificates.map((item, index) => ({ ...item, title: t.certificates.items[index], issuer: t.certificates.issuers[index] }));

  const changeLanguage = () => setLanguage((current) => {
    const next = current === "en" ? "vi" : "en";
    localStorage.setItem("portfolio-language", next);
    return next;
  });

  const dismissDeviceNotice = () => {
    sessionStorage.setItem("portfolio-device-notice-dismissed", "1");
    setShowDeviceNotice(false);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { y: 70, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.1, ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 84%" }
          }
        );
      });

      gsap.utils.toArray(".line-reveal").forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1, duration: 1.2, ease: "power4.inOut",
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });

      gsap.to(".hero-orbit", {
        rotation: 360,
        duration: 26,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".hero-grid", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-phone-wrap", {
        y: -80,
        rotate: 7,
        scale: 0.92,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });

      gsap.to(".hero-person", {
        y: -45,
        x: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <>
      {showDeviceNotice && (
        <div className="device-notice-backdrop" role="presentation">
          <section className="device-notice" role="dialog" aria-modal="true" aria-labelledby="device-notice-title">
            <span className="device-notice-kicker">{language === "vi" ? "GỢI Ý TRẢI NGHIỆM" : "VIEWING NOTE"}</span>
            <h2 id="device-notice-title">{language === "vi" ? "Tốt nhất trên máy tính." : "Best viewed on desktop."}</h2>
            <p>{language === "vi"
              ? "Portfolio hiện được tối ưu cho màn hình máy tính. Bạn vẫn có thể tiếp tục xem trên thiết bị này."
              : "This portfolio is currently optimized for desktop screens. You can still continue on this device."}</p>
            <button className="device-notice-continue" type="button" onClick={dismissDeviceNotice}>
              {language === "vi" ? "TIẾP TỤC VÀO TRANG" : "CONTINUE TO SITE"}<span aria-hidden="true">↗</span>
            </button>
          </section>
        </div>
      )}
      <CustomCursor />
      <Navbar language={language} onToggleLanguage={changeLanguage} t={t} />

      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Projects
          projects={localizedProjects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          language={language}
          t={t.work}
          lenisRef={lenisRef}
        />
        <Experience t={t.experience} />
        <Technical t={t.technical} />
        <Education t={t.education} language={language} />
        <Journey journey={localizedJourney} t={t.journey} />
        <Certificates certificates={localizedCertificates} t={t.certificates} />
        <Contact t={t.contact} />
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} {profile.name.toUpperCase()}</div>
        <div>{t.footer}</div>
      </footer>
    </>
  );
}
