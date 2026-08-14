import { useRef, useState } from "react";

export default function TiltCard({ className, children }) {
  const ref = useRef(null);
  const [tf, setTf] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTf(`perspective(900px) rotateX(${(-py * 9).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg)`);
  };
  const handleLeave = () => setTf("perspective(900px) rotateX(0deg) rotateY(0deg)");

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: tf, transition: "transform .18s ease, background .2s ease, border-color .2s ease" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
