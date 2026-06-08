type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>
    </div>
  );
}