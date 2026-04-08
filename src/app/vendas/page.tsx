"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ArrowRight } from "lucide-react";
import TopNav from "@/components/layout/TopNav";
import { ClientOnly } from "@/components/charts/DynamicCharts";

// --- Data ---

const paymentData = [
  { name: "Cartão", value: 60, color: "#a855f7" },
  { name: "Boleto", value: 25, color: "#00d68f" },
  { name: "Pix", value: 10, color: "#3b82f6" },
  { name: "Outros", value: 5, color: "#f59e0b" },
];

const planData = [
  { plano: "Familiar", valor: 98400 },
  { plano: "Individual", valor: 64200 },
  { plano: "Empresarial", valor: 34940 },
];

const closingTimeData = [
  { segmento: "Familiares", dias: 21 },
  { segmento: "Individual", dias: 14 },
  { segmento: "Empresarial", dias: 8 },
];

const funnelStages = [
  { label: "Leads", value: 12578, conversion: "15.0%" },
  { label: "MQL", value: 1890, conversion: "24.1%" },
  { label: "SQL", value: 456, conversion: "19.5%" },
  { label: "Proposta", value: 89, conversion: "38.2%" },
  { label: "Ganho", value: 34, conversion: null },
];

const costData = [
  { etapa: "Custo por Lead", valor: "R$8,50" },
  { etapa: "Custo por MQL", valor: "R$41,50" },
  { etapa: "Custo por Agendamento", valor: "R$93,00" },
  { etapa: "Custo por Realizado", valor: "R$151,15" },
  { etapa: "Total", valor: "R$151,1k", isTotal: true },
];

// --- Sub-components ---

const formatReais = (value: number) => {
  if (value >= 1000) return `R$${(value / 1000).toFixed(0)}K`;
  return `R$${value}`;
};

interface TooltipProps {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}

function ChartTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="card py-2 px-3 text-sm shadow-lg">
        <p className="text-[var(--text-secondary)] mb-1">{label}</p>
        <p className="font-semibold text-white">{formatReais(payload[0].value)}</p>
      </div>
    );
  }
  return null;
}

function PieTooltip({ active, payload }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="card py-2 px-3 text-sm shadow-lg">
        <p className="font-semibold text-white">{payload[0].name}</p>
        <p className="text-[var(--text-secondary)]">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
}

function BarTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="card py-2 px-3 text-sm shadow-lg">
        <p className="text-[var(--text-secondary)] mb-1">{label}</p>
        <p className="font-semibold text-white">{payload[0].value} dias</p>
      </div>
    );
  }
  return null;
}

// Custom label inside donut
function DonutCenterLabel() {
  return (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      <tspan
        x="50%"
        dy="-8"
        fill="#8b8fa3"
        fontSize={11}
        fontWeight={500}
      >
        Total
      </tspan>
      <tspan
        x="50%"
        dy="20"
        fill="#ffffff"
        fontSize={15}
        fontWeight={700}
      >
        R$197.540
      </tspan>
    </text>
  );
}

// --- Page ---

export default function VendasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav
        title="Vendas"
        subtitle="Acompanhe o desempenho comercial"
        tabs={[
          { label: "Funil de Vendas", active: true },
          { label: "Mix" },
          { label: "MRR" },
          { label: "Data Detalhamento" },
          { label: "Forecast" },
          { label: "Follow-Up" },
          { label: "YoY Comparação" },
          { label: "Closers" },
        ]}
        filters={[
          { label: "Período", active: true },
          { label: "Produto" },
          { label: "Time Leo" },
          { label: "Time Rafa" },
          { label: "Time Gabriel" },
        ]}
      />

      <div className="p-6 space-y-6">
        {/* Revenue Hero */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">Receita Total</p>
            <p className="text-4xl font-bold text-[var(--accent-green)] mt-0.5">
              R$403K
            </p>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--accent-green-dim)] text-[var(--accent-green)] font-medium">
            +18.4% vs mês anterior
          </span>
        </div>

        {/* 3 Charts Row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Tipo de Pagamento — Donut */}
          <div className="card">
            <h3 className="font-semibold text-sm mb-4">Tipo de Pagamento</h3>
            <ClientOnly>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <DonutCenterLabel />
              </PieChart>
            </ResponsiveContainer>
            </ClientOnly>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-1">
              {paymentData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-[var(--text-secondary)] truncate">
                    {item.name}
                  </span>
                  <span className="text-xs font-semibold ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resultado por Plano — Horizontal Bar */}
          <div className="card">
            <h3 className="font-semibold text-sm mb-4">Resultado por Plano</h3>
            <ClientOnly>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={planData}
                layout="vertical"
                margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={formatReais}
                />
                <YAxis
                  type="category"
                  dataKey="plano"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={72}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--bg-card-hover)" }} />
                <Bar dataKey="valor" radius={[0, 6, 6, 0]} barSize={20} label={{ position: "right", fill: "var(--text-secondary)", fontSize: 11, formatter: (v: unknown) => formatReais(v as number) }}>
                  {planData.map((_, index) => {
                    const colors = ["#f59e0b", "#3b82f6", "#a855f7"];
                    return <Cell key={`bar-${index}`} fill={colors[index]} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            </ClientOnly>
          </div>

          {/* Tempo de Fechamento — Horizontal Bar */}
          <div className="card">
            <h3 className="font-semibold text-sm mb-4">Tempo de Fechamento</h3>
            <ClientOnly>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={closingTimeData}
                layout="vertical"
                margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}d`}
                />
                <YAxis
                  type="category"
                  dataKey="segmento"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={80}
                />
                <Tooltip content={<BarTooltip />} cursor={{ fill: "var(--bg-card-hover)" }} />
                <Bar
                  dataKey="dias"
                  fill="#3b82f6"
                  radius={[0, 6, 6, 0]}
                  barSize={20}
                  label={{ position: "right", fill: "var(--text-secondary)", fontSize: 11, formatter: (v: unknown) => `${v} dias` }}
                />
              </BarChart>
            </ResponsiveContainer>
            </ClientOnly>
          </div>
        </div>

        {/* Funil de Vendas */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-5">Funil de Vendas</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {funnelStages.map((stage, index) => (
              <div key={stage.label} className="flex items-center gap-2 flex-shrink-0">
                {/* Stage box */}
                <div className="flex flex-col items-center gap-1 w-[130px]">
                  <div
                    className="w-full rounded-xl p-4 text-center border transition-colors hover:border-[var(--accent-green)] cursor-pointer"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <p className="text-xs text-[var(--text-secondary)] mb-1">{stage.label}</p>
                    <p className="text-2xl font-bold text-white">
                      {stage.value.toLocaleString("pt-BR")}
                    </p>
                  </div>
                  {/* Progress bar underneath */}
                  <div className="progress-bar w-full">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${Math.max(10, (stage.value / funnelStages[0].value) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Arrow + conversion rate */}
                {index < funnelStages.length - 1 && (
                  <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                    <span className="text-xs font-semibold text-[var(--accent-green)]">
                      {stage.conversion}
                    </span>
                    <ArrowRight size={16} className="text-[var(--text-muted)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Custo por Etapa */}
        <div className="grid grid-cols-[1fr_340px] gap-4">
          {/* Placeholder left space for future content */}
          <div className="card flex items-center justify-center">
            <p className="text-sm text-[var(--text-muted)]">
              Análise detalhada disponível em breve
            </p>
          </div>

          {/* Custo por Etapa table */}
          <div className="card">
            <h3 className="font-semibold text-sm mb-4">Custo por Etapa</h3>
            <div className="space-y-2">
              {costData.map((row) => (
                <div
                  key={row.etapa}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${
                    row.isTotal
                      ? "bg-[var(--accent-green-dim)] border border-[var(--accent-green)]"
                      : "bg-[var(--bg-secondary)]"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      row.isTotal
                        ? "font-semibold text-[var(--accent-green)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {row.etapa}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      row.isTotal ? "text-[var(--accent-green)]" : "text-white"
                    }`}
                  >
                    {row.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
