"use client";

import { useState } from "react";
import { Check, Circle, ChevronRight, ChevronLeft } from "lucide-react";
import TopNav from "@/components/layout/TopNav";

const steps = [
  { label: "Ferramentas", status: "completed" },
  { label: "Arquitetura", status: "completed" },
  { label: "Clientes", status: "completed" },
  { label: "Checklist", status: "current" },
  { label: "Documentação", status: "pending" },
  { label: "Deploy", status: "pending" },
];

type TaskStatus = "todo" | "doing" | "done";

interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

const initialTasks: Task[] = [
  { id: 1, title: "Criar uma conta no Meta Business", description: "Acessar business.facebook.com e configurar conta", status: "todo" },
  { id: 2, title: "Configurar pixel de rastreamento", description: "Instalar e verificar o pixel no site principal", status: "todo" },
  { id: 3, title: "Pagar taxa de projeto", description: "Processar pagamento da licença de integração", status: "todo" },
  { id: 4, title: "Conectar com a API oficial do Meta", description: "Gerar token de acesso e configurar webhook", status: "todo" },
  { id: 5, title: "Criar na agência as contas no caminho", description: "Mapear todas as sub-contas necessárias", status: "doing" },
  { id: 6, title: "Configurar permissões de acesso", description: "Definir roles de admin e operador na plataforma", status: "doing" },
  { id: 7, title: "Criar na agência as contas no caminho", description: "Processo de criação concluído e validado", status: "done" },
  { id: 8, title: "Validar credenciais de acesso", description: "Todas as chaves testadas e aprovadas", status: "done" },
];

const columns: { status: TaskStatus; label: string; color: string }[] = [
  { status: "todo", label: "A Fazer", color: "var(--text-secondary)" },
  { status: "doing", label: "Em Progresso", color: "var(--accent-orange)" },
  { status: "done", label: "Conclusão", color: "var(--accent-green)" },
];

function StepIndicator() {
  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className={`step-dot ${step.status}`}>
                {step.status === "completed" ? (
                  <Check size={14} strokeWidth={3} />
                ) : step.status === "current" ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]" />
                ) : (
                  <span className="text-[var(--text-muted)] text-xs font-semibold">{index + 1}</span>
                )}
              </div>
              <span
                className={`text-xs font-medium whitespace-nowrap ${
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
            {index < steps.length - 1 && (
              <div
                className="flex-1 h-px mx-2 mb-5"
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
    </div>
  );
}

const statusOrder: TaskStatus[] = ["todo", "doing", "done"];

function TaskCard({
  task,
  onMove,
}: {
  task: Task;
  onMove: (id: number, direction: "forward" | "back") => void;
}) {
  const isDone = task.status === "done";
  const isDoing = task.status === "doing";
  const isTodo = task.status === "todo";
  const currentIndex = statusOrder.indexOf(task.status);
  const canMoveForward = currentIndex < statusOrder.length - 1;
  const canMoveBack = currentIndex > 0;

  return (
    <div
      className={`p-3 rounded-lg bg-[var(--bg-secondary)] border transition-all duration-300 ${
        isDoing
          ? "border-l-2 border-l-[var(--accent-orange)] border-[var(--border-color)]"
          : isDone
          ? "border-l-2 border-l-[var(--accent-green)] border-[var(--border-color)]"
          : "border-[var(--border-color)]"
      }`}
    >
      <div className="flex items-start gap-2.5">
        {/* Status indicator */}
        <div className="mt-0.5 flex-shrink-0">
          {isDone ? (
            <div className="w-5 h-5 rounded-full bg-[var(--accent-green)] flex items-center justify-center">
              <Check size={11} strokeWidth={3} color="#000" />
            </div>
          ) : (
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isDoing ? "border-[var(--accent-orange)]" : "border-[var(--border-color)]"
              }`}
            >
              {isDoing && <span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]" />}
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-medium leading-snug ${
              isDone ? "line-through text-[var(--text-muted)]" : ""
            }`}
          >
            {task.title}
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">
            {task.description}
          </p>
        </div>
      </div>

      {/* Move buttons */}
      <div className="flex items-center justify-end gap-1 mt-2.5 pt-2 border-t border-[var(--border-color)]">
        <button
          disabled={!canMoveBack}
          onClick={() => onMove(task.id, "back")}
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${
            canMoveBack
              ? "text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] cursor-pointer"
              : "text-[var(--text-muted)] opacity-30 cursor-not-allowed"
          }`}
          title="Mover para coluna anterior"
        >
          <ChevronLeft size={12} />
          Voltar
        </button>
        <button
          disabled={!canMoveForward}
          onClick={() => onMove(task.id, "forward")}
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${
            canMoveForward
              ? isDone
                ? "text-[var(--accent-green)] bg-[var(--accent-green-dim)] hover:opacity-80 cursor-pointer"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] cursor-pointer"
              : "text-[var(--text-muted)] opacity-30 cursor-not-allowed"
          }`}
          title="Mover para próxima coluna"
        >
          {isTodo ? "Iniciar" : isDoing ? "Concluir" : "Avançar"}
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

export default function ChecklistPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (id: number, direction: "forward" | "back") => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const currentIndex = statusOrder.indexOf(t.status);
        const nextIndex =
          direction === "forward"
            ? Math.min(currentIndex + 1, statusOrder.length - 1)
            : Math.max(currentIndex - 1, 0);
        return { ...t, status: statusOrder[nextIndex] };
      })
    );
  };

  const doneCount = tasks.filter((t) => t.status === "done").length;
  const progress = Math.round((doneCount / tasks.length) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav title="Checklist de Solução" />

      <div className="p-6">
        <StepIndicator />

        {/* Header Row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-semibold text-base">Tarefas de Implementação</h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {doneCount}/{tasks.length} tarefas concluídas — {progress}% do checklist
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Progress pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div className="w-20 h-1.5 rounded-full bg-[var(--border-color)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--accent-green)] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-[var(--accent-green)]">{progress}%</span>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[var(--accent-green)] text-black text-sm font-semibold hover:opacity-90 transition-opacity">
              Marcar como concluído
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-3 gap-4">
          {columns.map((col) => {
            const colTasks = tasks.filter((t) => t.status === col.status);
            return (
              <div key={col.status} className="card flex flex-col gap-3">
                {/* Column Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: col.color }}
                    />
                    <h3 className="text-sm font-semibold" style={{ color: col.color }}>
                      {col.label}
                    </h3>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-medium">
                    {colTasks.length}
                  </span>
                </div>

                {/* Tasks */}
                <div className="space-y-2 flex-1">
                  {colTasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-2">
                      <Circle size={24} className="text-[var(--text-muted)]" />
                      <p className="text-xs text-[var(--text-muted)]">Nenhuma tarefa aqui</p>
                    </div>
                  ) : (
                    colTasks.map((task) => (
                      <TaskCard key={task.id} task={task} onMove={moveTask} />
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-5 flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-green)] text-black text-sm font-semibold hover:opacity-90 transition-opacity">
            Continuar Implementação
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
