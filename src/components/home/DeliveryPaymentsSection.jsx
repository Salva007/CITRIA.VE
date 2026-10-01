import React from 'react';
import { Smartphone, Building2, Banknote, Coins, CreditCard, MapPin, MessageCircle, Truck } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function DeliveryPaymentsSection({ showTitle = true }) {
  const whatsappDeliveryUrl = getGeneralWhatsAppUrl("Hola, CITRIA. Me gustaría consultar el costo y opciones de delivery para mi ubicación en Anzoátegui.");

  const paymentIcons = {
    'pago-movil': Smartphone,
    'transferencia': Building2,
    'divisas': Banknote,
    'usdt': Coins,
    'otros': CreditCard
  };

  return (
    <section className="py-20 bg-citria-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
              Flexibilidad & Confianza
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-citria-cocoa tracking-tight">
              Métodos de Pago & <span className="text-citria-pink italic font-normal">Delivery Local</span>
            </h2>
            <p className="text-sm text-citria-cocoa/75 mt-2">
              Facilidad de pago en moneda nacional o divisas y entrega coordinada directa a tu puerta.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Delivery in Lechería, PLC, Barcelona */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-citria-pink/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-citria-pink-light text-citria-pink text-xs font-semibold mb-4">
                <Truck className="w-3.5 h-3.5" />
                <span>Zona Metropolitana Anzoátegui</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-citria-cocoa mb-3">
                Cobertura de Delivery
              </h3>

              <p className="text-sm text-citria-cocoa/80 leading-relaxed mb-6">
                Actualmente realizamos entregas y delivery local coordinado en tres ciudades principales del estado Anzoátegui. El costo se calcula de forma personalizada según tu dirección específica.
              </p>

              {/* Zones */}
              <div className="space-y-3 mb-6">
                {BRAND_INFO.deliveryZones.map((zone) => (
                  <div
                    key={zone.name}
                    className="p-3.5 rounded-2xl bg-citria-cream border border-citria-pink/10 flex items-start gap-3"
                  >
                    <div className="p-2 bg-citria-pink/10 text-citria-pink rounded-xl flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-citria-cocoa uppercase tracking-wider">
                        {zone.name}
                      </h4>
                      <p className="text-xs text-citria-cocoa/70 mt-0.5">
                        {zone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery CTA */}
            <div className="pt-4 border-t border-citria-pink/10">
              <a
                href={whatsappDeliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-citria-cocoa hover:bg-citria-pink text-white rounded-2xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar delivery por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Payment Methods */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-citria-pink/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold mb-4 border border-amber-200">
                <Banknote className="w-3.5 h-3.5 text-citria-orange" />
                <span>Múltiples opciones seguras</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-citria-cocoa mb-3">
                Métodos de Pago Aceptados
              </h3>

              <p className="text-sm text-citria-cocoa/80 leading-relaxed mb-6">
                Para tu comodidad aceptamos los métodos más prácticos de Venezuela. Los datos de pago oficiales se te proporcionan directamente en el chat comercial al confirmar tu pieza.
              </p>

              {/* Methods List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {BRAND_INFO.paymentMethods.map((method) => {
                  const Icon = paymentIcons[method.id] || CreditCard;
                  return (
                    <div
                      key={method.id}
                      className="p-3.5 rounded-2xl bg-citria-pink-subtle/50 border border-citria-pink/15 flex items-start gap-3"
                    >
                      <div className="p-2 bg-white rounded-xl text-citria-pink shadow-sm flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-citria-cocoa">
                          {method.name}
                        </h4>
                        <p className="text-[11px] text-citria-cocoa/70 mt-0.5 leading-snug">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-citria-pink/10 text-xs text-citria-cocoa/70 text-center">
              Recuerda que se solicita el <strong>100% del pago</strong> para confirmar y apartar tu pedido.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
