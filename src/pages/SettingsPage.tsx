import { Settings, AlertTriangle, RotateCcw } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SETTING_GROUPS, CUSTOM_SOUND_PATH } from "@/data/content";
import CodeBlock from "@/components/CodeBlock";

export default function SettingsPage() {
  return (
    <div className="fade-in">
      <PageHeader
        title="الإعدادات"
        subtitle="تحكّم كامل في كل جوانب الإضافة: الصلاة، الأذان، الأذكار، التنبيهات، والمزيد"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="card mb-8 flex items-start gap-4">
          <Settings size={28} className="text-primary-brand flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-bold text-primary-c mb-2">مرحباً بكم في قسم الإعدادات</h2>
            <p className="text-secondary-c">
              هنا تتحكّمون بكل شيء في إضافة رفيق المسلم. الإعدادات مقسّمة إلى مجموعات منظمة
              لتسهيل الوصول إلى كل ما تحتاجونه.
            </p>
          </div>
        </div>

        {/* Setting Groups */}
        <div className="space-y-6">
          {SETTING_GROUPS.map((group) => (
            <section
              key={group.letter}
              className="card"
              aria-labelledby={`setting-${group.letter}`}
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-c">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-brand text-white text-lg font-bold">
                  {group.letter}
                </span>
                <h2 id={`setting-${group.letter}`} className="text-xl font-bold text-primary-c">
                  {group.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-secondary-c">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-brand mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Add code block for adhan settings */}
              {group.letter === "ح" && (
                <div className="mt-4">
                  <p className="text-secondary-c text-sm mb-2">
                    مسار استيراد الأذان المخصص:
                  </p>
                  <CodeBlock code={CUSTOM_SOUND_PATH} />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Reset Warning */}
        <section
          className="card mt-8 border-2 border-red-400/50"
          aria-labelledby="reset-warning"
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex-shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 id="reset-warning" className="text-lg font-bold text-red-500 mb-2 flex items-center gap-2">
                <RotateCcw size={18} />
                استعادة الإعدادات الافتراضية — تحذير
              </h2>
              <p className="text-secondary-c">
                تحذير: استعادة الإعدادات الافتراضية ستحذف كل شيء (الإعدادات، الملفات المنزّلة،
                الأذان، القرآن، الأذكار، الحديث) ولا يمكن التراجع عنها.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
