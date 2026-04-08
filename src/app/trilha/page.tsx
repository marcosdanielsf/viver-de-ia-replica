"use client";

import TopNav from "@/components/layout/TopNav";
import { Check, BookOpen, Play, Clock, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  { id: 1, label: "Avaliar Base", status: "completed" },
  { id: 2, label: "Analisar", status: "completed" },
  { id: 3, label: "Experimentar", status: "current" },
  {
    id: 4,
    label: "Análise de Marketing e a publicidade online com conceitos avançados",
    status: "pending",
  },
  { id: 5, label: "Implementar", status: "pending" },
  { id: 6, label: "Certificar", status: "pending" },
];

const sdkSteps = [
  { label: "Configurar TypeBot" },
  { label: "Integrar WhatsApp" },
  { label: "Ativar SDR" },
];

function CircularProgress({ value }: { value: number }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const filled = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="4"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--accent-green)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={filled}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-bold text-[var(--accent-green)]">
        {value}%
      </span>
    </div>
  );
}

export default function TrilhaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TopNav title="Trilha IA Personalizada" />

      <div className="p-6 flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {/* Hero / Greeting */}
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-green-dim)] to-transparent pointer-events-none rounded-xl" />
          <div className="relative">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1">
                  Bem-vindo de volta
                </p>
                <h2 className="text-lg font-semibold leading-snug">
                  Olá Eduardo Gonçalves Machado!
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Sua jornada inteligente criada especialmente para você.
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="badge-green px-3 py-1 rounded-full text-xs font-semibold">
                Análise Avançada de IA
              </span>
              <span className="badge-purple px-3 py-1 rounded-full text-xs font-semibold">
                100% Personalizado
              </span>
            </div>
          </div>
        </div>

        {/* Metric boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="card flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-green-dim)] flex items-center justify-center">
              <BookOpen size={18} className="text-[var(--accent-green)]" />
            </div>
            <p className="text-2xl font-bold">6</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Módulos Recomendados
            </p>
          </div>

          <div className="card flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#3b82f620] flex items-center justify-center">
              <Play size={18} className="text-[var(--accent-blue)]" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Aulas Recomendadas
            </p>
          </div>

          <div className="card flex flex-col gap-2 items-start">
            <div className="flex items-center gap-3 w-full">
              <CircularProgress value={94} />
              <div>
                <p className="text-2xl font-bold">94%</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  Progresso
                </p>
              </div>
            </div>
            <div className="progress-bar w-full mt-2">
              <div className="progress-fill" style={{ width: "94%" }} />
            </div>
          </div>
        </div>

        {/* Stepper / Timeline */}
        <div className="card">
          <h3 className="text-sm font-semibold mb-5 text-[var(--text-secondary)] uppercase tracking-wide">
            Jornada de Aprendizado
          </h3>
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex gap-4">
                {/* Dot + line */}
                <div className="flex flex-col items-center">
                  <div className={`step-dot flex-shrink-0 ${step.status}`}>
                    {step.status === "completed" ? (
                      <Check size={14} />
                    ) : step.status === "current" ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] animate-pulse block" />
                    ) : (
                      <span className="text-xs">{step.id}</span>
                    )}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 my-1"
                      style={{
                        background:
                          step.status === "completed"
                            ? "var(--accent-green)"
                            : "var(--border-color)",
                        minHeight: "24px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pb-5 flex-1 ${idx === steps.length - 1 ? "pb-0" : ""}`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      step.status === "pending"
                        ? "opacity-50"
                        : ""
                    }`}
                  >
                    {step.status === "current" && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--accent-green-dim)] text-[var(--accent-green)]">
                        Atual
                      </span>
                    )}
                    <p
                      className={`text-sm font-medium leading-snug ${
                        step.status === "completed"
                          ? "text-[var(--text-primary)]"
                          : step.status === "current"
                          ? "text-[var(--accent-green)]"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                  {step.status === "current" && (
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Continue de onde parou — 2 atividades restantes
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom card — SDR */}
        <div className="card card-hover transition-all cursor-pointer">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-[var(--accent-green)]" />
                <span className="text-xs text-[var(--text-secondary)]">
                  Próxima aula recomendada
                </span>
              </div>
              <h3 className="font-semibold text-base leading-snug mb-1">
                SDR Automática no WhatsApp: Plug and Play com TypeBot
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4">
                Criar um SDR no WhatsApp com IA que trata as pessoas de forma
                personalizada, qualifica leads e agenda reuniões no piloto
                automático.
              </p>
              {/* Mini steps */}
              <div className="flex items-center gap-2 mb-4">
                {sdkSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          i === 0
                            ? "bg-[var(--accent-green)] text-black"
                            : "bg-[var(--border-color)] text-[var(--text-muted)]"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {s.label}
                      </span>
                    </div>
                    {i < sdkSteps.length - 1 && (
                      <ChevronRight
                        size={12}
                        className="text-[var(--text-muted)]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-green)] text-black text-sm font-semibold hover:bg-[#00c07e] transition-colors">
            Iniciar aula
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
