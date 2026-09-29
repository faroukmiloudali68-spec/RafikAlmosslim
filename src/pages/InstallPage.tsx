import { Download, CheckCircle2, FileDown, Info } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { INSTALL_STEPS, CUSTOM_SOUND_PATH, DOWNLOAD_URL } from "@/data/content";
import CodeBlock from "@/components/CodeBlock";

interface InstallPageProps {
  onNavigate: (page: string) => void;
}

export default function InstallPage({ onNavigate }: InstallPageProps) {
  return (
    <div className="fade-in">
      <PageHeader
        title="تحميل وتثبيت الإضافة"
        subtitle="خطوات بسيطة لتحميل وتثبيت رفيق المسلم على قارئ الشاشة Jieshuo"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Download CTA */}
        <div className="card text-center mb-8 bg-gradient-to-br from-[#0d7377] to-[#0a5c5f] text-white border-0">
          <Download size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">حمّل رفيق المسلم الآن</h2>
          <p className="text-white/80 mb-6">من متجر إضافات Jieshuo — مجاناً</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <Download size={20} />
            تحميل مباشر
          </a>
        </div>

        {/* Installation Steps */}
        <section className="card mb-8" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-title mb-6">خطوات التثبيت</h2>
          <ol className="space-y-4">
            {INSTALL_STEPS.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-brand text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-secondary-c leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* First Run */}
        <section className="card mb-8" aria-labelledby="first-run-heading">
          <h2 id="first-run-heading" className="section-title mb-4">أول تشغيل وتنزيل الملفات الأساسية</h2>
          <div className="prose-arabic">
            <p>
              عند فتح الإضافة أول مرة، ستسمعون صوت البسملة، ثم سيظهر لكم خيار:
              <strong> تنزيل الملفات الأساسية</strong>.
            </p>
            <p>
              وهذه ملفات القرآن الأساسية اللازمة لعمل قسم المصحف والتفسير،
              حجمها حوالي <strong>20 ميجابايت</strong>، وتحتاج إلى اتصال بالإنترنت.
            </p>

            <h3 className="text-lg font-bold text-primary-c mt-4 mb-2">لديكم خياران:</h3>
            <ul>
              <li><strong>موافق:</strong> لبدء تنزيل ملفات القرآن الأساسية فوراً.</li>
              <li><strong>إلغاء:</strong> للمتابعة دون تنزيلها الآن (يمكنكم تنزيلها لاحقاً من داخل الإضافة).</li>
            </ul>

            <div className="bg-tertiary-c border-r-4 border-primary-brand rounded-lg p-4 my-3">
              <p className="text-secondary-c m-0 flex items-start gap-2">
                <Info size={18} className="text-primary-brand flex-shrink-0 mt-1" />
                أنصحكم بالضغط على موافق وانتظار اكتمال التنزيل.
              </p>
            </div>
          </div>
        </section>

        {/* Custom Sound Path */}
        <section className="card mb-8" aria-labelledby="custom-sound-heading">
          <h2 id="custom-sound-heading" className="section-title mb-4">مسار استيراد الأصوات المخصصة</h2>
          <p className="text-secondary-c mb-4">
            لاستيراد أذان مخصص أو ملف صوتي، ضعوا الملف في المسار التالي ثم اضغطوا تحديث:
          </p>
          <CodeBlock code={CUSTOM_SOUND_PATH} />
          <p className="text-muted-c text-sm mt-2">
            الصيغ المدعومة: mp3, wav, m4a, ogg
          </p>
        </section>

        {/* Next Steps */}
        <section className="card text-center" aria-labelledby="next-heading">
          <h2 id="next-heading" className="section-title mb-4">ماذا بعد التثبيت؟</h2>
          <p className="text-secondary-c mb-6">
            بعد تثبيت الإضافة وتنزيل الملفات الأساسية، ابدؤوا بتحديد موقعكم للحصول على مواقيت صلاة دقيقة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => onNavigate("guide")} className="btn btn-primary">
              <FileDown size={20} />
              الشرح الكامل
            </button>
            <button onClick={() => onNavigate("features")} className="btn btn-outline">
              <CheckCircle2 size={20} />
              استعراض المميزات
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
