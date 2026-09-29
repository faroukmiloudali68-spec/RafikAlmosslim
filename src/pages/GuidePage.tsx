import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import { GUIDE_SECTIONS } from "@/data/content";
import Icon from "@/components/Icon";

export default function GuidePage() {
  const [openSection, setOpenSection] = useState<string>("intro");

  useEffect(() => {
    document.title = "شرح رفيق المسلم — رفيق المسلم";
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpenSection(id);
    }
  };

  return (
    <div className="fade-in">
      <PageHeader
        title="شرح رفيق المسلم"
        subtitle="الشرح الكامل والمفصّل لكل أقسام الإضافة، مرتباً بشكل احترافي"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <nav aria-label="جدول المحتويات" className="card">
                <h2 className="text-lg font-bold text-primary-c mb-4">جدول المحتويات</h2>
                <ol className="space-y-1">
                  {GUIDE_SECTIONS.map((section, idx) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center gap-2 w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                          openSection === section.id
                            ? "bg-primary-brand text-white"
                            : "text-secondary-c hover:bg-tertiary-c"
                        }`}
                        aria-current={openSection === section.id ? "true" : undefined}
                      >
                        <span className="text-xs font-bold opacity-60">{idx + 1}.</span>
                        <Icon name={section.icon} size={16} />
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {GUIDE_SECTIONS.map((section, idx) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="card scroll-mt-20"
                aria-labelledby={`heading-${section.id}`}
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-c">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-tertiary-c text-primary-brand text-sm font-bold">
                    {idx + 1}
                  </span>
                  <Icon name={section.icon} size={24} className="text-primary-brand" />
                  <h2 id={`heading-${section.id}`} className="text-xl font-bold text-primary-c">
                    {section.title}
                  </h2>
                </div>

                <div className="prose-arabic">
                  {section.content.map((block, bidx) => {
                    if (block.type === "paragraph") {
                      return <p key={bidx}>{block.text}</p>;
                    }
                    if (block.type === "subheading") {
                      return <h3 key={bidx} className="text-lg font-bold text-primary-c mt-4 mb-2">{block.subheading}</h3>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={bidx}>
                          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      );
                    }
                    if (block.type === "ordered-list") {
                      return (
                        <ol key={bidx} className="list-decimal pr-6 mb-4">
                          {block.items?.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                        </ol>
                      );
                    }
                    if (block.type === "note") {
                      return (
                        <div key={bidx} className="bg-tertiary-c border-r-4 border-primary-brand rounded-lg p-4 my-3">
                          <p className="text-secondary-c m-0">{block.text}</p>
                        </div>
                      );
                    }
                    if (block.type === "code") {
                      return <CodeBlock key={bidx} code={block.code!} />;
                    }
                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
