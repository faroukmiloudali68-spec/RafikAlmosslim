import { BookOpen, Heart, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SOURCES_INFO, DEVELOPER_NAME } from "@/data/content";

export default function SourcesPage() {
  return (
    <div className="fade-in">
      <PageHeader
        title="المصادر وحقوق الملكية"
        subtitle="نسب الأعمال إلى أصحابها بشفافية كاملة"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="card mb-8">
          <div className="flex items-start gap-4">
            <Heart size={28} className="text-primary-brand flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-primary-c mb-2">شكر وتقدير</h2>
              <p className="text-secondary-c leading-relaxed">
                أعلن هنا بشفافية أن منطق مواقيت الصلاة اعتمد جزئياً على سكربت ساعة المسلم
                مع إعادة تصميم كاملة مني، وأن بعض ملفات الأذكار الصوتية من إضافة الذاكر
                لقارئ الشاشة NVDA، وملفات القرآن من إضافة القرآن الكريم.
                وأتقدّم بالشكر الجزيل على التعاون والسماح باستخدام المصادر، جزاهم الله خيراً ونفع به.
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="section-title mb-6">المصادر</h2>
          <div className="space-y-4">
            {SOURCES_INFO.map((source) => (
              <div key={source.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary-c text-primary-brand flex-shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary-c mb-1">{source.title}</h3>
                    <p className="text-secondary-c text-sm leading-relaxed mb-2">{source.description}</p>
                    <div className="inline-flex items-center gap-2 bg-tertiary-c rounded-lg px-3 py-1.5">
                      <Users size={16} className="text-primary-brand" />
                      <span className="text-primary-c text-sm font-medium">{source.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Developer */}
        <section className="card mt-8 text-center" aria-labelledby="developer-heading">
          <h2 id="developer-heading" className="section-title mb-2">المطوّر</h2>
          <p className="text-xl font-bold text-primary-c mb-1">{DEVELOPER_NAME}</p>
          <p className="text-accent-brand">من تطوير أيمن قاسم</p>
        </section>
      </div>
    </div>
  );
}
