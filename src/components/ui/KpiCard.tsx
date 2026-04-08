import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  color?: string;
}

export default function KpiCard({ label, value, change, trend = "neutral", icon, color }: KpiCardProps) {
  return (
    <div className="kpi-card flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide">
          {label}
        </span>
        {icon && (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: color ? `${color}20` : "var(--bg-secondary)" }}
          >
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold" style={{ color: color || "var(--text-primary)" }}>
          {value}
        </span>
        {change && (
          <span
            className={`flex items-center gap-0.5 text-xs font-medium mb-1 ${
              trend === "up"
                ? "text-[var(--accent-green)]"
                : trend === "down"
                ? "text-[var(--accent-red)]"
                : "text-[var(--text-secondary)]"
            }`}
          >
            {trend === "up" && <TrendingUp size={12} />}
            {trend === "down" && <TrendingDown size={12} />}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
