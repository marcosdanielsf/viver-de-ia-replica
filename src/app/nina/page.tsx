"use client";

import TopNav from "@/components/layout/TopNav";
import {
  Play,
  Link2,
  ExternalLink,
  Award,
  ChevronRight,
  FileText,
  CheckCircle2,
} from "lucide-react";

const stepperItems = [
  { id: 1, label: "Ferramentas", status: "completed" },
  { id: 2, label: "Arquitetura", status: "current" },
  { id: 3, label: "Clientes", status: "pending" },
  { id: 4, label: "Checklist", status: "pending" },
  { id: 5, label: "Documentação", status: "pending" },
  { id: 6, label: "Lançamento", status: "pending" },
];

const docs = [
  { label: "Guia de implementação SDR", icon: FileText },
  { label: "Checklist de configuração", icon: CheckCircle2 },
  { label: "Template de scripts", icon: FileText },
];

function CircularProgress({ value }: { value: number }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const filled = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="3"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="var(--accent-green)"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={filled}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[9px] font-bold text-[var(--accent-green)]">
        {value}%
      </span>
    </div>
  );
}

export default function NinaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav title="Nina – Plataforma de SDR com IA" />

      <div className="p-6 flex flex-col gap-6 max-w-4xl mx-auto w-full">

        {/* Progress + Stepper header row */}
        <div className="flex items-center justify-between gap-4">
          {/* Horizontal stepper */}
          <div className="flex items-center gap-0 flex-1 overflow-x-auto">
            {stepperItems.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`step-dot ${step.status}`}>
                    {step.status === "completed" ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7L5.5 10L11.5 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="text-xs">{step.id}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-medium whitespace-nowrap ${
                      step.status === "current"
                        ? "text-[var(--accent-green)]"
                        : step.status === "completed"
                        ? "text-[var(--text-secondary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < stepperItems.length - 1 && (
                  <div
                    className="h-0.5 w-8 mb-4 flex-shrink-0"
                    style={{
                      background:
                        step.status === "completed"
                          ? "var(--accent-green)"
                          : "var(--border-color)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress ring */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <CircularProgress value={29} />
            <div>
              <p className="text-xs font-semibold text-[var(--accent-green)]">29%</p>
              <p className="text-[10px] text-[var(--text-muted)]">concluído</p>
            </div>
          </div>
        </div>

        {/* Materiais e Recursos */}
        <div className="card flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base font-semibold">Materiais e Recursos</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--accent-green-dim)] text-[var(--accent-green)]">
                  3 documentos
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Documentação exclusiva para implementação deste componente da
                plataforma Nina SDR com IA.
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-green)] text-black text-sm font-semibold hover:bg-[#00c07e] transition-colors whitespace-nowrap flex-shrink-0">
              Iniciar como consultor
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Docs list */}
          <div className="flex flex-col gap-2">
            {docs.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-colors cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-md bg-[var(--bg-card)] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[var(--text-secondary)]" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors flex-1">
                    {doc.label}
                  </span>
                  <ExternalLink size={12} className="text-[var(--text-muted)] group-hover:text-[var(--accent-green)] transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Links Auxiliares */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
            Links Auxiliares
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* YouTube */}
            <div className="card card-hover transition-all cursor-pointer group flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ef444420] flex items-center justify-center">
                  <Play size={20} className="text-[var(--accent-red)]" />
                </div>
                <button className="w-8 h-8 rounded-lg bg-[var(--accent-green)] flex items-center justify-center hover:bg-[#00c07e] transition-colors">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="translate-x-0.5"
                  >
                    <polygon points="2,1 11,6 2,11" fill="#000" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-sm font-semibold group-hover:text-white transition-colors">
                  Link do canal do YouTube
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Aulas e tutoriais em vídeo
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--accent-green)] transition-colors">
                <ExternalLink size={11} />
                youtube.com/viverdeia
              </div>
            </div>

            {/* Pocket IA */}
            <div className="card card-hover transition-all cursor-pointer group flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-purple-dim)] flex items-center justify-center">
                  <Link2 size={20} className="text-[var(--accent-purple)]" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--accent-green)] transition-colors">
                  <ExternalLink
                    size={12}
                    className="text-[var(--text-secondary)] group-hover:text-black transition-colors"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold group-hover:text-white transition-colors">
                  Pocket IA
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Referências rápidas e recursos
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--accent-green)] transition-colors">
                <ExternalLink size={11} />
                pocket.viverdeia.com
              </div>
            </div>
          </div>
        </div>

        {/* Certificados pendentes */}
        <div className="card card-hover transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b20] flex items-center justify-center flex-shrink-0">
              <Award size={22} className="text-[var(--accent-orange)]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold group-hover:text-white transition-colors">
                  Certificados pendentes
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#f59e0b20] text-[var(--accent-orange)]">
                  2 disponíveis
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Complete os módulos restantes para liberar seus certificados de
                conclusão da trilha Nina SDR.
              </p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--accent-green)] transition-colors flex-shrink-0">
              <ChevronRight
                size={16}
                className="text-[var(--text-secondary)] group-hover:text-black transition-colors"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
