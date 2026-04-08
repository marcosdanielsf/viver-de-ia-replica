"use client";

import TopNav from "@/components/layout/TopNav";
import {
  Users,
  Headphones,
  Bot,
  Zap,
  DollarSign,
  BarChart2,
  CreditCard,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const atendimentoCards: ServiceCard[] = [
  {
    title: "Onboarding",
    subtitle: "Onboarding Automatizado no WhatsApp",
    description:
      "Automatize o processo de boas-vindas e integração de novos clientes via WhatsApp. Envio de materiais, coleta de dados e ativação de conta sem intervenção manual.",
    icon: <Users size={20} />,
    accentColor: "var(--accent-green)",
  },
  {
    title: "Atendimento",
    subtitle: "Atendimento direto no WhatsApp com IA via Humanbot",
    description:
      "Resolva dúvidas e suporte técnico de forma instantânea com agente de IA. Escalada inteligente para humano apenas quando necessário, mantendo NPS elevado.",
    icon: <Headphones size={20} />,
    accentColor: "var(--accent-blue)",
  },
  {
    title: "Onboarding e CS com IA",
    subtitle: "Customer Success automatizado com inteligência artificial",
    description:
      "Monitore health score de clientes, dispare ações proativas de CS e identifique riscos de churn antes que aconteçam — tudo automatizado com IA.",
    icon: <Bot size={20} />,
    accentColor: "var(--accent-purple)",
  },
  {
    title: "Onboarding Automatizado",
    subtitle: "Fluxo de ativação inteligente e personalizado",
    description:
      "Pipeline de onboarding adaptativo que ajusta o ritmo e o conteúdo conforme o perfil do cliente, reduzindo o time-to-value e aumentando retenção.",
    icon: <Zap size={20} />,
    accentColor: "var(--accent-teal)",
  },
];

const financeiroCards: ServiceCard[] = [
  {
    title: "Finance AI — ERP Financeiro",
    subtitle: "Gestão financeira inteligente com IA",
    description:
      "ERP financeiro potencializado por IA para categorização automática de lançamentos, previsão de fluxo de caixa e alertas de anomalia em tempo real.",
    icon: <DollarSign size={20} />,
    accentColor: "var(--accent-green)",
  },
  {
    title: "Painel Financeiro — Viver de IA",
    subtitle: "Dashboard completo de performance financeira",
    description:
      "Visualize receita, despesas, margens e projeções em um painel unificado. Relatórios automáticos e comparativos mensais sem planilhas manuais.",
    icon: <BarChart2 size={20} />,
    accentColor: "var(--accent-blue)",
  },
  {
    title: "Central Financeiro",
    subtitle: "Gestão de contas, pagamentos e planos",
    description:
      "Centralize cobranças, assinaturas e planos em uma única interface. Controle inadimplência, emita boletos e gerencie pagamentos com automação completa.",
    icon: <CreditCard size={20} />,
    accentColor: "var(--accent-orange)",
  },
  {
    title: "Agente de Cobrança",
    subtitle: "Recuperação de inadimplentes com IA conversacional",
    description:
      "Agente de IA que aborda clientes inadimplentes de forma personalizada via WhatsApp, negocia condições e recupera receita sem constrangimento.",
    icon: <AlertCircle size={20} />,
    accentColor: "var(--accent-red)",
  },
];

// ─── Card Component ───────────────────────────────────────────────────────────

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div
      className="card card-hover flex flex-col gap-3 relative"
      style={{ borderLeft: `4px solid ${card.accentColor}` }}
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: `${card.accentColor}18`,
          color: card.accentColor,
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
          {card.title}
        </h3>
        <p className="text-xs font-medium" style={{ color: card.accentColor }}>
          {card.subtitle}
        </p>
        <p
          className="text-xs leading-relaxed pt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {card.description}
        </p>
      </div>

      {/* Arrow button */}
      <div className="flex justify-end mt-1">
        <button
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: `${card.accentColor}18`,
            color: card.accentColor,
          }}
        >
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AtendimentoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav
        title="Atendimento e CS"
        tabs={[
          { label: "Vendas" },
          { label: "Marketing" },
          { label: "Atendimento", active: true },
          { label: "Financeiro" },
          { label: "Onboarding" },
        ]}
      />

      <div className="p-6 space-y-8">
        {/* ── Atendimento e CS Section ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold">Atendimento e CS</h2>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Soluções de atendimento ao cliente e customer success com IA
              </p>
            </div>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "var(--accent-green-dim)",
                color: "var(--accent-green)",
              }}
            >
              {atendimentoCards.length} soluções
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atendimentoCards.map((card) => (
              <ServiceCardItem key={card.title} card={card} />
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          className="border-t"
          style={{ borderColor: "var(--border-color)" }}
        />

        {/* ── Financeiro Section ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold">Financeiro</h2>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Gestão financeira automatizada e inteligente
              </p>
            </div>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "var(--accent-purple-dim)",
                color: "var(--accent-purple)",
              }}
            >
              {financeiroCards.length} soluções
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financeiroCards.map((card) => (
              <ServiceCardItem key={card.title} card={card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
