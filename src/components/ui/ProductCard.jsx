import React from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';
import { getProductWhatsAppUrl } from '../../data/brandInfo';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const { isFavorite, toggleFavorite } = useWishlist();
  const favorited = isFavorite(product.id);
  const mainImage = product.image || product.images?.[0] || '/brand/citria-isotipo.png';
  const whatsappUrl = getProductWhatsAppUrl(product);

  const handleCardClick = () => {
    if (onQuickView) onQuickView(product);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-citria-pink/10 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Container with Badges & Quick Action */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-citria-pink-subtle/50">
        <img
          src={mainImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-citria-cocoa/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-1.5 z-10">
          {product.code && (
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/95 backdrop-blur-md text-citria-cocoa text-[10px] sm:text-[11px] font-bold rounded-full shadow-sm tracking-wider">
              {product.code}
            </span>
          )}
          {product.badge && (
            <span className="hidden xs:inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 bg-citria-pink text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product);
          }}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full transition-all duration-200 z-10 shadow-sm ${
            favorited
              ? 'bg-citria-pink text-white scale-110'
              : 'bg-white/90 text-citria-cocoa hover:text-citria-pink hover:bg-white'
          }`}
          aria-label={favorited ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Image (Desktop & Tablet) */}
        <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-citria-cocoa text-xs font-semibold rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 items-center gap-1.5 pointer-events-none">
          <Eye className="w-3.5 h-3.5" />
          <span>Ver detalles</span>
        </div>
      </div>

      {/* Content Info */}
      <div className="flex flex-col flex-1 p-3 sm:p-5">
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-citria-cocoa/60 mb-1">
          <span className="uppercase tracking-wider font-semibold text-[9px] sm:text-[11px] truncate">
            {product.categoryName || product.category}
          </span>
          <span className="text-[10px] sm:text-[11px] italic font-serif hidden xs:inline">CITRIA.VE</span>
        </div>

        <h3 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-citria-cocoa group-hover:text-citria-pink transition-colors line-clamp-1">
          {product.name}
        </h3>

        {product.description ? (
          <p className="text-[11px] sm:text-xs text-citria-cocoa/70 line-clamp-2 mt-1 mb-3 sm:mb-4 flex-1">
            {product.description}
          </p>
        ) : (
          <p className="text-[11px] sm:text-xs text-citria-cocoa/65 line-clamp-2 mt-1 mb-3 sm:mb-4 flex-1">
            Consulta precio y disponibilidad directamente por WhatsApp.
          </p>
        )}

        {/* Price & Commercial Status */}
        <div className="pt-2 sm:pt-3 border-t border-citria-pink/10 flex flex-col gap-2">
          <div className="flex items-baseline justify-between text-[10px] sm:text-xs">
            <span className="text-citria-cocoa/60 font-medium">
              Precio
            </span>
            <span className="font-semibold text-citria-pink">
              Por WhatsApp
            </span>
          </div>

          {/* Primary CTA: Contextual WhatsApp Button */}
          <a
            href={whatsappUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 sm:py-2.5 px-2.5 sm:px-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-xl text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.01] active:scale-[0.98]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current flex-shrink-0" />
            <span className="truncate">Consultar disponibilidad</span>
          </a>
        </div>
      </div>
    </article>
  );
}
