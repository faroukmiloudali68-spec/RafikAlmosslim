import { Heart, Download } from "lucide-react";
import { PROJECT_NAME, DEVELOPER_NAME, DEVELOPER_PHRASE, DOWNLOAD_URL } from "@/data/content";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="bg-secondary-c border-t border-c mt-16"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-brand text-white text-lg font-bold">
                ر
              </span>
              <h2 className="text-xl font-bold text-primary-c">{PROJECT_NAME}</h2>
            </div>
            <p className="text-secondary-c text-sm leading-relaxed">
              النظام الإسلامي الذكي لمستخدمي قارئ الشاشة Jieshuo. يجمع كل ما يحتاجه المسلم في يومه.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-primary-c mb-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate("features")} className="text-secondary-c hover:text-primary-brand text-sm transition-colors">
                  المميزات
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("guide")} className="text-secondary-c hover:text-primary-brand text-sm transition-colors">
                  الشرح الكامل
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("install")} className="text-secondary-c hover:text-primary-brand text-sm transition-colors">
                  التثبيت
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="text-secondary-c hover:text-primary-brand text-sm transition-colors">
                  التواصل
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary-c mb-3">المطور</h3>
            <p className="text-secondary-c text-sm mb-2">{DEVELOPER_NAME}</p>
            <p className="text-secondary-c text-sm mb-3">{DEVELOPER_PHRASE}</p>
            <button
              onClick={() => onNavigate("sources")}
              className="text-primary-brand text-sm font-medium hover:underline block mb-2"
            >
              المصادر وحقوق الملكية
            </button>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-brand text-sm font-medium hover:underline"
            >
              <Download size={14} />
              تحميل الإضافة
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-c flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-c text-sm flex items-center gap-1.5">
            <Heart size={14} className="text-accent-brand" />
            {DEVELOPER_PHRASE}
          </p>
          <p className="text-muted-c text-sm">
            {PROJECT_NAME} v2.0 — جميع الحقوق محفوظة لأصحاب المصادر الأصليين
          </p>
        </div>
      </div>
    </footer>
  );
}
