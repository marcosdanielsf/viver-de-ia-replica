"use client";

import TopNav from "@/components/layout/TopNav";
import { ArrowRight, ChevronRight, Database } from "lucide-react";

// ─── Partner avatars ──────────────────────────────────────────────────────────

const partners = [
  { initials: "FM", color: "#3b82f6", name: "Felipe M." },
  { initials: "JS", color: "#a855f7", name: "Julia S." },
  { initials: "TP", color: "#f59e0b", name: "Thiago P." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RagPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav title="Como fazer RAG na prática" />

      <div className="p-6 space-y-8">
        {/* ── Hero Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Left 60% */}
          <div className="lg:col-span-3 space-y-5">
            {/* Green badge */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "var(--accent-green-dim)",
                color: "var(--accent-green)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-green)" }}
              />
              Aprenda na prática
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Como fazer{" "}
              <span style={{ color: "var(--accent-green)" }}>RAG</span>{" "}
              na prática
            </h1>

            {/* Description */}
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Aprenda a implementar Retrieval-Augmented Generation do zero para
              potencializar seus agentes de IA. Domine bancos de dados vetoriais,
              embeddings semânticos e técnicas de retrieval que transformam LLMs
              genéricos em especialistas no conhecimento da sua empresa — sem
              alucinações e com respostas precisas.
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

          {/* Right 40% — RAG illustration card */}
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
              className="absolute -top-12 -left-12 w-48 h-48 rounded-full opacity-15 blur-3xl"
              style={{ background: "var(--accent-blue)" }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-wide mb-4 relative z-10"
              style={{ color: "var(--text-muted)" }}
            >
              Como fazer RAG na prática
            </p>

            {/* RAG flow illustration */}
            <div className="relative z-10 space-y-3">
              {/* Database cylinder visual */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#3b82f620", border: "1px solid #3b82f640" }}
                >
                  <Database size={20} style={{ color: "#3b82f6" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Vector Database
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Pinecone · Supabase pgvector · Weaviate
                  </p>
                </div>
              </div>

              {/* Pipeline steps */}
              {[
                { step: "1", label: "Chunking", desc: "Divisão do documento em pedaços semânticos", color: "#00d68f" },
                { step: "2", label: "Embedding", desc: "Vetorização com modelo text-embedding", color: "#a855f7" },
                { step: "3", label: "Retrieval", desc: "Busca por similaridade coseno", color: "#3b82f6" },
                { step: "4", label: "Generation", desc: "LLM gera com contexto recuperado", color: "#f59e0b" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-3">
                  <span
                    className="step-dot completed flex-shrink-0 text-[10px]"
                    style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}50`, width: 24, height: 24 }}
                  >
                    {s.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: s.color }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-xs ml-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3 Metric Badges ── */}
        <div className="flex flex-wrap items-center gap-3">
          {[
            { label: "Modelos de IA", dot: "var(--accent-green)", bg: "#00d68f15", border: "#00d68f30" },
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

        {/* ── Pricing / Info Row ── */}
        <div className="card flex flex-wrap items-center gap-8 py-5">
          {[
            { label: "Investimento", value: "R$ 16–37,00", color: "var(--accent-green)" },
            { label: "Duração", value: "120 min", color: "var(--text-primary)" },
            { label: "Participantes", value: "1.050", color: "var(--accent-purple)" },
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
            Aprenda RAG na prática e transforme qualquer base de conhecimento em
            um agente de IA preciso e confiável. O curso cobre desde a teoria
            dos bancos de dados vetoriais até a implementação completa com
            Supabase pgvector, OpenAI Embeddings e frameworks como LangChain e
            LlamaIndex. Você vai construir um sistema RAG funcional, conectado a
            documentos reais, com mecanismos de reranking e avaliação de
            qualidade de retrieval.
          </p>

          <ul className="space-y-2 pt-1">
            {[
              "Fundamentos de embeddings e similaridade semântica",
              "Configuração de bancos vetoriais (Supabase, Pinecone, Weaviate)",
              "Estratégias de chunking para máxima precisão",
              "Pipelines completos com LangChain e LlamaIndex",
              "Avaliação de retrieval com métricas RAGAS",
              "Deploy em produção com custo otimizado",
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
                    boxShadow: `0 0 0 2px var(--bg-card), 0 0 0 4px ${p.color}50`,
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
