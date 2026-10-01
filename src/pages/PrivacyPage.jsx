import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, MessageCircle } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function PrivacyPage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Transparencia & Seguridad
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-citria-cocoa">
            Política de <span className="text-citria-pink italic font-normal">Privacidad</span>
          </h1>
          <p className="text-xs sm:text-sm text-citria-cocoa/70 max-w-xl mx-auto mt-2">
            Última actualización: Septiembre 2026 · CITRIA.VE (Lechería, Venezuela)
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-citria-pink/15 shadow-sm space-y-6 text-xs sm:text-sm text-citria-cocoa/80 leading-relaxed">
          
          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa flex items-center gap-2">
              <Shield className="w-4 h-4 text-citria-pink" />
              1. Identificación y Alcance
            </h3>
            <p>
              El presente sitio web es operado por <strong>CITRIA</strong>, marca de accesorios y productos de moda con operaciones en Lechería, estado Anzoátegui, Venezuela. Esta política describe cómo se gestiona la información que nos compartes al navegar por este catálogo o al contactarnos vía WhatsApp o Instagram.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              2. Modelo Comercial y Datos Recopilados
            </h3>
            <p>
              CITRIA opera bajo un modelo de <strong>venta conversacional</strong>. Nuestra web no requiere crear cuentas de usuario ni procesa pagos con tarjeta de crédito en línea. La información que proporcionas de forma voluntaria al iniciar una conversación en WhatsApp incluye:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-citria-cocoa/75">
              <li>Nombre o usuario de contacto.</li>
              <li>Referencias o códigos de productos de tu interés.</li>
              <li>Dirección o punto de referencia para la coordinación del delivery local en Lechería, Puerto La Cruz o Barcelona.</li>
              <li>Comprobante de pago al confirmar tu pedido.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              3. Uso Exclusivo de la Información
            </h3>
            <p>
              Tus datos son utilizados única y exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-citria-cocoa/75">
              <li>Atender tu consulta sobre disponibilidad y precio.</li>
              <li>Gestionar la confección o preparación de tu accesorio.</li>
              <li>Coordinar la entrega segura mediante nuestro servicio de delivery local.</li>
            </ul>
            <p>
              No vendemos, cedemos ni compartimos tu número telefónico o datos personales con terceros para fines publicitarios.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              4. Cookies y Analítica
            </h3>
            <p>
              Este sitio web puede utilizar cookies técnicas indispensables para su funcionamiento y para recordar tus piezas guardadas en la lista de favoritos en tu propio navegador. No se rastrea información confidencial de pago.
            </p>
          </section>

          <section className="space-y-2 border-t border-citria-pink/10 pt-4">
            <h3 className="font-serif text-lg font-bold text-citria-cocoa">
              5. Contacto para Dudas de Privacidad
            </h3>
            <p>
              Para cualquier consulta sobre el tratamiento de tus datos, puedes comunicarte directamente a nuestro WhatsApp oficial: <strong>{BRAND_INFO.whatsappFormatted}</strong> o escribirnos a través de nuestro perfil de Instagram <strong>{BRAND_INFO.handle}</strong>.
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
