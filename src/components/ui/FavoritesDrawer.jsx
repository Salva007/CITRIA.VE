import React from 'react';
import { X, Trash2, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { getFavoritesWhatsAppUrl } from '../../data/brandInfo';

export default function FavoritesDrawer() {
  const { favorites, removeFavorite, clearFavorites, isFavoritesOpen, setIsFavoritesOpen } = useWishlist();

  if (!isFavoritesOpen) return null;

  const whatsappBulkUrl = getFavoritesWhatsAppUrl(favorites);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-citria-cocoa/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsFavoritesOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-citria-pink-light/40 border-b border-citria-pink/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-citria-pink text-white rounded-full">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-citria-cocoa">
                  Mis Favoritos
                </h3>
                <p className="text-xs text-citria-cocoa/60">
                  {favorites.length} {favorites.length === 1 ? 'pieza guardada' : 'piezas guardadas'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="p-2 rounded-full hover:bg-white text-citria-cocoa transition-colors"
              aria-label="Cerrar favoritos"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favorites.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-citria-pink-light flex items-center justify-center text-citria-pink">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-citria-cocoa mb-1">
                  Aún no tienes favoritos
                </h4>
                <p className="text-xs text-citria-cocoa/70 max-w-xs mx-auto mb-6">
                  Toca el corazón en cualquier pieza del catálogo para guardarla aquí y consultarlas juntas por WhatsApp.
                </p>
                <button
                  onClick={() => setIsFavoritesOpen(false)}
                  className="px-5 py-2.5 bg-citria-pink text-white text-xs font-semibold rounded-full hover:bg-citria-pink-hover transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explorar catálogo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-citria-pink/10 hover:border-citria-pink/30 bg-citria-cream/40 transition-colors"
                >
                  <img
                    src={item.image || item.images?.[0] || '/brand/citria-isotipo.png'}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-citria-pink uppercase tracking-wider">
                      {item.code || 'CITRIA'}
                    </span>
                    <h5 className="font-serif text-sm font-semibold text-citria-cocoa truncate">
                      {item.name}
                    </h5>
                    <span className="text-xs text-citria-cocoa/60">
                      Consultar disponibilidad
                    </span>
                  </div>
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="p-2 text-citria-cocoa/40 hover:text-red-500 rounded-lg transition-colors"
                    aria-label="Eliminar favorito"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Bulk WhatsApp Action */}
          {favorites.length > 0 && (
            <div className="p-6 border-t border-citria-pink/15 bg-white space-y-3">
              <a
                href={whatsappBulkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar {favorites.length} piezas por WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-citria-cocoa/60 pt-1">
                <span>Consulta directa con CITRIA</span>
                <button
                  onClick={clearFavorites}
                  className="text-[11px] text-red-500 hover:underline"
                >
                  Vaciar lista
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
