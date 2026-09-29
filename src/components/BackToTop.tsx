import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-primary-brand text-white shadow-lg hover:bg-primary-dark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label="العودة إلى أعلى الصفحة"
    >
      <ArrowUp size={24} />
    </button>
  );
}
