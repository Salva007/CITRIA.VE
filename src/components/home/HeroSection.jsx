import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function HeroSection() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-citria-cream via-citria-pink-light/30 to-citria-cream pt-8 pb-16 lg:py-24">
      {/* Subtle citrus background shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-citria-pink/10 via-citria-orange/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-citria-pink/20 shadow-sm text-xs font-semibold text-citria-pink">
              <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>Catálogo CITRIA · Octubre 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-citria-orange" />
              <span className="text-citria-cocoa/70 font-medium">Lechería, VE</span>
            </div>

            {/* Main Hero Title strictly matching PRD */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-citria-cocoa tracking-tight leading-[1.12]">
              Descubre algo que se sienta <span className="text-citria-pink italic font-normal">como tú.</span>
            </h1>

            {/* Subtitle strictly matching PRD */}
            <p className="text-base sm:text-lg text-citria-cocoa/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Accesorios, detalles y finds especiales para acompañar tu estilo, regalar o simplemente hacer parte de tu día.
            </p>

            {/* CTAs strictly matching PRD */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/catalogo"
                className="w-full sm:w-auto px-8 py-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2.5"
              >
                <span>EXPLORAR CITRIA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-citria-pink-light/70 text-citria-cocoa border border-citria-pink/25 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2.5 hover:text-citria-pink"
              >
                <MessageCircle className="w-4 h-4 text-citria-pink fill-current" />
                <span>HABLAR POR WHATSAPP</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-citria-pink/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-citria-cocoa/75">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-citria-pink" />
                <span>Piezas Miyuki & Handmade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-citria-orange" />
                <span>Venta conversacional directa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-citria-yellow" />
                <span>Delivery: Lechería · PLC · Barcelona</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Layered Fashion Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Fashion Feature Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-citria-pink-subtle">
                <img
                  src="/assets/citria/products/carteras_miyuki/CITRIA_Cartera_Miyuki_023.jpg"
                  alt="Colección Miyuki CITRIA"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Fashion Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-serif font-bold text-citria-cocoa flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-citria-pink animate-ping" />
                  <span>Cartera Miyuki #023</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-citria-pink tracking-widest block">
                      Cartera Miyuki
                    </span>
                    <h3 className="font-serif text-sm font-bold text-citria-cocoa">
                      Cartera Miyuki #023
                    </h3>
                  </div>
                  <Link
                    to="/catalogo?item=cartera-miyuki-023"
                    className="p-2.5 bg-citria-pink text-white rounded-xl hover:bg-citria-pink-hover transition-colors shadow-sm"
                    aria-label="Ver pieza destacada"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Floating Secondary Mini Image Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 w-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
                <img
                  src="/assets/citria/products/lentes_oval/CITRIA_Lente_Oval_083.jpg"
                  alt="Lentes Oval CITRIA"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2.5 text-center">
                  <span className="text-[10px] uppercase font-bold text-citria-cocoa tracking-wider block">
                    Lentes Oval #083
                  </span>
                </div>
              </div>

              {/* Floating Note Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-citria-pink/20 items-center gap-2.5 rotate-[3deg]">
                <Heart className="w-4 h-4 text-citria-pink fill-current" />
                <span className="font-script text-base text-citria-cocoa font-bold">
                  "Hecho para resaltar"
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
