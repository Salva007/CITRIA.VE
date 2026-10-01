import React from 'react';
import { Search, MessageCircle, CheckCircle2, Truck, ShieldAlert, Sparkles } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function HowToBuySection({ showTitle = true }) {
  const whatsappUrl = getGeneralWhatsAppUrl();
  const stepIcons = [Search, MessageCircle, CheckCircle2, Truck];

  return (
    <section className="py-20 bg-white border-t border-citria-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
              Proceso de Compra Conversacional
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-citria-cocoa tracking-tight">
              ¿Cómo comprar en <span className="text-citria-pink italic font-normal">CITRIA?</span>
            </h2>
            <p className="text-sm text-citria-cocoa/75 mt-2">
              Un recorrido simple y cercano diseñado para que consigas tu accesorio ideal sin complicaciones.
            </p>
          </div>
        )}

        {/* 4 Steps Grid strictly matching PRD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BRAND_INFO.howToBuySteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="relative bg-citria-cream/50 p-6 rounded-3xl border border-citria-pink/15 hover:border-citria-pink/40 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-citria-pink/80">
                      PASO {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-citria-pink-light text-citria-pink-dark">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-citria-pink/10 flex items-center justify-center text-citria-pink mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-citria-cocoa mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-citria-cocoa/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-citria-pink/10 text-[11px] text-citria-pink font-semibold">
                  Paso {idx + 1} de 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Commercial Conditions Notice (Mandatory per PRD) */}
        <div className="mt-12 bg-citria-pink-light/40 border border-citria-pink/20 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-citria-pink text-white rounded-2xl flex-shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-base font-bold text-citria-cocoa">
                Condiciones comerciales importantes:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-citria-cocoa/80 pt-1">
                <li className="bg-white/80 p-3 rounded-xl border border-citria-pink/10">
                  <strong className="block text-citria-pink mb-0.5">100% de pago previo:</strong>
                  Requerido para confirmar el pedido y gestionar la reserva de la pieza.
                </li>
                <li className="bg-white/80 p-3 rounded-xl border border-citria-pink/10">
                  <strong className="block text-citria-pink mb-0.5">Tiempos variables:</strong>
                  El tiempo de entrega depende de cada pieza y se informa antes de realizar el pago.
                </li>
                <li className="bg-white/80 p-3 rounded-xl border border-citria-pink/10">
                  <strong className="block text-citria-pink mb-0.5">Sin cancelaciones:</strong>
                  Una vez confirmado el pedido no se permiten cancelaciones (se pide/elabora específicamente para ti).
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
