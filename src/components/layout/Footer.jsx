import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Music, MapPin, Sparkles, Heart } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <footer className="bg-citria-cocoa text-white pt-16 pb-12 relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-citria-pink via-citria-orange to-citria-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="white" />
            <p className="text-citria-pink-light/80 text-sm max-w-sm leading-relaxed">
              "Accesorios, detalles y finds especiales para acompañar tu estilo, regalar o simplemente hacer parte de tu día."
            </p>

            <div className="flex items-center gap-2 text-xs text-citria-pink-light/70 pt-1">
              <MapPin className="w-3.5 h-3.5 text-citria-pink flex-shrink-0" />
              <span>{BRAND_INFO.location}</span>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp {BRAND_INFO.whatsappFormatted}</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.handle}</span>
              </a>
            </div>
          </div>

          {/* Explorar Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-citria-pink">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/catalogo" className="text-white/80 hover:text-citria-pink transition-colors">
                  Catálogo Digital
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=miyuki" className="text-white/80 hover:text-citria-pink transition-colors">
                  Carteras Miyuki
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=bandoleros" className="text-white/80 hover:text-citria-pink transition-colors">
                  Bandoleros
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=lentes" className="text-white/80 hover:text-citria-pink transition-colors">
                  Lentes Oval
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=handmade" className="text-white/80 hover:text-citria-pink transition-colors">
                  Handmade & Custom
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Comercial Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-citria-pink">
              Compras & Dudas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/como-comprar" className="text-white/80 hover:text-citria-pink transition-colors">
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link to="/delivery-y-pagos" className="text-white/80 hover:text-citria-pink transition-colors">
                  Delivery y Pagos
                </Link>
              </li>
              <li>
                <Link to="/sobre-citria" className="text-white/80 hover:text-citria-pink transition-colors">
                  Sobre CITRIA
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-citria-pink transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white/80 hover:text-citria-pink transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Playlist & Links Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-citria-pink">
              Ecosistema CITRIA
            </h4>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Escucha CITRIA</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Acompaña tu exploración con la playlist oficial inspirada en el mood vibrante de la marca.
              </p>
              <a
                href={BRAND_INFO.spotifyPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>Abrir en Spotify</span>
                <span>→</span>
              </a>
            </div>

            <div className="pt-1">
              <Link
                to="/links"
                className="inline-flex items-center gap-1 text-xs text-citria-pink hover:underline"
              >
                <span>Acceso directo (Reemplazo Linktree)</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © {currentYear} CITRIA.VE · Todos los derechos reservados. Lechería, Venezuela.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/privacidad" className="hover:text-citria-pink transition-colors">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-citria-pink transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
