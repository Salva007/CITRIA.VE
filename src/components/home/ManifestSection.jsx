import React from 'react';
import { Sparkles, Palette, Layers, Sun } from 'lucide-react';

export default function ManifestSection() {
  const pillars = [
    {
      icon: Palette,
      title: "Color & Actitud",
      description: "Paletas luminosas, contrastes audaces y tonos cítricos pensados para elevar cualquier conjunto y transmitir energía."
    },
    {
      icon: Layers,
      title: "Textura & Detalle",
      description: "Desde el entramado milimétrico de las mostacillas Miyuki hasta el tacto suave de toallas, acetatos y algodones."
    },
    {
      icon: Sun,
      title: "Esencia Costera",
      description: "Inspirada en el sol, la brisa marina y el estilo casual chic de Lechería, Anzoátegui."
    },
    {
      icon: Sparkles,
      title: "Finds Personales",
      description: "Piezas que no siguen tendencias genéricas, sino que se sienten auténticas y conectan con quien las lleva."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-citria-pink/10">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 bg-citrus-dots pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Pre-title */}
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-citria-pink mb-3 block">
          Filosofía de Marca · Universo CITRIA
        </span>

        {/* Central Manifest Quote strictly from PRD */}
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-citria-cocoa leading-relaxed tracking-tight max-w-4xl mx-auto">
          "En CITRIA creemos que las cosas que elegimos tienen el poder de{' '}
          <span className="text-citria-pink italic font-normal">transformar un look</span>, acompañar momentos y convertirse en{' '}
          <span className="underline decoration-citria-yellow decoration-4 underline-offset-4">parte de nuestra historia</span>."
        </blockquote>

        <p className="mt-6 text-sm sm:text-base text-citria-cocoa/75 max-w-2xl mx-auto font-normal leading-relaxed">
          No vendemos simplemente accesorios: curamos color, textura, detalles y descubrimientos. Cada pieza está pensada para ser ese detalle especial que te alegra el día o ese regalo memorable que habla por ti.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-citria-cream/60 border border-citria-pink/10 hover:border-citria-pink/30 hover:bg-citria-pink-light/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-citria-pink text-white flex items-center justify-center mb-3.5 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-citria-cocoa mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-citria-cocoa/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
