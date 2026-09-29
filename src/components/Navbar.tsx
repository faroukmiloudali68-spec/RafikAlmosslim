import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS, PROJECT_NAME } from "@/data/content";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-secondary-c border-b border-c shadow-sm"
      role="navigation"
      aria-label="القائمة الرئيسية"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 text-xl font-bold text-primary-c focus:outline-none focus-visible:ring-2 focus-visible:rounded-lg p-1"
            aria-label={`${PROJECT_NAME} - الصفحة الرئيسية`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-brand text-white text-lg">
              ر
            </span>
            <span>{PROJECT_NAME}</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`nav-link ${currentPage === link.page ? "active" : ""}`}
                aria-current={currentPage === link.page ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl btn-ghost focus:outline-none focus-visible:ring-2"
              aria-label={dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl btn-ghost focus:outline-none focus-visible:ring-2"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 fade-in">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`nav-link text-right ${currentPage === link.page ? "active" : ""}`}
                  aria-current={currentPage === link.page ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
