import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const whatsappUrl = getGeneralWhatsAppUrl("Hola, CITRIA. Tengo una duda que no encontré en las preguntas frecuentes.");

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Centro de Ayuda & Respuestas
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-citria-cocoa tracking-tight">
            Preguntas <span className="text-citria-pink italic font-normal">Frecuentes</span>
          </h1>
          <p className="text-sm sm:text-base text-citria-cocoa/75 max-w-xl mx-auto mt-3">
            Todo lo que necesitas saber sobre nuestras piezas, tiempos de entrega, métodos de pago y proceso de compra.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        {BRAND_INFO.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? 'bg-white border-citria-pink/30 shadow-card'
                  : 'bg-white/80 border-citria-pink/15 hover:border-citria-pink/30'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-citria-pink-light text-citria-pink text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-citria-cocoa">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-full transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-citria-pink text-white' : 'text-citria-cocoa/50 bg-citria-cream'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-citria-cocoa/80 leading-relaxed border-t border-citria-pink/10 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Still have questions? */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-citria-pink/15 text-center shadow-sm space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-citria-pink-light text-citria-pink flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-citria-cocoa">
            ¿Tienes otra pregunta sobre tu pedido?
          </h3>
          <p className="text-xs text-citria-cocoa/70 max-w-md mx-auto">
            Estamos disponibles en WhatsApp para aclararte cualquier duda sobre piezas a la medida, colores o entregas.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>

      </main>

    </div>
  );
}
