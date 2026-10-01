import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Heart, Share2, ShieldCheck, MapPin, Truck, Check } from 'lucide-react';
import { getProductWhatsAppUrl, BRAND_INFO } from '../../data/brandInfo';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductModal({ product, onClose }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { isFavorite, toggleFavorite } = useWishlist();

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const favorited = isFavorite(product.id);
  const images = product.images && product.images.length > 0
    ? product.images
    : ['/brand/citria-isotipo.png'];
  const whatsappUrl = getProductWhatsAppUrl(product);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/#/catalogo?item=${product.id}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-citria-cocoa/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col md:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-citria-pink hover:text-white text-citria-cocoa shadow-md transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-citria-pink-subtle/50 flex flex-col justify-between flex-shrink-0">
          <div className="relative aspect-[4/3] sm:aspect-[4/5] max-h-[32vh] sm:max-h-none rounded-2xl overflow-hidden shadow-inner bg-white">
            <img
              src={images[selectedImageIndex]}
              alt={`${product.name} - Imagen ${selectedImageIndex + 1}`}
              className="w-full h-full object-contain object-center transition-all duration-300"
            />
            {product.code && (
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-citria-cocoa text-[11px] sm:text-xs font-bold rounded-full shadow-sm">
                Código {product.code}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-citria-pink scale-95 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          {/* Category & Code */}
          <div className="flex items-center justify-between text-xs text-citria-pink font-semibold uppercase tracking-widest mb-2">
            <span>{product.categoryName || product.category}</span>
            <span className="text-citria-cocoa/50 font-normal normal-case">
              CITRIA · Lechería
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-citria-cocoa mb-3">
            {product.name}
          </h2>

          {product.description && (
            <p className="text-sm text-citria-cocoa/80 leading-relaxed mb-6">
              {product.description}
            </p>
          )}

          {/* Details list */}
          {product.details && product.details.length > 0 && (
            <div className="mb-6 bg-citria-cream rounded-2xl p-4 border border-citria-pink/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-citria-cocoa mb-2.5">
                Detalles de la pieza
              </h4>
              <ul className="space-y-1.5 text-xs text-citria-cocoa/75">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Commercial Disclaimer (Mandatory per PRD) */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 mb-6 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-citria-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-citria-cocoa">
                {BRAND_INFO.commercialTerms.pricesDisclaimer}
              </p>
              <p className="text-[11px] text-citria-cocoa/70 mt-0.5">
                Para apartar tu pieza se requiere el 100% del pago. Entregas locales en Lechería, PLC y Barcelona.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-auto space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-2xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar este producto por WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => toggleFavorite(product)}
                className={`py-2.5 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-colors ${
                  favorited
                    ? 'bg-citria-pink-light border-citria-pink text-citria-pink-dark font-semibold'
                    : 'border-citria-cocoa/20 text-citria-cocoa hover:border-citria-pink'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
                <span>{favorited ? 'En Favoritos' : 'Guardar favorito'}</span>
              </button>

              <button
                onClick={handleShare}
                className="py-2.5 px-4 rounded-xl text-xs font-medium border border-citria-cocoa/20 text-citria-cocoa hover:border-citria-pink flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Enlace copiado!' : 'Compartir pieza'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
