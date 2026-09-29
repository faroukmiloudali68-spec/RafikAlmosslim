import { BookOpen, ScrollText, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { HADITH_BOOKS } from "@/data/content";

const ICON_MAP: Record<string, typeof BookOpen> = {
  BookOpen,
  ScrollText,
  Sparkles,
};

export default function HadithPage() {
  return (
    <div className="fade-in">
      <PageHeader
        title="موسوعة الحديث النبوي"
        subtitle="مكتبة شاملة لكتب الحديث الشريف، تُنزَّل كتاباً كتاباً عند الحاجة"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="card mb-8 text-center bg-gradient-to-br from-[#0d7377] to-[#0a5c5f] text-white border-0">
          <p className="font-quran text-2xl leading-loose mb-4">
            ﴿ وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۖ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ ﴾
          </p>
          <p className="text-white/80">
            تضم موسوعة الحديث النبوي كتباً تُنزَّل واحداً تلو الآخر عند فتحها،
            وهو مناسب للأجهزة محدودة الذاكرة.
          </p>
        </div>

        {/* Books Grid */}
        <section aria-labelledby="books-heading">
          <h2 id="books-heading" className="section-title mb-6">الكتب المتوفرة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HADITH_BOOKS.map((book) => {
              const IconComp = ICON_MAP[book.icon] || BookOpen;
              return (
                <div key={book.name} className="card flex flex-col gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary-c text-primary-brand">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-c">{book.name}</h3>
                  <p className="text-secondary-c text-sm leading-relaxed">{book.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Note */}
        <section className="card mt-8" aria-labelledby="note-heading">
          <h2 id="note-heading" className="section-title mb-2">ملاحظة</h2>
          <p className="text-secondary-c">
            جميع الكتب تُنزَّل عند أول فتح لها، مما يوفر مساحة التخزين على أجهزتكم.
            يمكنكم نسخ ومشاركة نصوص الأحاديث بسهولة.
          </p>
        </section>
      </div>
    </div>
  );
}
