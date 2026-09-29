import {
  Download,
  BookOpen,
  Sparkles,
  User,
  ChevronLeft,
  Calendar,
  Clock,
  Bell,
  Heart,
  CircleDot,
  BookMarked,
  ScrollText,
  Library,
  CalendarHeart,
  Moon,
  Save,
} from "lucide-react";
import {
  PROJECT_NAME,
  DEVELOPER_NAME,
  DEVELOPER_PHRASE,
  VERSION,
  UPDATE_DATE,
  HOME_FEATURES,
  DOWNLOAD_URL,
} from "@/data/content";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const FEATURE_ICONS: Record<string, typeof Clock> = {
  Clock,
  Bell,
  BookOpen,
  CircleDot,
  BookMarked,
  ScrollText,
  Library,
  CalendarHeart,
  Moon,
  Save,
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0d7377] to-[#0a5c5f] text-white"
        aria-label="القسم الرئيسي"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#c99a2e]/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <span className="text-4xl font-bold">ر</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {PROJECT_NAME}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-2 font-medium">
              النظام الإسلامي الذكي
            </p>
            <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              إضافة متكاملة لقارئ الشاشة الصيني Jieshuo، تجمع كل ما يحتاجه المسلم في يومه:
              مواقيت الصلاة، الأذان، الأذكار، القرآن الكريم، موسوعة الحديث النبوي، والسبحة الإلكترونية.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-sm border border-white/20">
                <Sparkles size={14} />
                الإصدار {VERSION}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-sm border border-white/20">
                <Calendar size={14} />
                {UPDATE_DATE}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-sm border border-white/20">
                <User size={14} />
                {DEVELOPER_NAME}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <Download size={20} />
                تحميل الإضافة
              </a>
              <button
                onClick={() => onNavigate("guide")}
                className="btn btn-outline text-white border-white/40 hover:bg-white hover:text-[#0d7377]"
              >
                <BookOpen size={20} />
                شرح الإضافة
              </button>
              <button
                onClick={() => onNavigate("features")}
                className="btn btn-ghost text-white hover:bg-white/10"
              >
                المميزات
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="btn btn-ghost text-white hover:bg-white/10"
              >
                حول المشروع
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="features-heading">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold text-primary-c mb-3">
            مميزات الإضافة
          </h2>
          <p className="text-secondary-c text-lg max-w-2xl mx-auto">
            كل ما تحتاجه في رفيق واحد ذكي يرافقك طوال يومك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_FEATURES.map((feature) => {
            const IconComponent = FEATURE_ICONS[feature.icon] || Sparkles;
            return (
              <div key={feature.title} className="card flex flex-col gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary-c text-primary-brand">
                  <IconComponent size={26} />
                </div>
                <h3 className="text-lg font-bold text-primary-c">{feature.title}</h3>
                <p className="text-secondary-c text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate("features")}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            عرض جميع المميزات
            <ChevronLeft size={20} />
          </button>
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-tertiary-c py-16" aria-labelledby="developer-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-brand text-white mb-4">
            <User size={28} />
          </div>
          <h2 id="developer-heading" className="text-2xl font-bold text-primary-c mb-2">
            {DEVELOPER_NAME}
          </h2>
          <p className="text-accent-brand text-lg font-medium mb-6">{DEVELOPER_PHRASE}</p>
          <p className="text-secondary-c text-lg leading-relaxed max-w-2xl mx-auto">
            مطوّر إضافة «رفيق المسلم»، مستخدم لقارئ الشاشة Jieshuo مثلكم تماماً،
            أنشأ هذه الإضافة ليضع بين أيديكم كل ما يحتاجه المسلم في يومه في مكان واحد.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-c mb-4">ابدأ رحلتك مع رفيق المسلم</h2>
        <p className="text-secondary-c text-lg mb-8 max-w-2xl mx-auto">
          حمّل الإضافة الآن وجرّبها، ولا تنسَني من صالح دعائك.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => onNavigate("install")} className="btn btn-primary">
            <Download size={20} />
            كيفية التثبيت
          </button>
          <button onClick={() => onNavigate("guide")} className="btn btn-outline">
            <BookOpen size={20} />
            الشرح الكامل
          </button>
        </div>
      </section>
    </div>
  );
}
