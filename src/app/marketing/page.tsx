"use client";

import { useState } from "react";
import TopNav from "@/components/layout/TopNav";
import KpiCard from "@/components/ui/KpiCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DollarSign, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { ClientOnly } from "@/components/charts/DynamicCharts";

// ─── Data ────────────────────────────────────────────────────────────────────

const evolucaoData = [
  { mes: "Jul", investimento: 85000, receita: 62000, leads: 420 },
  { mes: "Ago", investimento: 92000, receita: 75000, leads: 510 },
  { mes: "Set", investimento: 110000, receita: 88000, leads: 640 },
  { mes: "Out", investimento: 98000, receita: 95000, leads: 590 },
  { mes: "Nov", investimento: 125000, receita: 102000, leads: 720 },
  { mes: "Dez", investimento: 140000, receita: 108000, leads: 810 },
  { mes: "Jan", investimento: 151144, receita: 113400, leads: 875 },
];

const inlineMetrics = [
  { label: "Impressões", value: "8", color: "var(--accent-green)", dot: "#00d68f" },
  { label: "Envios", value: "0", color: "var(--accent-red)", dot: "#ef4444" },
  { label: "Cliques", value: "58", color: "var(--accent-blue)", dot: "#3b82f6" },
  { label: "Mediação", value: "14", color: "var(--accent-purple)", dot: "#a855f7" },
  { label: "Focus", value: "14", color: "var(--accent-orange)", dot: "#f59e0b" },
];

const contentTypes = [
  {
    type: "Carrossel",
    accentColor: "#a855f7",
    accentDim: "#a855f720",
    engajamento: "1.3K",
    avg: "24.3k",
    metrics: [
      { label: "Likes", value: "310" },
      { label: "Saves", value: "115" },
      { label: "Shares", value: "227" },
    ],
  },
  {
    type: "Imagem",
    accentColor: "#00d68f",
    accentDim: "#00d68f20",
    engajamento: "1.1K",
    avg: "15",
    metrics: [
      { label: "Likes", value: "480" },
      { label: "Saves", value: "95" },
      { label: "Shares", value: "105" },
    ],
  },
  {
    type: "Vídeo",
    accentColor: "#ef4444",
    accentDim: "#ef444420",
    engajamento: "135",
    avg: "25",
    metrics: [
      { label: "Likes", value: "8" },
      { label: "Saves", value: "15" },
      { label: "Shares", value: "3" },
    ],
  },
];

const topPosts = [
  {
    id: 1,
    thumb: "#a855f7",
    caption: "Como usar IA para escalar suas vendas em 30 dias sem contratar mais...",
    engajamento: "4.2K",
    date: "12 Jan",
  },
  {
    id: 2,
    thumb: "#3b82f6",
    caption: "3 erros que todo gestor de tráfego comete ao usar Meta Ads para info...",
    engajamento: "3.8K",
    date: "09 Jan",
  },
  {
    id: 3,
    thumb: "#00d68f",
    caption: "Meu agente de IA fechou R$47.000 em 7 dias. Aqui está o script...",
    engajamento: "3.1K",
    date: "05 Jan",
  },
  {
    id: 4,
    thumb: "#f59e0b",
    caption: "Por que o ROAS caiu em dezembro? Análise completa + o que fazer...",
    engajamento: "2.6K",
    date: "02 Jan",
  },
];

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const fmt = (v: number) =>
    v >= 1000 ? `R$${(v / 1000).toFixed(0)}k` : String(v);
  return (
    <div
      className="rounded-xl border px-4 py-3 text-sm shadow-xl"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
        {label}
      </p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 mb-1">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: p.color }}
          />
          <span style={{ color: "var(--text-secondary)" }}>{p.name}:</span>
          <span className="font-medium" style={{ color: p.color }}>
            {fmt(p.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeFilters, setActiveFilters] = useState<string[]>(["Período", "Mensal"]);

  const handleFilterToggle = (label: string) => {
    setActiveFilters((prev) =>
      prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav
        title="Marketing"
        subtitle="Acompanhe a performance de marketing"
        tabs={[
          { label: "Dashboard" },
          { label: "Orçamento" },
          { label: "Mix" },
          { label: "Conteúdo" },
          { label: "Instagram" },
          { label: "Produtividade" },
          { label: "Funil" },
          { label: "Dados" },
        ]}
        filters={[
          { label: "Período" },
          { label: "Mensal" },
          { label: "Semanal" },
          { label: "Acumulado ESS" },
          { label: "Facebook/Ads" },
          { label: "Google/Ads" },
          { label: "TikTok/Anúncios" },
          { label: "E-Commerce" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
      />

      <div className="p-6 space-y-6">
        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            label="Investimento"
            value="R$151.144"
            change="+12.4%"
            trend="up"
            icon={<DollarSign size={16} style={{ color: "#fff" }} />}
          />
          <KpiCard
            label="Receita"
            value="R$113.400"
            change="+8.2%"
            trend="up"
            color="var(--accent-green)"
            icon={<TrendingUp size={16} style={{ color: "var(--accent-green)" }} />}
          />
          <KpiCard
            label="ROAS"
            value="0.8x"
            change="-0.3x"
            trend="down"
            color="var(--accent-orange)"
            icon={<AlertTriangle size={16} style={{ color: "var(--accent-orange)" }} />}
          />
          <KpiCard
            label="Custo"
            value="R$4.000"
            change="+5.1%"
            trend="down"
            color="var(--accent-red)"
            icon={<Zap size={16} style={{ color: "var(--accent-red)" }} />}
          />
        </div>

        {/* ── Inline Metrics Row ── */}
        <div className="card p-4">
          <div className="flex flex-wrap items-center gap-3">
            {inlineMetrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border"
                style={{
                  background: `${m.dot}12`,
                  borderColor: `${m.dot}30`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: m.dot }}
                />
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {m.label}
                </span>
                <span className="text-sm font-bold" style={{ color: m.color }}>
                  {m.value}
                </span>
              </div>
            ))}

            {/* Qualidade MQL with progress bar */}
            <div
              className="flex items-center gap-3 px-3 py-2 rounded-lg border min-w-[160px]"
              style={{
                background: "#14b8a612",
                borderColor: "#14b8a630",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "var(--accent-teal)" }}
              />
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Qualidade MQL
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--accent-teal)" }}
                  >
                    35%
                  </span>
                </div>
                <div className="progress-bar" style={{ height: 4 }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "35%",
                      background: "var(--accent-teal)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Evolução Temporal Chart ── */}
        <div className="card">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-semibold">Evolução Temporal</h2>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                Últimos 7 meses
              </p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-5">
              {[
                { color: "#a855f7", label: "Investimento" },
                { color: "#3b82f6", label: "Receita" },
                { color: "#00d68f", label: "Leads" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ClientOnly>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart
              data={evolucaoData}
              margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
            >
              <defs>
                <linearGradient id="gradInvestimento" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="gradReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="gradLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d68f" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00d68f" stopOpacity={0.02} />
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
                axisLine={{ stroke: "var(--border-color)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) =>
                  v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)
                }
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="investimento"
                name="Investimento"
                stroke="#a855f7"
                strokeWidth={2}
                fill="url(#gradInvestimento)"
                dot={false}
                activeDot={{ r: 5, fill: "#a855f7", stroke: "#a855f740" }}
              />
              <Area
                type="monotone"
                dataKey="receita"
                name="Receita"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#gradReceita)"
                dot={false}
                activeDot={{ r: 5, fill: "#3b82f6", stroke: "#3b82f640" }}
              />
              <Area
                type="monotone"
                dataKey="leads"
                name="Leads"
                stroke="#00d68f"
                strokeWidth={2}
                fill="url(#gradLeads)"
                dot={false}
                activeDot={{ r: 5, fill: "#00d68f", stroke: "#00d68f40" }}
              />
            </AreaChart>
          </ResponsiveContainer>
          </ClientOnly>
        </div>

        {/* ── Performance por Tipo de Conteúdo ── */}
        <div>
          <h2 className="text-base font-semibold mb-4">
            Performance por Tipo de Conteúdo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contentTypes.map((ct) => (
              <div
                key={ct.type}
                className="card relative overflow-hidden"
                style={{ borderColor: `${ct.accentColor}40` }}
              >
                {/* Accent bar at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: ct.accentColor }}
                />

                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-md"
                    style={{
                      color: ct.accentColor,
                      background: ct.accentDim,
                    }}
                  >
                    {ct.type}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Avg {ct.avg}
                  </span>
                </div>

                <div className="mb-4">
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Engajamento Médio
                  </p>
                  <p
                    className="text-3xl font-bold"
                    style={{ color: ct.accentColor }}
                  >
                    {ct.engajamento}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {ct.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p
                        className="text-base font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {m.value}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Posts de Maior Sucesso ── */}
        <div>
          <h2 className="text-base font-semibold mb-4">Posts de Maior Sucesso</h2>
          <div className="card p-0 overflow-hidden">
            {/* Table header */}
            <div
              className="grid grid-cols-[48px_1fr_120px_80px] gap-4 px-5 py-3 border-b text-xs font-medium uppercase tracking-wide"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border-color)",
              }}
            >
              <span></span>
              <span>Conteúdo</span>
              <span className="text-right">Engajamento</span>
              <span className="text-right">Data</span>
            </div>

            {topPosts.map((post, idx) => (
              <div
                key={post.id}
                className="grid grid-cols-[48px_1fr_120px_80px] gap-4 items-center px-5 py-4 transition-colors hover:bg-[var(--bg-card-hover)]"
                style={{
                  borderBottom:
                    idx < topPosts.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0"
                  style={{ background: post.thumb }}
                />

                {/* Caption */}
                <p
                  className="text-sm leading-snug line-clamp-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.caption}
                </p>

                {/* Engajamento */}
                <div className="text-right">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--accent-green)" }}
                  >
                    {post.engajamento}
                  </span>
                </div>

                {/* Date */}
                <div className="text-right">
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
