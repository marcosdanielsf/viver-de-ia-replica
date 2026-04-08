"use client";

import { useState } from "react";
import TopNav from "@/components/layout/TopNav";
import {
  Bot,
  Edit3,
  MessageSquare,
  BarChart2,
  Users,
  DollarSign,
  ChevronRight,
  Zap,
} from "lucide-react";

const builderOptions = [
  {
    id: "agente-vendas",
    icon: Bot,
    title: "Agente de vendas",
    description: "IA que vende por você 24/7 sem intervenção humana",
    color: "var(--accent-green)",
    colorDim: "var(--accent-green-dim)",
  },
  {
    id: "blog-piloto",
    icon: Edit3,
    title: "Blog no piloto automático",
    description: "Conteúdo gerado automaticamente com SEO e publicação agendada",
    color: "var(--accent-purple)",
    colorDim: "var(--accent-purple-dim)",
  },
  {
    id: "automacao-whatsapp",
    icon: MessageSquare,
    title: "Automação de WhatsApp",
    description: "Qualificação, atendimento e follow-up automáticos no WhatsApp",
    color: "var(--accent-teal)",
    colorDim: "#14b8a620",
  },
  {
    id: "dashboard-inteligente",
    icon: BarChart2,
    title: "Dashboard inteligente",
    description: "Métricas em tempo real com alertas e análise automática por IA",
    color: "var(--accent-blue)",
    colorDim: "#3b82f620",
  },
  {
    id: "onboarding-automatico",
    icon: Users,
    title: "Onboarding automático",
    description: "Jornada de ativação do cliente do zero ao primeiro valor em 48h",
    color: "var(--accent-orange)",
    colorDim: "#f59e0b20",
  },
  {
    id: "financeiro-ia",
    icon: DollarSign,
    title: "Financeiro IA",
    description: "Conciliação, cobrança e relatórios financeiros com IA integrada",
    color: "var(--accent-pink)",
    colorDim: "#ec489920",
  },
];

const flowSteps = ["Escolher", "Configurar", "Integrar", "Testar", "Lançar"];

export default function BuilderPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav title="Builder" subtitle="Solução de Impacto" />

      <div className="p-6 flex flex-col gap-8 max-w-5xl mx-auto w-full">
        {/* Mini stepper at top */}
        <div className="flex items-center justify-center gap-0">
          {flowSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  idx === 0
                    ? "bg-[var(--accent-green-dim)] text-[var(--accent-green)] border border-[var(--accent-green)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    idx === 0
                      ? "bg-[var(--accent-green)] text-black"
                      : "bg-[var(--border-color)] text-[var(--text-muted)]"
                  }`}
                >
                  {idx + 1}
                </span>
                {step}
              </div>
              {idx < flowSteps.length - 1 && (
                <ChevronRight size={14} className="text-[var(--border-color)] mx-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Hero heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
            <Zap size={12} className="text-[var(--accent-green)]" />
            Powered by IA
          </div>
          <h1
            className="text-6xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #fff 30%, var(--accent-green) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BUILDER
          </h1>
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            O que vamos construir?
          </p>
          <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            Escolha o que você quer implementar na sua operação de IA. Cada
            opção vem com arquitetura pronta, integrações configuradas e guia
            passo a passo.
          </p>
        </div>

        {/* Builder option grid */}
        <div className="grid grid-cols-3 gap-4">
          {builderOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setSelected(isSelected ? null : option.id)}
                className="card card-hover text-left flex flex-col gap-3 transition-all duration-200 group"
                style={
                  isSelected
                    ? {
                        borderColor: option.color,
                        background: option.colorDim,
                        boxShadow: `0 0 20px ${option.color}22`,
                      }
                    : {}
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: isSelected ? option.color : option.colorDim,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: isSelected ? "#000" : option.color }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-white transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {option.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="mt-auto flex items-center gap-1 text-xs font-semibold" style={{ color: option.color }}>
                    Selecionado
                    <ChevronRight size={12} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3">
          <button
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            style={
              selected
                ? {
                    background: "var(--accent-green)",
                    color: "#000",
                  }
                : {
                    background: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-color)",
                    cursor: "not-allowed",
                    opacity: 0.6,
                  }
            }
            disabled={!selected}
          >
            {selected ? "Começar a construir →" : "Selecione uma opção acima"}
          </button>
        </div>
      </div>
    </div>
  );
}
