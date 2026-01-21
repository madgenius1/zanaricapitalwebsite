

export default function TrustItem({
  icon,
  title,
  subtitle,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: "green" | "blue" | "yellow" ;
}) {
  const colors = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-600",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
    yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}