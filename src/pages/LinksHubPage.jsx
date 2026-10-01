import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag, Music, Instagram, Sparkles, MapPin, Truck, HelpCircle } from 'lucide-react';
import BrandLogo from '../components/ui/BrandLogo';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function LinksHubPage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  const links = [
    {
      title: "Explorar Catálogo Digital",
      subtitle: "Piezas Miyuki, Lentes Oval, Phone Cases y más",
      icon: ShoppingBag,
      to: "/catalogo",
      isInternal: true,
      highlight: true
    },
    {
      title: "Consultar por WhatsApp",
      subtitle: `Atención directa personalizada (${BRAND_INFO.whatsappFormatted})`,
      icon: MessageCircle,
      href: whatsappUrl,
      isInternal: false,
      color: "bg-citria-pink text-white"
    },
    {
      title: "Escucha CITRIA",
      subtitle: "Playlist y enlaces de CITRIA",
      icon: Music,
      href: BRAND_INFO.spotifyPlaylistUrl || BRAND_INFO.linktreeUrl,
      isInternal: false,
      color: "bg-neutral-900 text-white hover:text-emerald-400"
    },
    {
      title: "¿Cómo Comprar & Delivery?",
      subtitle: "4 pasos fáciles · Entregas en Lechería, PLC y BNA",
      icon: Truck,
      to: "/como-comprar",
      isInternal: true
    },
    {
      title: "Preguntas Frecuentes (FAQ)",
      subtitle: "Métodos de pago, tiempos de entrega y dudas",
      icon: HelpCircle,
      to: "/faq",
      isInternal: true
    },
    {
      title: "Instagram @citria.ve",
      subtitle: "Nuevos lanzamientos, fotos y looks",
      icon: Instagram,
      href: BRAND_INFO.instagramUrl,
      isInternal: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-citria-pink-light/60 via-citria-cream to-citria-cream py-12 px-4 flex flex-col items-center justify-center">
      
      {/* Bio Profile Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-citria-pink/20 text-center space-y-6">
        
        {/* Brand Avatar & Logo */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-24 h-24 rounded-full bg-white p-2.5 shadow-card border-2 border-citria-pink flex items-center justify-center">
            <img
              src="/brand/citria-isotipo.png"
              alt="CITRIA Isotipo Oficial"
              className="w-full h-full object-contain"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-sm" title="Atención activa por WhatsApp" />
          </div>

          <BrandLogo showSubtitle={true} className="justify-center" size="default" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-citria-pink-light text-citria-pink text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>Finds Especiales · Lechería, VE</span>
          </div>
          <p className="text-xs text-citria-cocoa/75 max-w-xs mx-auto leading-relaxed">
            Accesorios, detalles y piezas especiales para acompañar tu estilo o regalar.
          </p>
        </div>

        {/* Links Stack */}
        <div className="space-y-3">
          {links.map((link, idx) => {
            const Icon = link.icon;
            const content = (
              <div
                className={`w-full p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                  link.color
                    ? link.color
                    : link.highlight
                    ? 'bg-gradient-to-r from-citria-pink to-citria-orange text-white'
                    : 'bg-citria-cream hover:bg-citria-pink-light/50 border border-citria-pink/15 text-citria-cocoa'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${link.highlight || link.color ? 'bg-white/20' : 'bg-white shadow-sm text-citria-pink'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold truncate">
                    {link.title}
                  </h4>
                  <p className={`text-[11px] truncate ${link.highlight || link.color ? 'text-white/80' : 'text-citria-cocoa/60'}`}>
                    {link.subtitle}
                  </p>
                </div>
              </div>
            );

            return link.isInternal ? (
              <Link key={idx} to={link.to} className="block">
                {content}
              </Link>
            ) : (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-citria-pink/10 text-[11px] text-citria-cocoa/60 space-y-1">
          <p className="font-semibold text-citria-cocoa">CITRIA.VE</p>
          <p>Lechería · Puerto La Cruz · Barcelona</p>
        </div>

      </div>

      {/* Return to main site link */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-xs text-citria-cocoa/70 hover:text-citria-pink font-semibold underline underline-offset-4"
        >
          ← Volver al sitio web principal
        </Link>
      </div>

    </div>
  );
}
