"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Users, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import TopNav from "@/components/layout/TopNav";
import KpiCard from "@/components/ui/KpiCard";
import { ClientOnly } from "@/components/charts/DynamicCharts";

const retencaoData = [
  { mes: "Set", enterprise: 82, arNet: 64 },
  { mes: "Out", enterprise: 87, arNet: 70 },
  { mes: "Nov", enterprise: 91, arNet: 75 },
  { mes: "Dez", enterprise: 85, arNet: 68 },
  { mes: "Jan", enterprise: 93, arNet: 79 },
  { mes: "Fev", enterprise: 96, arNet: 83 },
];

const atRiskClients = [
  { name: "Rodrigo Alves", initials: "RA", risk: 87, reason: "Sem engajamento há 45 dias", color: "#ef4444" },
  { name: "Camila Torres", initials: "CT", risk: 72, reason: "NPS baixo — score 4", color: "#ef4444" },
  { name: "Felipe Souza", initials: "FS", risk: 58, reason: "Pagamentos atrasados", color: "#f59e0b" },
  { name: "Isabela Martins", initials: "IM", risk: 44, reason: "Pouco uso da plataforma", color: "#f59e0b" },
  { name: "Lucas Pereira", initials: "LP", risk: 31, reason: "Suporte aberto há 7 dias", color: "#f59e0b" },
];

const healthDistribution = [
  { label: "Saudável", value: 68, color: "#00d68f" },
  { label: "Em observação", value: 24, color: "#f59e0b" },
  { label: "Em risco", value: 8, color: "#ef4444" },
];

const npsData = [
  { label: "Detratores (0-6)", value: 8, color: "#ef4444", width: "8%" },
  { label: "Neutros (7-8)", value: 22, color: "#f59e0b", width: "22%" },
  { label: "Promotores (9-10)", value: 70, color: "#00d68f", width: "70%" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="card py-2 px-3 text-sm shadow-lg">
        <p className="text-[var(--text-secondary)] mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} className="font-semibold" style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
}

function HealthGauge({ score }: { score: number }) {
  const radius = 70;
  const circumference = Math.PI * radius;
  const fillPercent = score / 100;
  const dashOffset = circumference * (1 - fillPercent);

  const color =
    score >= 70 ? "#00d68f" : score >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="100" viewBox="0 0 180 110">
        {/* Background arc */}
        <path
          d="M 20 90 A 70 70 0 0 1 160 90"
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Color arc */}
        <path
          d="M 20 90 A 70 70 0 0 1 160 90"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
        {/* Score text */}
        <text x="90" y="82" textAnchor="middle" fontSize="28" fontWeight="700" fill={color}>
          {score}
        </text>
        <text x="90" y="100" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
          / 100
        </text>
      </svg>
      <p className="text-xs text-[var(--text-secondary)] mt-1">Score de Saúde</p>
    </div>
  );
}

export default function CustomerSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav
        title="Dashboard de Customer Success"
        subtitle="Métricas de satisfação e retenção"
      />

      <div className="p-6 space-y-6">
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-4">
          <KpiCard
            label="Clientes Ativos"
            value="1.503"
            change="+3.2%"
            trend="up"
            color="var(--accent-green)"
            icon={<Users size={16} color="var(--accent-green)" />}
          />
          <KpiCard
            label="MRR"
            value="R$33.8M"
            change="+8.7%"
            trend="up"
            color="var(--accent-purple)"
            icon={<DollarSign size={16} color="var(--accent-purple)" />}
          />
          <KpiCard
            label="ARR"
            value="R$52.8M"
            change="+11.2%"
            trend="up"
            color="var(--accent-blue)"
            icon={<TrendingUp size={16} color="var(--accent-blue)" />}
          />
          <KpiCard
            label="Churn Rate"
            value="0.7%"
            change="-0.2%"
            trend="up"
            color="var(--accent-green)"
            icon={<AlertTriangle size={16} color="var(--accent-green)" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Retention & Revenue Chart */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">Retenção & Revenue</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Últimos 6 meses — taxa de retenção (%)
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: "var(--accent-green)" }} />
                  Plano Enterprise
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: "var(--accent-blue)" }} />
                  AR Net
                </span>
              </div>
            </div>
            <ClientOnly>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={retencaoData}
                margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                barCategoryGap="30%"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
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
                  domain={[50, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar dataKey="enterprise" name="Plano Enterprise" fill="#00d68f" radius={[4, 4, 0, 0]} />
                <Bar dataKey="arNet" name="AR Net" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            </ClientOnly>
            <div className="mt-3 flex items-center gap-2 pt-3 border-t border-[var(--border-color)]">
              <span className="text-xs text-[var(--text-secondary)]">Média de retenção:</span>
              <span className="text-sm font-bold text-[var(--accent-green)]">50</span>
              <span className="text-xs text-[var(--text-secondary)]">clientes recuperados no período</span>
            </div>
          </div>

          {/* Health Score Card */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">Health Score</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Score médio da base ativa
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#f59e0b22] text-[var(--accent-orange)] font-medium">
                Atenção
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <HealthGauge score={28} />

              <div className="flex-1 space-y-3">
                {healthDistribution.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--text-secondary)]">{item.label}</span>
                      <span className="text-xs font-semibold" style={{ color: item.color }}>
                        {item.value}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.value}%`,
                          background: item.color,
                          borderRadius: "999px",
                          transition: "width 0.5s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#ef444411] border border-[#ef444433] flex items-center gap-2">
              <AlertTriangle size={14} className="text-[var(--accent-red)] flex-shrink-0" />
              <p className="text-xs text-[var(--text-secondary)]">
                <span className="text-[var(--accent-red)] font-semibold">Clientes em risco médio: 4.2%</span>
                {" "}— requer ação imediata do time de CS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: NPS + Churn Risk */}
        <div className="grid grid-cols-2 gap-4">
          {/* NPS / Satisfaction */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">Satisfação do Cliente</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  NPS — Net Promoter Score
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[var(--accent-green)]">+62</p>
                <p className="text-xs text-[var(--text-secondary)]">NPS Score</p>
              </div>
            </div>

            {/* Satisfaction Bar */}
            <div className="flex rounded-full overflow-hidden h-4 mb-3">
              <div className="h-full bg-[var(--accent-red)]" style={{ width: "8%" }} />
              <div className="h-full bg-[var(--accent-orange)]" style={{ width: "22%" }} />
              <div className="h-full bg-[var(--accent-green)]" style={{ width: "70%" }} />
            </div>

            <div className="space-y-2">
              {npsData.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <span className="text-xs text-[var(--text-secondary)]">{item.label}</span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-color)] grid grid-cols-3 gap-3">
              {[
                { label: "Respondentes", value: "847" },
                { label: "Taxa Resposta", value: "56.4%" },
                { label: "Vs. mês ant.", value: "+4pts" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-base font-bold">{stat.value}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Churn Risk */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">Risco de Churn</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Clientes que precisam de atenção agora
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#ef444422] text-[var(--accent-red)] font-medium">
                {atRiskClients.length} clientes
              </span>
            </div>

            <div className="space-y-2">
              {atRiskClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `${client.color}22`, color: client.color }}
                  >
                    {client.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{client.name}</p>
                    <p className="text-xs text-[var(--text-muted)] truncate">{client.reason}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${client.color}22`,
                        color: client.color,
                      }}
                    >
                      {client.risk}% risco
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2 rounded-lg border border-[var(--accent-red)] text-[var(--accent-red)] text-sm font-medium hover:bg-[#ef444411] transition-colors">
              Ver todos os clientes em risco →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
