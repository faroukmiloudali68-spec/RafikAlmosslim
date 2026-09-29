import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HomePage from "@/pages/HomePage";
import FeaturesPage from "@/pages/FeaturesPage";
import GuidePage from "@/pages/GuidePage";
import InstallPage from "@/pages/InstallPage";
import QuranPage from "@/pages/QuranPage";
import HadithPage from "@/pages/HadithPage";
import SettingsPage from "@/pages/SettingsPage";
import SourcesPage from "@/pages/SourcesPage";
import ContactPage from "@/pages/ContactPage";

type Page =
  | "home"
  | "features"
  | "guide"
  | "install"
  | "quran"
  | "hadith"
  | "settings"
  | "sources"
  | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#/", "").replace("#", "");
    if (hash) {
      const valid: string[] = ["home", "features", "guide", "install", "quran", "hadith", "settings", "sources", "contact"];
      if (valid.includes(hash)) {
        setPage(hash as Page);
      }
    }
  }, []);

  const handleNavigate = (newPage: string) => {
    setPage(newPage as Page);
    window.location.hash = newPage;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage />;
      case "guide":
        return <GuidePage />;
      case "install":
        return <InstallPage onNavigate={handleNavigate} />;
      case "quran":
        return <QuranPage />;
      case "hadith":
        return <HadithPage />;
      case "settings":
        return <SettingsPage />;
      case "sources":
        return <SourcesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-c flex flex-col">
      <a href="#main-content" className="skip-link">
        تخطّى إلى المحتوى الرئيسي
      </a>
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main id="main-content" className="flex-1" role="main">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <BackToTop />
    </div>
  );
}
