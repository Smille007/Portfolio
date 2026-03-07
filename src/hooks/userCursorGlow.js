import { useEffect } from "react";

const useCursorGlow = () => {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const handleMouseMove = (e) => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (!glow) return;
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
};

export default useCursorGlow;
