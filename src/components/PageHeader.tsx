import { useEffect } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  useEffect(() => {
    document.title = `${title} — رفيق المسلم`;
  }, [title]);

  return (
    <header className="bg-secondary-c border-b border-c py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-c mb-3">{title}</h1>
        {subtitle && (
          <p className="text-secondary-c text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
