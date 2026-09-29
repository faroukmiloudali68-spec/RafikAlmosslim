import {
  MapPin,
  Sunrise,
  CloudSun,
  BookOpen,
  CircleDot,
  Clock,
  Heart,
  CalendarHeart,
  Settings,
  BookMarked,
  Library,
  Info,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { GUIDE_SECTIONS } from "@/data/content";
import CodeBlock from "@/components/CodeBlock";

const SECTION_ICONS: Record<string, typeof Clock> = {
  MapPin,
  Sunrise,
  CloudSun,
  BookOpen,
  CircleDot,
  Clock,
  Heart,
  CalendarHeart,
  Settings,
  BookMarked,
  Library,
  Info,
};

export default function FeaturesPage() {
  const sections = GUIDE_SECTIONS.filter(
    (s) => !["intro", "install", "main-menu", "tips", "conclusion"].includes(s.id)
  );

  return (
    <div className="fade-in">
      <PageHeader
        title="مميزات رفيق المسلم"
        subtitle="استعراض كامل لجميع أقسام وميزات الإضافة بالتفصيل"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section) => {
            const IconComponent = SECTION_ICONS[section.icon] || Info;
            return (
              <section
                key={section.id}
                className="card"
                aria-labelledby={`feature-${section.id}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-brand text-white flex-shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <h2 id={`feature-${section.id}`} className="text-xl font-bold text-primary-c">
                    {section.title}
                  </h2>
                </div>

                <div className="prose-arabic">
                  {section.content.map((block, idx) => {
                    if (block.type === "paragraph") {
                      return <p key={idx}>{block.text}</p>;
                    }
                    if (block.type === "subheading") {
                      return <h3 key={idx} className="text-lg font-bold text-primary-c mt-4 mb-2">{block.subheading}</h3>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={idx}>
                          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      );
                    }
                    if (block.type === "ordered-list") {
                      return (
                        <ol key={idx} className="list-decimal pr-6 mb-4">
                          {block.items?.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                        </ol>
                      );
                    }
                    if (block.type === "note") {
                      return (
                        <div key={idx} className="bg-tertiary-c border-r-4 border-primary-brand rounded-lg p-4 my-3">
                          <p className="text-secondary-c m-0">{block.text}</p>
                        </div>
                      );
                    }
                    if (block.type === "code") {
                      return <CodeBlock key={idx} code={block.code!} />;
                    }
                    return null;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
