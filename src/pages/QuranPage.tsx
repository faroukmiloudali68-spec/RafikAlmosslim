import { BookMarked, List, Map, Bookmark, Shuffle, Play, ScrollText, Copy, HelpCircle, Languages, Type, Search, Share2, Download, Settings } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { QURAN_FEATURES, QURAN_TOPIC_INDEX, QURAN_SETTINGS } from "@/data/content";

const ICON_MAP: Record<string, typeof List> = {
  List, Map, Bookmark, Shuffle, Play, ScrollText, Copy, HelpCircle, Languages, Type, Search, Share2,
};

export default function QuranPage() {
  return (
    <div className="fade-in">
      <PageHeader
        title="القرآن الكريم"
        subtitle="المصحف الكامل بتلاوة وتفسير متعدد، متشابهات، أسباب نزول، وإعراب"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="card mb-8 text-center bg-gradient-to-br from-[#0d7377] to-[#0a5c5f] text-white border-0">
          <BookMarked size={48} className="mx-auto mb-4 opacity-90" />
          <p className="font-quran text-2xl leading-loose mb-4">
            ﴿ إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ ﴾
          </p>
          <p className="text-white/80">
            قسم ضخم عمل عليه المطوّر كثيراً، يشمل كل ما تحتاجه من ميزات للقرآن الكريم
          </p>
        </div>

        {/* Features Grid */}
        <section className="mb-12" aria-labelledby="quran-features-heading">
          <h2 id="quran-features-heading" className="section-title mb-6">ميزات القرآن الكريم</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QURAN_FEATURES.map((feature) => {
              const IconComp = ICON_MAP[feature.icon] || List;
              return (
                <div key={feature.title} className="card flex flex-col gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary-c text-primary-brand">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-c">{feature.title}</h3>
                  <p className="text-secondary-c text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Topic Index */}
        <section className="card mb-8" aria-labelledby="topic-index-heading">
          <h2 id="topic-index-heading" className="section-title mb-4">الفهرس الموضوعي للآيات</h2>
          <p className="text-secondary-c mb-6">
            يمكن تشغيلها تلاوة من البداية. إليكم الفهرس الموضوعي:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QURAN_TOPIC_INDEX.map((topic) => (
              <div
                key={topic.label}
                className="flex items-center justify-between bg-tertiary-c rounded-xl px-4 py-3"
              >
                <span className="text-primary-c font-medium">{topic.label}</span>
                <span className="inline-flex items-center justify-center min-w-[3rem] h-8 px-2 rounded-full bg-primary-brand text-white text-sm font-bold">
                  {topic.count}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section className="card" aria-labelledby="quran-settings-heading">
          <div className="flex items-center gap-3 mb-4">
            <Settings size={24} className="text-primary-brand" />
            <h2 id="quran-settings-heading" className="section-title m-0">إعدادات المصحف</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QURAN_SETTINGS.map((setting) => (
              <div key={setting.title} className="bg-tertiary-c rounded-xl p-4">
                <h3 className="font-bold text-primary-c mb-1">{setting.title}</h3>
                <p className="text-secondary-c text-sm">{setting.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Note */}
        <section className="card mt-8 text-center" aria-labelledby="download-heading">
          <Download size={40} className="mx-auto mb-4 text-primary-brand" />
          <h2 id="download-heading" className="section-title mb-2">تنزيل القرآن</h2>
          <p className="text-secondary-c">
            يمكنكم تنزيل القرآن ملفاً ملفاً مع شريط تقدّم (6348 ملفاً تقريباً)،
            أو تنزيل سورة كاملة دفعة واحدة للعمل دون إنترنت.
          </p>
        </section>
      </div>
    </div>
  );
}
