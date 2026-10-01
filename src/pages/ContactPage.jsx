import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Music, Sparkles } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function ContactPage() {
  const whatsappUrl = getGeneralWhatsAppUrl("¡Hola, CITRIA! Me gustaría comunicarme con ustedes directamente.");

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/50 to-citria-cream py-16 border-b border-citria-pink/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
            Canales Oficiales
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-citria-cocoa tracking-tight">
            Contacto <span className="text-citria-pink italic font-normal">CITRIA</span>
          </h1>
          <p className="text-sm sm:text-base text-citria-cocoa/75 max-w-xl mx-auto mt-3">
            Atención directa, cálida y personalizada a través de nuestros canales oficiales.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        
        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* WhatsApp Card */}
          <div className="bg-white p-8 rounded-3xl border border-citria-pink/20 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-citria-pink text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <span className="text-[10px] uppercase font-bold text-citria-pink tracking-widest block">
                Canal Comercial Principal
              </span>
              <h3 className="font-serif text-2xl font-bold text-citria-cocoa">
                WhatsApp Directo
              </h3>
              <p className="text-xs text-citria-cocoa/75 leading-relaxed">
                El canal oficial donde consultamos disponibilidad de piezas, confirmamos precios, facilitamos los datos de pago y coordinamos las entregas de delivery.
              </p>
              <div className="text-sm font-bold text-citria-cocoa pt-1">
                {BRAND_INFO.whatsappFormatted}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-2xl font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Abrir chat de WhatsApp</span>
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white p-8 rounded-3xl border border-citria-pink/20 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Instagram className="w-7 h-7" />
              </div>
              <span className="text-[10px] uppercase font-bold text-citria-pink tracking-widest block">
                Comunidad & Novedades
              </span>
              <h3 className="font-serif text-2xl font-bold text-citria-cocoa">
                Instagram Oficial
              </h3>
              <p className="text-xs text-citria-cocoa/75 leading-relaxed">
                Descubre nuevos lanzamientos, reels de styling, detalles de confección en vivo e historias con combinaciones y clientas luciendo sus piezas.
              </p>
              <div className="text-sm font-bold text-citria-cocoa pt-1">
                {BRAND_INFO.handle}
              </div>
            </div>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-citria-cocoa hover:bg-citria-pink text-white rounded-2xl font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Visitar perfil de Instagram</span>
            </a>
          </div>

        </div>

        {/* Location & Commercial Clarification Card strictly adhering to PRD */}
        <div className="bg-citria-pink-light/40 border border-citria-pink/20 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-citria-pink">
            <MapPin className="w-4 h-4" />
            <span>Zona de Operaciones</span>
          </div>

          <h4 className="font-serif text-xl font-bold text-citria-cocoa">
            {BRAND_INFO.location}
          </h4>

          <p className="text-xs text-citria-cocoa/80 leading-relaxed max-w-2xl">
            CITRIA opera como boutique digital con delivery y puntos de entrega coordinados en la zona metropolitana de Anzoátegui: <strong>Lechería, Puerto La Cruz y Barcelona</strong>. No poseemos tienda física abierta al público con horario comercial estático; toda la atención se realiza de forma personalizada.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-citria-cocoa/70">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-citria-pink" />
              <span>Atención ágil en línea</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-citria-orange" />
              <span>Respuesta durante el día</span>
            </span>
          </div>
        </div>

      </main>

    </div>
  );
}
