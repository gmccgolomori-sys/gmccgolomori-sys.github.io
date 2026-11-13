import { useState } from 'react';
import { DEFAULT_PORTAL_CONFIG } from './data/systemsData';
import { Header } from './components/Header';
import { SystemsShowcase } from './components/SystemsShowcase';
import { Footer } from './components/Footer';
import { ResilientImage } from './components/ResilientImage';

export default function App() {
  const [selectedSystemId, setSelectedSystemId] = useState<string>(
    DEFAULT_PORTAL_CONFIG.systems[0].id
  );

  return (
    <div className="relative min-h-dvh flex flex-col bg-slate-950 text-slate-900">
      {/* Full-bleed Golo Mori background photo with measured contrast scrim */}
      <div className="fixed inset-0 h-dvh w-full z-0 pointer-events-none">
        <ResilientImage
          src={DEFAULT_PORTAL_CONFIG.backgroundImage}
          alt="Pemandangan senja Golo Mori di tepi laut"
          fallbackTitle={DEFAULT_PORTAL_CONFIG.brandName}
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/35 to-slate-950/80"
        />
      </div>

      {/* Foreground 1-Page Content */}
      <div className="relative z-10 min-h-dvh flex flex-col">
        <Header
          brandName={DEFAULT_PORTAL_CONFIG.brandName}
          contactEmail={DEFAULT_PORTAL_CONFIG.contactEmail}
          systems={DEFAULT_PORTAL_CONFIG.systems}
        />

        <main className="flex-1 flex flex-col">
          <SystemsShowcase
            pageTitle={DEFAULT_PORTAL_CONFIG.pageTitle}
            pageSubtitle={DEFAULT_PORTAL_CONFIG.pageSubtitle}
            systems={DEFAULT_PORTAL_CONFIG.systems}
            selectedSystemId={selectedSystemId}
            onSelectSystem={(id) => setSelectedSystemId(id)}
          />
        </main>

        <Footer config={DEFAULT_PORTAL_CONFIG} />
      </div>
    </div>
  );
}
