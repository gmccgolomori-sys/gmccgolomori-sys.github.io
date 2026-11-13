import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SystemItem } from '../data/systemsData';

interface HeaderProps {
  brandName: string;
  contactEmail: string;
  systems: [SystemItem, SystemItem, SystemItem];
}

export function Header({ brandName, contactEmail, systems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/65 backdrop-blur-md border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#tiga-sistem"
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          {brandName}
        </a>

        {/* Zone 2: Concise single-line system links */}
        <nav
          aria-label="Navigasi sistem GMCC"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200"
        >
          {systems.map((sys) => (
            <a
              key={sys.id}
              href={sys.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              {sys.indexLabel}. {sys.name}
            </a>
          ))}
          <a
            href="#detail-modul"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            Detail Modul
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${contactEmail}`}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Kontak Admin
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/15 bg-slate-950/95 backdrop-blur-md px-4 py-3 space-y-1.5">
          {systems.map((sys) => (
            <a
              key={sys.id}
              href={sys.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between min-h-[44px] py-2.5 px-3 text-sm font-medium text-slate-100 hover:bg-white/10 rounded-lg"
            >
              <span>
                {sys.indexLabel}. {sys.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
            </a>
          ))}
          <a
            href="#detail-modul"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center min-h-[44px] py-2.5 px-3 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Detail Modul
          </a>
          <a
            href={`mailto:${contactEmail}`}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full min-h-[44px] mt-2 py-2.5 px-4 text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Kontak Admin
          </a>
        </div>
      )}
    </header>
  );
}
