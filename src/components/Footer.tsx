import { PortalConfig } from '../data/systemsData';

interface FooterProps {
  config: PortalConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-slate-950/75 backdrop-blur-md border-t border-white/15 py-5 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <p className="text-white font-medium">
          &copy; {new Date().getFullYear()} {config.brandName} · Golo Mori
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {config.systems.map((sys) => (
            <a
              key={sys.id}
              href={sys.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 hover:text-white transition-colors"
            >
              {sys.indexLabel}. {sys.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
