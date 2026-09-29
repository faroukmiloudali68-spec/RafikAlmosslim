import { Send, MessageCircle, Download, User, Tv } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { DEVELOPER_NAME, CONTACT_LINKS } from "@/data/content";

const ICON_MAP: Record<string, typeof Send> = {
  Send,
  MessageCircle,
  Download,
};

export default function ContactPage() {
  return (
    <div className="fade-in">
      <PageHeader
        title="التواصل"
        subtitle="تواصلوا مع المطوّر وابقوا على اطلاع بالتحديثات والمستجدات"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Developer Contact */}
        <div className="card mb-8 text-center bg-gradient-to-br from-[#0d7377] to-[#0a5c5f] text-white border-0">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
            <User size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">تواصل مع المطور {DEVELOPER_NAME}</h2>
          <p className="text-white/80">
            يسعدني سماع ملاحظاتكم واقتراحاتكم في أي وقت
          </p>
        </div>

        {/* Channel */}
        <div className="card mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary-c text-primary-brand mb-3">
            <Tv size={28} />
          </div>
          <h2 className="text-xl font-bold text-primary-c mb-2">قناة رفيق المسلم للتحديثات والمستجدات</h2>
          <p className="text-secondary-c">
            من خلال القناة ستصلكم جميع التحديثات والميزات الجديدة أولاً بأول
          </p>
        </div>

        {/* Links */}
        <section aria-labelledby="links-heading">
          <h2 id="links-heading" className="section-title mb-6">روابط التواصل</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CONTACT_LINKS.map((link) => {
              const IconComp = ICON_MAP[link.icon] || Send;
              return (
                <div key={link.label} className="card flex flex-col items-center text-center gap-3">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary-c text-primary-brand">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-c">{link.label}</h3>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      <IconComp size={18} />
                      فتح الرابط
                    </a>
                  ) : (
                    <p className="text-muted-c text-sm bg-tertiary-c rounded-lg px-4 py-2 w-full">
                      {link.placeholder}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Note */}
        <div className="card mt-8 text-center">
          <p className="text-secondary-c">
            يمكنكم أيضاً التواصل من داخل الإضافة:
            القائمة الرئيسية ثم حول ثم تواصل مع المطور أو قناة الدعم.
          </p>
        </div>
      </div>
    </div>
  );
}
