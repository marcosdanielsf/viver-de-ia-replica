"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, Target, TrendingUp } from "lucide-react";
import TopNav from "@/components/layout/TopNav";
import KpiCard from "@/components/ui/KpiCard";
import { ClientOnly } from "@/components/charts/DynamicCharts";

const monthlyData = [
  { mes: "Jan", receita: 320000 },
  { mes: "Fev", receita: 480000 },
  { mes: "Mar", receita: 410000 },
  { mes: "Abr", receita: 620000 },
  { mes: "Mai", receita: 540000 },
  { mes: "Jun", receita: 710000 },
  { mes: "Jul", receita: 680000 },
  { mes: "Ago", receita: 790000 },
  { mes: "Set", receita: 860000 },
  { mes: "Out", receita: 740000 },
  { mes: "Nov", receita: 920000 },
  { mes: "Dez", receita: 1050000 },
];

const clients = [
  { name: "Marina Costa", role: "Plano Diamond", initials: "MC", status: "Ativo", color: "#a855f7" },
  { name: "Milton Santos", role: "Plano Diamond", initials: "MS", status: "Ativo", color: "#3b82f6" },
  { name: "Flavia Leal", role: "Plano Premium", initials: "FL", status: "Ativo", color: "#00d68f" },
  { name: "Gabriella R.", role: "Plano Starter", initials: "GR", status: "Ativo", color: "#f59e0b" },
  { name: "Alberto C.", role: "Plano Premium", initials: "AC", status: "Pendente", color: "#ec4899" },
  { name: "Fernanda L.", role: "Plano Diamond", initials: "FE", status: "Ativo", color: "#14b8a6" },
  { name: "Diana S.", role: "Plano Starter", initials: "DS", status: "Ativo", color: "#ef4444" },
  { name: "Rafael M.", role: "Plano Premium", initials: "RM", status: "Pendente", color: "#a855f7" },
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `R$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `R$${(value / 1000).toFixed(0)}K`;
  return `R$${value}`;
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="card py-2 px-3 text-sm shadow-lg">
        <p className="text-[var(--text-secondary)] mb-1">{label}</p>
        <p className="font-semibold text-[var(--accent-green)]">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav
        title="Home"
        subtitle="Acompanhe seus resultados em tempo real"
      />

      <div className="p-6 space-y-6">
        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-4">
          <KpiCard
            label="Investido"
            value="R$197.540"
            color="var(--accent-green)"
            icon={<DollarSign size={16} color="var(--accent-green)" />}
          />
          <KpiCard
            label="Meta"
            value="R$10.000.000"
            color="var(--accent-purple)"
            icon={<Target size={16} color="var(--accent-purple)" />}
          />
          <KpiCard
            label="Receita Gerada"
            value="R$5.933.440"
            change="+12.5%"
            trend="up"
            color="var(--accent-blue)"
            icon={<TrendingUp size={16} color="var(--accent-blue)" />}
          />
        </div>

        {/* Main content: chart + clients */}
        <div className="grid grid-cols-[1fr_300px] gap-4">
          {/* Area Chart */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">Resultado por Período</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Receita mensal — 2024
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent-green-dim)] text-[var(--accent-green)] font-medium">
                12 meses
              </span>
            </div>
            <ClientOnly>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart
                data={monthlyData}
                margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="receitaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d68f" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00d68f" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  vertical={false}
                />
                <XAxis
                  dataKey="mes"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={formatCurrency}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--border-color)", strokeWidth: 1 }} />
                <Area
                  type="monotone"
                  dataKey="receita"
                  stroke="#00d68f"
                  strokeWidth={2.5}
                  fill="url(#receitaGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#00d68f", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
            </ClientOnly>
          </div>

          {/* Clients List */}
          <div className="card flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-base">Clientes</h2>
              <span className="text-xs text-[var(--text-secondary)]">8 ativos</span>
            </div>
            <div className="space-y-2 flex-1">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--bg-card-hover)] transition-colors cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `${client.color}25`, color: client.color }}
                  >
                    {client.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{client.name}</p>
                    <p className="text-xs text-[var(--text-muted)] truncate">{client.role}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                      client.status === "Ativo"
                        ? "bg-[var(--accent-green-dim)] text-[var(--accent-green)]"
                        : "bg-[#f59e0b22] text-[var(--accent-orange)]"
                    }`}
                  >
                    {client.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Result Row */}
        <div className="card flex items-center gap-6">
          <span className="text-sm font-medium text-[var(--text-secondary)]">Resultado</span>
          <div className="h-4 w-px bg-[var(--border-color)]" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
              <span className="text-sm text-[var(--text-secondary)]">Agendados</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded bg-[var(--accent-green-dim)] text-[var(--accent-green)]">
                12
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
              <span className="text-sm text-[var(--text-secondary)]">Realizados</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded bg-[#3b82f622] text-[var(--accent-blue)]">
                8
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-red)]" />
              <span className="text-sm text-[var(--text-secondary)]">Cancelados</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded bg-[#ef444422] text-[var(--accent-red)]">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
