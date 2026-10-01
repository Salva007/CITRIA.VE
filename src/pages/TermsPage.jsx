import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Condiciones de Compra
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-citria-cocoa">
            Términos y <span className="text-citria-pink italic font-normal">Condiciones</span>
          </h1>
          <p className="text-xs sm:text-sm text-citria-cocoa/70 max-w-xl mx-auto mt-2">
            Términos del modelo comercial conversacional de CITRIA.VE
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-citria-pink/15 shadow-sm space-y-6 text-xs sm:text-sm text-citria-cocoa/80 leading-relaxed">
          
          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa flex items-center gap-2">
              <FileText className="w-4 h-4 text-citria-pink" />
              1. Generalidades del Catálogo Digital
            </h3>
            <p>
              El sitio web de <strong>CITRIA</strong> funciona como un catálogo digital de exhibición y descubrimiento. No constituye una tienda automatizada con cobro directo ni inventario sincronizado en tiempo real. La compra se perfecciona mediante la confirmación mutua en el canal de WhatsApp oficial (<strong>{BRAND_INFO.whatsappFormatted}</strong>).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              2. Precios y Disponibilidad
            </h3>
            <p>
              Todos los productos presentados en la web están sujetos a confirmación previa de existencia, colores, opciones de personalización y cotización vigente al momento de la conversación. Los precios pueden variar según insumos, materiales y carácter exclusivo de cada pieza.
            </p>
          </section>

          <section className="space-y-2 bg-citria-pink-light/40 p-4 rounded-2xl border border-citria-pink/20">
            <h3 className="font-serif text-base font-bold text-citria-cocoa flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-citria-pink" />
              3. Confirmación del Pedido y Pago (100%)
            </h3>
            <p className="font-medium text-citria-cocoa">
              Para apartar cualquier pieza, asegurar su inventario o iniciar su confección artesanal, CITRIA requiere el <strong>100% del pago por adelantado</strong>.
            </p>
            <p className="text-[11px] text-citria-cocoa/75">
              Los pagos pueden realizarse vía Pago Móvil, transferencias bancarias nacionales, divisas en efectivo, USDT (Binance) u otros métodos acordados directamente.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-citria-orange" />
              4. Política de No Cancelaciones
            </h3>
            <p>
              Una vez confirmado el pedido y recibido el comprobante de pago, <strong>no se permiten cancelaciones ni devoluciones de dinero</strong>, dado que la pieza se aparta, solicita o elabora específicamente bajo el encargo del cliente.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              5. Tiempos de Entrega
            </h3>
            <p>
              El tiempo estimado de entrega puede variar según la naturaleza de cada pieza (disponibilidad inmediata en stock vs. piezas hechas a mano o bajo pedido). Este plazo será comunicado de manera transparente al cliente antes de que realice el pago.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              6. Cobertura y Costo de Delivery
            </h3>
            <p>
              Las entregas se coordinan exclusivamente en <strong>Lechería, Puerto La Cruz y Barcelona</strong> (estado Anzoátegui, Venezuela). El costo del servicio de delivery se calcula individualmente de acuerdo a la dirección suministrada por el comprador.
            </p>
          </section>

        </div>

        <div className="text-center pt-2">
          <Link
            to="/catalogo"
            className="text-xs text-citria-pink hover:underline font-semibold"
          >
            ← Volver al Catálogo de Productos
          </Link>
        </div>
      </main>

    </div>
  );
}
