import { ArrowUpRight, Check } from 'lucide-react';
import { SystemItem } from '../data/systemsData';

interface SystemsShowcaseProps {
  pageTitle: string;
  pageSubtitle: string;
  systems: [SystemItem, SystemItem, SystemItem];
  selectedSystemId: string;
  onSelectSystem: (id: string) => void;
}

export function SystemsShowcase({
  pageTitle,
  pageSubtitle,
  systems,
  selectedSystemId,
  onSelectSystem,
}: SystemsShowcaseProps) {
  const [sys1, sys2, sys3] = systems;
  const activeSystem =
    systems.find((s) => s.id === selectedSystemId) || systems[0];

  const handleInspectSystem = (id: string) => {
    onSelectSystem(id);
    if (window.innerWidth < 1024) {
      const el = document.getElementById('detail-modul');
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const getShortTabLabel = (sys: SystemItem) => {
    if (sys.id === 'system-1') return '01. ERP';
    if (sys.id === 'system-2') return '02. HCS3';
    return '03. Aging';
  };

  return (
    <section
      id="tiga-sistem"
      className="py-6 sm:py-10 lg:py-14 flex-1 flex flex-col justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-sky-200 mb-1.5 sm:mb-2">
            GMCC Golo Mori · Portal Sistem Operasional
          </p>
          <h1
            className="font-bold tracking-tight text-white text-balance leading-[1.14] mb-2"
            style={{ fontSize: 'clamp(1.75rem, 3.6vw, 3rem)' }}
          >
            {pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {pageSubtitle}
          </p>
        </div>

        {/* Single-Page Asymmetric Bento Grid: 2 rows (7+5 and 5+7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Card 01: GMCC Procurement ERP (col-span-7) */}
          <article
            className={`lg:col-span-7 bg-white/95 backdrop-blur-md rounded-xl border p-5 sm:p-7 flex flex-col justify-between transition-colors ${
              selectedSystemId === sys1.id
                ? 'border-blue-600 shadow-lg'
                : 'border-white/60 hover:border-white shadow-md'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-2">
                <span className="font-mono font-medium text-slate-900 tabular-nums">
                  {sys1.indexLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{sys1.category}</span>
                <span className="hidden sm:inline" aria-hidden="true">
                  ·
                </span>
                <span className="hidden sm:inline">{sys1.audience}</span>
              </div>

              <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-2.5">
                {sys1.indexLabel}. {sys1.name}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                {sys1.shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={sys1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Buka Aplikasi
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => handleInspectSystem(sys1.id)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSystemId === sys1.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                Lihat Detail
              </button>
            </div>
          </article>

          {/* Card 02: GMCC HCS3 (col-span-5) */}
          <article
            className={`lg:col-span-5 bg-white/95 backdrop-blur-md rounded-xl border p-5 sm:p-7 flex flex-col justify-between transition-colors ${
              selectedSystemId === sys2.id
                ? 'border-blue-600 shadow-lg'
                : 'border-white/60 hover:border-white shadow-md'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-mono font-medium text-slate-900 tabular-nums">
                  {sys2.indexLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{sys2.category}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-2.5">
                {sys2.indexLabel}. {sys2.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {sys2.shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={sys2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Buka Aplikasi
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => handleInspectSystem(sys2.id)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSystemId === sys2.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                Lihat Detail
              </button>
            </div>
          </article>

          {/* Card 03: GMCC Aging System (col-span-5) */}
          <article
            className={`lg:col-span-5 bg-white/95 backdrop-blur-md rounded-xl border p-5 sm:p-7 flex flex-col justify-between transition-colors ${
              selectedSystemId === sys3.id
                ? 'border-blue-600 shadow-lg'
                : 'border-white/60 hover:border-white shadow-md'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-mono font-medium text-slate-900 tabular-nums">
                  {sys3.indexLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{sys3.category}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-2.5">
                {sys3.indexLabel}. {sys3.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {sys3.shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={sys3.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Buka Aplikasi
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => handleInspectSystem(sys3.id)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSystemId === sys3.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                Lihat Detail
              </button>
            </div>
          </article>

          {/* Interactive Detail Panel (col-span-7) */}
          <aside
            id="detail-modul"
            className="lg:col-span-7 bg-slate-950/85 backdrop-blur-md text-slate-100 rounded-xl border border-white/20 p-5 sm:p-7 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/15">
                <div>
                  <p className="text-xs font-medium text-slate-300 mb-0.5">
                    Detail Modul Aktif
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {activeSystem.indexLabel}. {activeSystem.name}
                  </h3>
                </div>

                <div
                  role="tablist"
                  aria-label="Pilih detail sistem GMCC"
                  className="grid grid-cols-3 sm:inline-flex items-center gap-1 p-1 bg-white/10 rounded-lg w-full sm:w-auto"
                >
                  {systems.map((sys) => {
                    const isSelected = sys.id === activeSystem.id;
                    return (
                      <button
                        key={sys.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => onSelectSystem(sys.id)}
                        className={`min-h-[40px] px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer text-center ${
                          isSelected
                            ? 'bg-white text-slate-900'
                            : 'text-slate-200 hover:text-white'
                        }`}
                      >
                        {getShortTabLabel(sys)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pengguna: <span className="text-white font-medium">{activeSystem.audience}</span>
                </p>
                <ul className="space-y-2.5">
                  {activeSystem.capabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-100 leading-relaxed"
                    >
                      <Check
                        className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-300 sm:max-w-md leading-relaxed">
                {activeSystem.integrationRole}
              </p>
              <a
                href={activeSystem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Masuk ke Sistem
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
