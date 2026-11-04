import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!dot.current || !ring.current) return;
      dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      ring.current.animate(
        { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` },
        { duration: 450, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}