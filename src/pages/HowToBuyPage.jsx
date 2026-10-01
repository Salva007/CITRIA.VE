import React from 'react';
import { Link } from 'react-router-dom';
import HowToBuySection from '../components/home/HowToBuySection';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function HowToBuyPage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Guía de Compra Conversacional
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-citria-cocoa tracking-tight">
            Cómo comprar en <span className="text-citria-pink italic font-normal">CITRIA</span>
          </h1>
          <p className="text-sm sm:text-base text-citria-cocoa/75 max-w-xl mx-auto mt-3">
            Sin formularios complicados ni carritos obligatorios. Te atendemos personalmente por WhatsApp de inicio a fin.
          </p>
        </div>
      </div>

      {/* Main 4-step interactive flow */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <HowToBuySection showTitle={false} />

        {/* Detailed Breakdown Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-citria-pink/15 shadow-sm space-y-8">
          <div className="border-b border-citria-pink/10 pb-6">
            <h3 className="font-serif text-2xl font-bold text-citria-cocoa mb-2">
              ¿Por qué utilizamos un modelo de compra conversacional?
            </h3>
            <p className="text-sm text-citria-cocoa/75 leading-relaxed">
              En CITRIA vendemos piezas con alta rotación, creaciones artesanales hechas a mano y accesorios en colecciones limitadas. Al hablar directamente por WhatsApp podemos responder dudas en tiempo real sobre colores, medidas, tiempos de confección y acordar el método de pago más cómodo para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-citria-cocoa/80">
            <div className="p-5 rounded-2xl bg-citria-cream/80 border border-citria-pink/10 space-y-2">
              <h4 className="font-serif text-sm font-bold text-citria-cocoa">
                1. Atención 100% personalizada
              </h4>
              <p>
                Puedes solicitar fotos adicionales o videos de la pieza con luz natural para estar completamente segura de tu elección.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-citria-cream/80 border border-citria-pink/10 space-y-2">
              <h4 className="font-serif text-sm font-bold text-citria-cocoa">
                2. Entrega coordinada en tu zona
              </h4>
              <p>
                Coordinamos el punto exacto y horario de entrega en Lechería, Puerto La Cruz o Barcelona según tu conveniencia.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/catalogo"
              className="w-full sm:w-auto px-8 py-3.5 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Ir al Catálogo de Productos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-citria-pink/30 hover:border-citria-pink text-citria-cocoa hover:text-citria-pink rounded-full font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current text-citria-pink" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
