import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Sun, Layers, Palette, MessageCircle, MapPin } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function AboutPage() {
  const whatsappUrl = getGeneralWhatsAppUrl("¡Hola, CITRIA! Me encantó conocer la historia y filosofía de la marca.");

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-citria-pink-light/50 via-citria-cream to-citria-cream py-16 lg:py-24 border-b border-citria-pink/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 p-3 bg-white rounded-full shadow-card border-2 border-citria-pink flex items-center justify-center">
              <img
                src="/brand/citria-isotipo.png"
                alt="Isotipo CITRIA"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-citria-pink block">
            Nuestra Esencia & Universo
          </span>
          <div className="flex justify-center">
            <img
              src="/brand/citria-logo.png"
              alt="Logotipo CITRIA"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="text-base sm:text-lg text-citria-cocoa/80 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            "Descubrir piezas especiales que expresen quién eres."
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-citria-pink font-semibold pt-2">
            <MapPin className="w-4 h-4" />
            <span>{BRAND_INFO.location}</span>
          </div>
        </div>
      </section>

      {/* Main Editorial Story */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Quote Block strictly from catalog */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-citria-pink/15 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-citria-pink-light/50 rounded-full blur-2xl pointer-events-none" />
          <span className="font-script text-3xl sm:text-4xl text-citria-pink font-bold block mb-4">
            El Manifiesto CITRIA
          </span>
          <blockquote className="font-serif text-xl sm:text-2xl font-medium text-citria-cocoa leading-relaxed max-w-3xl mx-auto">
            "En CITRIA creemos que las cosas que elegimos tienen el poder de transformar un look, acompañar momentos y convertirse en parte de nuestra historia."
          </blockquote>
          <p className="text-xs sm:text-sm text-citria-cocoa/70 mt-6 max-w-xl mx-auto leading-relaxed">
            La marca no vende únicamente accesorios. Nuestra propuesta gira alrededor del color, las texturas, los pequeños detalles, los looks memorables y aquellos objetos que se sienten íntimamente personales.
          </p>
        </div>

        {/* 2-Column Story: Universo Visual & Handmade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-citria-pink">
              Universo Visual
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-citria-cocoa">
              Color, calidez y actitud costera
            </h2>
            <p className="text-sm text-citria-cocoa/80 leading-relaxed">
              Inspirados en la luminosidad de Lechería y el oriente venezolano, cada pieza refleja una vibra fresca y sofisticada. Buscamos combinaciones cromáticas alegres: rosas luminosos, toques cítricos, destellos dorados y tonalidades neutras que contrastan con naturalidad.
            </p>
            <p className="text-sm text-citria-cocoa/80 leading-relaxed">
              No seguimos esquemas corporativos fríos; preferimos el calor de lo auténtico y la emoción de encontrar esa pieza que te saca una sonrisa.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/5]">
            <img
              src="/assets/citria/products/carteras_miyuki/CITRIA_Cartera_Miyuki_001.jpg"
              alt="Mundo visual CITRIA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2-Column: Handmade & Customization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/5] order-2 md:order-1">
            <img
              src="/assets/citria/products/franelas_custom/CITRIA_Franela_Custom_01.jpg"
              alt="Handmade y dedicación artesanal"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 order-1 md:order-2">
            <span className="text-xs uppercase tracking-widest font-bold text-citria-pink">
              Dedicación & Cuidado
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-citria-cocoa">
              Piezas Handmade & Custom
            </h2>
            <p className="text-sm text-citria-cocoa/80 leading-relaxed">
              Gran parte de nuestro catálogo destaca por procesos manuales y artesanales minuciosos: el tejido con mostacillas y cuentas Miyuki, el teñido de pareos playeros y la personalización de franelas y complementos.
            </p>
            <p className="text-sm text-citria-cocoa/80 leading-relaxed">
              Al tratarse de creaciones exclusivas o bajo pedido, cada producto requiere atención al detalle, asegurando una experiencia única para cada cliente.
            </p>
          </div>
        </div>

        {/* Transparent Brand Notes & Future Data Placeholders (Respecting PRD Rule 23) */}
        <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-citria-pink/20 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-citria-cocoa uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-citria-pink" />
            <span>Ficha de Identidad de Marca</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-citria-cream">
              <span className="text-[10px] uppercase font-bold text-citria-pink block mb-1">
                Ubicación Oficial
              </span>
              <p className="text-citria-cocoa font-medium">
                Lechería, Anzoátegui, Venezuela
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-citria-cream">
              <span className="text-[10px] uppercase font-bold text-citria-pink block mb-1">
                Comunidad en Redes
              </span>
              <p className="text-citria-cocoa font-medium">
                Instagram: {BRAND_INFO.handle}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-citria-cream">
              <span className="text-[10px] uppercase font-bold text-citria-pink block mb-1">
                Atención & Pedidos
              </span>
              <p className="text-citria-cocoa font-medium">
                WhatsApp: {BRAND_INFO.whatsappFormatted}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-citria-cream">
              <span className="text-[10px] uppercase font-bold text-citria-pink block mb-1">
                Historia y Fundación
              </span>
              <p className="text-citria-cocoa/70 italic">
                [INFORMACIÓN POR SUMINISTRAR POR CITRIA OFICIAL]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Conversar con CITRIA por WhatsApp</span>
          </a>
        </div>

      </main>
    </div>
  );
}
