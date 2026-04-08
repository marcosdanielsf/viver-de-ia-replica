"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  Users,
  CheckSquare,
  GraduationCap,
  Blocks,
  UserCheck,
  Megaphone,
  HeartHandshake,
  CreditCard,
  Bot,
  Settings,
  HelpCircle,
  Zap,
} from "lucide-react";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Home" },
  { href: "/marketing", icon: Megaphone, label: "Marketing" },
  { href: "/vendas", icon: DollarSign, label: "Vendas" },
  { href: "/times", icon: Users, label: "Times" },
  { href: "/customer-success", icon: HeartHandshake, label: "CS" },
  { href: "/checklist", icon: CheckSquare, label: "Checklist" },
  { href: "/trilha", icon: GraduationCap, label: "Trilha IA" },
  { href: "/builder", icon: Blocks, label: "Builder" },
  { href: "/nina", icon: Bot, label: "Nina SDR" },
  { href: "/trafego", icon: TrendingUp, label: "Tráfego" },
  { href: "/rag", icon: Zap, label: "RAG" },
  { href: "/atendimento", icon: UserCheck, label: "Atendimento" },
];

const bottomItems = [
  { href: "#", icon: Settings, label: "Configurações" },
  { href: "#", icon: HelpCircle, label: "Ajuda" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar fixed left-0 top-0 h-screen w-[220px] flex flex-col z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-[var(--border-color)]">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent-green)] flex items-center justify-center">
          <span className="text-black font-bold text-sm">V</span>
        </div>
        <span className="text-base font-semibold tracking-tight">
          VIVER DE IA
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "active text-[var(--accent-green)] bg-[var(--bg-card)]"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-[var(--border-color)] py-3 px-3 space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:text-white"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
