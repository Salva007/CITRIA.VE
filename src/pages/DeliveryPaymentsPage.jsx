import React from 'react';
import DeliveryPaymentsSection from '../components/home/DeliveryPaymentsSection';
import { Truck, ShieldCheck, MapPin, AlertCircle, MessageCircle } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function DeliveryPaymentsPage() {
  const whatsappUrl = getGeneralWhatsAppUrl("Hola, CITRIA. Me gustaría consultar las opciones y costo de delivery para mi dirección en Anzoátegui.");

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Entregas & Medios de Pago
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-citria-cocoa tracking-tight">
            Delivery y <span className="text-citria-pink italic font-normal">Pagos</span>
          </h1>
          <p className="text-sm sm:text-base text-citria-cocoa/75 max-w-xl mx-auto mt-3">
            Información transparente sobre nuestras zonas de entrega local en Anzoátegui y las modalidades de pago aceptadas.
          </p>
        </div>
      </div>

      {/* Main Delivery & Payments Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <DeliveryPaymentsSection showTitle={false} />

        {/* Detailed FAQ / Policies regarding delivery & payments */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Delivery Details */}
          <div className="bg-white p-7 rounded-3xl border border-citria-pink/15 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-citria-pink">
              <Truck className="w-5 h-5" />
              <h3 className="font-serif text-xl font-bold text-citria-cocoa">
                Detalles sobre el Delivery
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-citria-cocoa/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Cálculo individual:</strong> El delivery no cuenta con tarifa plana fija porque depende de la distancia y el sector específico en Lechería, Puerto La Cruz o Barcelona.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Horarios coordinados:</strong> Acordamos contigo una ventana horaria conveniente para la recepción segura de tu paquete.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Embalaje cuidado:</strong> Todas las piezas viajan protegidas para asegurar que las cuentas Miyuki y accesorios delicados lleguen en perfecto estado.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Payment Policy */}
          <div className="bg-white p-7 rounded-3xl border border-citria-pink/15 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-citria-pink">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-serif text-xl font-bold text-citria-cocoa">
                Políticas de Pago y Confirmación
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-citria-cocoa/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>100% de pago por adelantado:</strong> Se requiere el pago total para confirmar la orden y apartar la pieza o iniciar su confección artesanal.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Sin cancelaciones posteriores:</strong> Una vez confirmado el pago no se admiten cancelaciones, ya que la pieza queda comprometida exclusivamente para el cliente.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Datos oficiales seguros:</strong> Las cuentas bancarias y datos de Pago Móvil se envían únicamente a través del número oficial de WhatsApp de CITRIA (+58 414-1984129).
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Action WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar delivery y pagos por WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
}
