"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

interface TopNavProps {
  title: string;
  subtitle?: string;
  tabs?: { label: string; active?: boolean }[];
  filters?: { label: string; active?: boolean }[];
}

export default function TopNav({ title, subtitle, tabs, filters }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-[var(--text-secondary)] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-secondary)]">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-secondary)] relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent-red)] rounded-full" />
          </button>
          <div className="flex items-center gap-2 ml-2 pl-3 border-l border-[var(--border-color)]">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-purple)] flex items-center justify-center text-sm font-medium">
              EG
            </div>
            <span className="text-sm">Eduardo</span>
            <ChevronDown size={14} className="text-[var(--text-secondary)]" />
          </div>
        </div>
      </div>

      {tabs && tabs.length > 0 && (
        <div className="px-6 pb-3 flex gap-1">
          <div className="tab-nav">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`tab-item ${tab.active ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {filters && filters.length > 0 && (
        <div className="px-6 pb-3 flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filter.active
                  ? "bg-[var(--accent-green)] text-black border-[var(--accent-green)]"
                  : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
