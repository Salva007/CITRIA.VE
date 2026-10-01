import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Sun, ArrowUpRight } from 'lucide-react';

export default function EditorialLifestyle() {
  return (
    <section className="py-24 bg-citria-cream relative overflow-hidden">
      {/* Subtle organic background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-citria-pink-light/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Moodboard */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              {/* Image 1: Fashion beads detail */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-2 border-white group">
                <img
                  src="/assets/citria/products/bandoleros_miyuki/CITRIA_Bandolero_Miyuki_050.jpg"
                  alt="Textura y detalle CITRIA"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-citria-cocoa uppercase tracking-wider">
                  Textura & Color
                </div>
              </div>

              {/* Quote pill */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-citria-pink/15">
                <span className="font-script text-2xl text-citria-pink font-bold block mb-1">
                  "El toque de color que falta en tu día"
                </span>
                <p className="text-xs text-citria-cocoa/75">
                  Piezas pensadas para acompañar fines de semana de sol, paseos por Lechería y noches entre amigos.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              {/* Highlight card */}
              <div className="bg-gradient-to-br from-citria-pink to-citria-orange p-6 rounded-3xl text-white shadow-card space-y-2">
                <Sun className="w-6 h-6 text-citria-yellow animate-spin-slow" />
                <h4 className="font-serif text-lg font-bold">
                  Diseñado para resaltar
                </h4>
                <p className="text-xs text-white/90 leading-relaxed">
                  Mostacillas, acetatos, bordados y siluetas que capturan miradas sin esfuerzo.
                </p>
              </div>

              {/* Image 2: Lifestyle beach/sunshine */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-2 border-white group">
                <img
                  src="/assets/citria/products/pareo_handmade/CITRIA_Pareo_Handmade_Personalizado.jpg"
                  alt="Lifestyle Lechería CITRIA"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-citria-pink tracking-wider">
                  Lechería Style
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-citria-pink">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lifestyle Editorial</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-citria-cocoa tracking-tight leading-tight">
              Color, textura y <span className="text-citria-pink italic font-normal">piezas únicas</span> para tu día a día.
            </h2>

            <p className="text-sm sm:text-base text-citria-cocoa/80 leading-relaxed font-normal">
              CITRIA nace del deseo de encontrar objetos que no se sientan genéricos. Cada accesorio combina artesanía, siluetas contemporáneas y tonos alegres inspirados en el ambiente de Lechería, Puerto La Cruz y Barcelona.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-citria-pink-light flex items-center justify-center text-citria-pink flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-citria-cocoa uppercase tracking-wider">
                    Carteras & Bandoleros Miyuki
                  </h4>
                  <p className="text-xs text-citria-cocoa/70">
                    Cuentas seleccionadas con precisión artesanal y herrajes resistentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-citria-pink-light flex items-center justify-center text-citria-pink flex-shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-citria-cocoa uppercase tracking-wider">
                    Piezas Custom & Handmade
                  </h4>
                  <p className="text-xs text-citria-cocoa/70">
                    Franelas personalizables, pareos con acabados a mano y ediciones limitadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow"
              >
                <span>Descubrir la colección</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
