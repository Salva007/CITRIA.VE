import React from 'react';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function FinalCTA() {
  const whatsappUrl = getGeneralWhatsAppUrl("¡Hola, CITRIA! Estuve viendo su web y me encantaron varios de sus accesorios. Quisiera consultar disponibilidad y precios.");

  return (
    <section className="py-20 bg-gradient-to-br from-citria-pink-light/60 via-citria-cream to-amber-50/50 relative overflow-hidden border-t border-citria-pink/15">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-citria-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm border border-citria-pink/20 text-xs font-semibold text-citria-pink">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Atención Directa & Cercana</span>
        </div>

        {/* Copy strictly matching PRD */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-citria-cocoa tracking-tight">
          ¿Viste algo que <span className="text-citria-pink italic font-normal">te encantó?</span>
        </h2>

        <p className="text-base sm:text-lg text-citria-cocoa/80 max-w-xl mx-auto leading-relaxed">
          Escríbenos y confirma disponibilidad, precio y opciones de entrega en Lechería, Puerto La Cruz o Barcelona.
        </p>

        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-float hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>HABLAR POR WHATSAPP</span>
          </a>
        </div>

        <p className="text-xs text-citria-cocoa/60 pt-2">
          WhatsApp oficial: {BRAND_INFO.whatsappFormatted} · Respuesta personalizada
        </p>
      </div>
    </section>
  );
}
