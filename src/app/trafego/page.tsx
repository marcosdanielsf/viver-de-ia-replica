"use client";

import TopNav from "@/components/layout/TopNav";
import { ArrowRight, ChevronRight } from "lucide-react";

// ─── Partner avatars ──────────────────────────────────────────────────────────

const partners = [
  { initials: "LM", color: "#a855f7", name: "Lucas M." },
  { initials: "RB", color: "#3b82f6", name: "Rafael B." },
  { initials: "CA", color: "#00d68f", name: "Carol A." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TráfegoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav title="Tráfego pago PRO – Gerencie suas campanhas" />

      <div className="p-6 space-y-8">
        {/* ── Hero Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Left 60% */}
          <div className="lg:col-span-3 space-y-5">
            {/* Tag */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "var(--accent-purple-dim)",
                color: "var(--accent-purple)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-purple)" }}
              />
              Resultado e integração com plataformas
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Tráfego pago PRO —{" "}
              <span style={{ color: "var(--accent-green)" }}>
                Gerencie suas campanhas
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Centralize e otimize todas as suas campanhas de tráfego pago com
              inteligência artificial. Integre Meta Ads, Google Ads, TikTok e
              mais em um único painel, com automações que reduzem custo e
              maximizam ROAS de forma contínua — sem precisar monitorar
              manualmente cada campanha.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--accent-green)" }}
              >
                Começar agora
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right 40% — dashboard mockup */}
          <div
            className="lg:col-span-2 rounded-2xl p-5 relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              minHeight: 260,
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--accent-green)" }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-wide mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Gerencie campanhas de tráfego
            </p>

            {/* Fake metric rows */}
            <div className="space-y-3 relative z-10">
              {[
                { label: "Meta Ads ROAS", value: "4.2x", color: "#a855f7", w: "72%" },
                { label: "Google Ads CTR", value: "3.8%", color: "#3b82f6", w: "58%" },
                { label: "TikTok CPM", value: "R$12", color: "#00d68f", w: "85%" },
                { label: "CPA Médio", value: "R$47", color: "#f59e0b", w: "45%" },
              ].map((row) => (
                <div key={row.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: row.color }}
                    >
                      {row.value}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: row.w, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Fake bottom stat row */}
            <div
              className="mt-4 pt-4 flex items-center justify-between border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              {[
                { label: "Campanhas ativas", value: "12" },
                { label: "Leads hoje", value: "148" },
                { label: "Investido", value: "R$8.4k" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3 Metric Badges ── */}
        <div className="flex flex-wrap items-center gap-3">
          {[
            { label: "Marketing", dot: "var(--accent-green)", bg: "#00d68f15", border: "#00d68f30" },
            { label: "Intermediário", dot: "var(--accent-orange)", bg: "#f59e0b15", border: "#f59e0b30" },
            { label: "FuncionAI", dot: "var(--accent-purple)", bg: "#a855f715", border: "#a855f730" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium"
              style={{
                background: badge.bg,
                borderColor: badge.border,
                color: "var(--text-primary)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: badge.dot }}
              />
              {badge.label}
            </div>
          ))}
        </div>

        {/* ── Pricing Row ── */}
        <div
          className="card flex flex-wrap items-center gap-8 py-5"
        >
          {[
            { label: "Investimento", value: "R$ 16.940,00", color: "var(--accent-green)" },
            { label: "Duração", value: "120 min", color: "var(--text-primary)" },
            { label: "Participantes", value: "840", color: "var(--accent-purple)" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              {i > 0 && (
                <div
                  className="w-px h-8 self-center"
                  style={{ background: "var(--border-color)" }}
                />
              )}
              <div>
                <p
                  className="text-xs uppercase tracking-wide font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xl font-bold mt-0.5"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Sobre esta solução ── */}
        <div className="card space-y-3">
          <h2 className="text-base font-semibold">Sobre esta solução</h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            A plataforma de Tráfego Pago PRO unifica todos os seus canais de
            mídia paga — Meta Ads, Google Ads, TikTok Ads e plataformas
            nativas — em um único ambiente de gestão com IA. Monitore métricas
            em tempo real, detecte anomalias automáticas, otimize lances por
            ROAS e CPA-alvo com modelos preditivos, e receba alertas
            inteligentes antes que o orçamento seja desperdiçado. Dashboards
            customizáveis e relatórios automáticos para clientes tornam a
            operação escalável sem aumentar o time.
          </p>

          <ul className="space-y-2 pt-1">
            {[
              "Integração nativa com Meta, Google, TikTok e Kwai",
              "Otimização automática de lances com IA preditiva",
              "Alertas de anomalia em tempo real (CPC, CTR, ROAS)",
              "Relatórios automatizados para clientes via WhatsApp / e-mail",
              "Dashboard unificado com visão de funil completo",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent-green)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Implementadores Parceiros ── */}
        <div className="card space-y-4">
          <h2 className="text-base font-semibold">Implementadores Parceiros</h2>
          <div className="flex items-center gap-6 flex-wrap">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: p.color,
                    boxShadow: `0 0 0 2px var(--bg-card), 0 0 0 4px ${p.color}60`,
                  }}
                >
                  {p.initials}
                </div>
                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex justify-end pb-2">
          <button
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all hover:bg-[var(--accent-green)] hover:text-black hover:border-[var(--accent-green)]"
            style={{
              borderColor: "var(--accent-green)",
              color: "var(--accent-green)",
            }}
          >
            Continuar processo
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
