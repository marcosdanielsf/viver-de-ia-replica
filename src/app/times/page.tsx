"use client";

import TopNav from "@/components/layout/TopNav";

const tabs = [
  { label: "Funil de Vendas", active: true },
  { label: "Mix" },
  { label: "MRR" },
  { label: "Data Detalhamento" },
  { label: "Forecast" },
  { label: "Follow-Up" },
  { label: "YoY Comparação" },
  { label: "Closers" },
];

const filters = [
  { label: "Este mês", active: true },
  { label: "Último mês" },
  { label: "Trimestre" },
  { label: "Semestre" },
  { label: "Ano" },
];

interface Member {
  initials: string;
  name: string;
  color: string;
}

interface Team {
  name: string;
  tag: string;
  dotColor: string;
  change: number;
  changePositive: boolean;
  barColor: string;
  barPercent: number;
  members: Member[];
  stats: { label: string; value: string; color?: string }[];
}

const teams: Team[] = [
  {
    name: "Time Leo",
    tag: "MG1",
    dotColor: "#ef4444",
    change: 0,
    changePositive: false,
    barColor: "#ef4444",
    barPercent: 0,
    members: [
      { initials: "LE", name: "Leo", color: "#ef4444" },
      { initials: "CA", name: "Carlos", color: "#f59e0b" },
      { initials: "JO", name: "Jonas", color: "#ec4899" },
    ],
    stats: [
      { label: "Leads", value: "142" },
      { label: "Deals", value: "18" },
      { label: "Close Ratio", value: "12.7%" },
      { label: "Ticket Médio", value: "R$3.500" },
      { label: "Receita", value: "R$63K", color: "#ef4444" },
    ],
  },
  {
    name: "Time Rafa",
    tag: "SP2",
    dotColor: "#00d68f",
    change: 4,
    changePositive: true,
    barColor: "#a855f7",
    barPercent: 58,
    members: [
      { initials: "RA", name: "Rafa", color: "#a855f7" },
      { initials: "FE", name: "Fernanda", color: "#00d68f" },
      { initials: "BR", name: "Bruno", color: "#3b82f6" },
    ],
    stats: [
      { label: "Leads", value: "389" },
      { label: "Deals", value: "54" },
      { label: "Close Ratio", value: "13.9%" },
      { label: "Ticket Médio", value: "R$9.106" },
      { label: "Receita", value: "R$491K", color: "#00d68f" },
    ],
  },
  {
    name: "Time Gabriel",
    tag: "RJ3",
    dotColor: "#3b82f6",
    change: 3,
    changePositive: true,
    barColor: "#f59e0b",
    barPercent: 42,
    members: [
      { initials: "GA", name: "Gabriel", color: "#f59e0b" },
      { initials: "AN", name: "Ana", color: "#14b8a6" },
    ],
    stats: [
      { label: "Leads", value: "261" },
      { label: "Deals", value: "37" },
      { label: "Close Ratio", value: "14.2%" },
      { label: "Ticket Médio", value: "R$7.840" },
      { label: "Receita", value: "R$290K", color: "#3b82f6" },
    ],
  },
];

const kpiRows = [
  {
    kpi: "Receita",
    leo: { value: "R$63K", highlight: false },
    rafa: { value: "R$491K", highlight: true },
    gabriel: { value: "R$290K", highlight: false },
    resultado: { value: "R$844K", highlight: true },
  },
  {
    kpi: "Novos Leads",
    leo: { value: "142", highlight: false },
    rafa: { value: "389", highlight: true },
    gabriel: { value: "261", highlight: false },
    resultado: { value: "792", highlight: false },
  },
  {
    kpi: "Close Ratio",
    leo: { value: "12.7%", highlight: false },
    rafa: { value: "13.9%", highlight: false },
    gabriel: { value: "14.2%", highlight: true },
    resultado: { value: "13.8%", highlight: false },
  },
  {
    kpi: "Ticket Médio",
    leo: { value: "R$3.500", highlight: false },
    rafa: { value: "R$9.106", highlight: true },
    gabriel: { value: "R$7.840", highlight: false },
    resultado: { value: "R$8.114", highlight: false },
  },
  {
    kpi: "Troca Média",
    leo: { value: "4.2d", highlight: false },
    rafa: { value: "3.1d", highlight: true },
    gabriel: { value: "3.8d", highlight: false },
    resultado: { value: "3.4d", highlight: false },
  },
];

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="card hover:bg-[var(--bg-card-hover)] transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ background: team.dotColor, boxShadow: `0 0 6px ${team.dotColor}88` }}
          />
          <h3 className="font-semibold text-base">{team.name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-medium border border-[var(--border-color)]">
            {team.tag}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Change indicator */}
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              team.changePositive
                ? "text-[var(--accent-green)] bg-[var(--accent-green-dim)]"
                : "text-[var(--text-muted)] bg-[var(--bg-secondary)]"
            }`}
          >
            {team.changePositive ? "+" : ""}{team.change}%
          </span>
          {/* Member avatars */}
          <div className="flex -space-x-1.5">
            {team.members.map((m) => (
              <div
                key={m.name}
                title={m.name}
                className="w-7 h-7 rounded-full border-2 border-[var(--bg-card)] flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: `${m.color}33`, color: m.color }}
              >
                {m.initials}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[var(--text-secondary)]">Progresso da Meta</span>
          <span className="text-xs font-semibold" style={{ color: team.barColor }}>
            {team.barPercent}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${team.barPercent}%`,
              background: team.barColor,
            }}
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-5 gap-2 pt-3 border-t border-[var(--border-color)]">
        {team.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-sm font-bold"
              style={{ color: stat.color || "var(--text-primary)" }}
            >
              {stat.value}
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TimesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav title="Vendas" tabs={tabs} filters={filters} />

      <div className="p-6 space-y-6">
        {/* Teams Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-base">Performance por Time</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Comparativo de resultados — período selecionado
              </p>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-muted)] transition-colors">
              Exportar relatório
            </button>
          </div>

          <div className="space-y-3">
            {teams.map((team) => (
              <TeamCard key={team.name} team={team} />
            ))}
          </div>
        </div>

        {/* KPI Leaderboard Table */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-base">Quadro: Líderes por KPI</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Melhor resultado por indicador em destaque
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="w-3 h-3 rounded-sm bg-[var(--accent-green-dim)] border border-[var(--accent-green)] inline-block" />
              Melhor resultado
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  {["KPI", "Time Leo", "Time Rafa", "Time Gabriel", "Resultado"].map((col, i) => (
                    <th
                      key={col}
                      className={`pb-3 text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide ${
                        i === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kpiRows.map((row, rowIdx) => (
                  <tr
                    key={row.kpi}
                    className={`border-b border-[var(--border-color)] transition-colors hover:bg-[var(--bg-secondary)] ${
                      rowIdx % 2 === 0 ? "" : "bg-[#ffffff03]"
                    }`}
                  >
                    <td className="py-3 pr-4">
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        {row.kpi}
                      </span>
                    </td>
                    {[row.leo, row.rafa, row.gabriel, row.resultado].map((cell, ci) => (
                      <td key={ci} className="py-3 text-center">
                        <span
                          className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-sm font-semibold ${
                            cell.highlight
                              ? "bg-[var(--accent-green-dim)] text-[var(--accent-green)]"
                              : "text-[var(--text-primary)]"
                          }`}
                        >
                          {cell.value}
                          {cell.highlight && (
                            <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] inline-block" />
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
            <p className="text-xs text-[var(--text-secondary)]">
              3 times ativos — dados atualizados hoje às 09:42
            </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-[var(--text-secondary)]">
                Total Receita: <span className="font-bold text-[var(--accent-green)]">R$844K</span>
              </span>
              <span className="text-[var(--text-secondary)]">
                Total Leads: <span className="font-bold text-white">792</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
