import Icon from "./Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-tertiary-c text-primary-brand">
        <Icon name={icon} size={26} />
      </div>
      <h3 className="text-lg font-bold text-primary-c">{title}</h3>
      <p className="text-secondary-c text-sm leading-relaxed">{description}</p>
    </div>
  );
}
