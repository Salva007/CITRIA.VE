import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, Heart, Share2, ArrowLeft, ShieldCheck, MapPin, Sparkles, Check } from 'lucide-react';
import productsData from '../data/products.json';
import { getProductWhatsAppUrl, BRAND_INFO } from '../data/brandInfo';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useWishlist();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Find product by id or code
  const product = productsData.find(
    (p) => p.id === id || p.code?.replace('#', '') === id || p.code === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-citria-cocoa mb-2">
          Pieza no encontrada
        </h2>
        <p className="text-xs text-citria-cocoa/70 mb-6 max-w-sm">
          El producto solicitado no está disponible o el código es incorrecto.
        </p>
        <Link
          to="/catalogo"
          className="px-6 py-2.5 bg-citria-pink text-white rounded-full text-xs font-semibold hover:bg-citria-pink-hover transition-colors"
        >
          Explorar todo el catálogo
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(product.id);
  const images = product.images && product.images.length > 0
    ? product.images
    : ['/brand/citria-isotipo.png'];
  const whatsappUrl = getProductWhatsAppUrl(product);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Related products from the same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs text-citria-cocoa/60">
          <Link to="/" className="hover:text-citria-pink">Inicio</Link>
          <span>/</span>
          <Link to="/catalogo" className="hover:text-citria-pink">Catálogo</Link>
          <span>/</span>
          <Link to={`/catalogo?categoria=${product.category}`} className="hover:text-citria-pink">
            {product.categoryName || product.category}
          </Link>
          <span>/</span>
          <span className="text-citria-cocoa font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Product Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-citria-pink/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-citria-pink-subtle/50 shadow-inner">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain object-center transition-all duration-300"
              />
              {product.code && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-sm text-xs font-bold text-citria-cocoa">
                  Código {product.code}
                </div>
              )}
              {product.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-citria-pink text-white rounded-full shadow-sm text-[10px] font-bold uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
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

          {/* Right Column: Info & WhatsApp CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-citria-pink font-semibold uppercase tracking-widest mb-2">
                <span>{product.categoryName || product.category}</span>
                <span className="text-citria-cocoa/50 font-normal normal-case">
                  CITRIA · Lechería
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-citria-cocoa mb-3">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-sm sm:text-base text-citria-cocoa/80 leading-relaxed mb-6">
                  {product.description}
                </p>
              )}

              {/* Details List */}
              {product.details && product.details.length > 0 && (
                <div className="bg-citria-cream rounded-2xl p-5 border border-citria-pink/15 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-citria-cocoa mb-3">
                    Características & Especificaciones
                  </h4>
                  <ul className="space-y-2 text-xs text-citria-cocoa/80">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-citria-pink mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Commercial Notice Strictly from PRD */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-citria-orange flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-citria-cocoa">
                    {BRAND_INFO.commercialTerms.pricesDisclaimer}
                  </p>
                  <p className="text-citria-cocoa/75 text-[11px] leading-relaxed">
                    CITRIA requiere el 100% del pago para confirmar y asegurar tu pieza. Una vez confirmada no se admiten cancelaciones. Entregas locales en Lechería, Puerto La Cruz y Barcelona.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-citria-pink/15">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar este producto por WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => toggleFavorite(product)}
                  className={`py-3 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-colors ${
                    favorited
                      ? 'bg-citria-pink-light border-citria-pink text-citria-pink-dark font-semibold'
                      : 'border-citria-cocoa/20 text-citria-cocoa hover:border-citria-pink'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  <span>{favorited ? 'Guardado en Favoritos' : 'Guardar en Favoritos'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="py-3 px-4 rounded-xl text-xs font-medium border border-citria-cocoa/20 text-citria-cocoa hover:border-citria-pink flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? '¡Enlace copiado!' : 'Compartir pieza'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl font-bold text-citria-cocoa">
                Más piezas en <span className="text-citria-pink italic font-normal">{product.categoryName || product.category}</span>
              </h3>
              <Link
                to={`/catalogo?categoria=${product.category}`}
                className="text-xs font-bold uppercase tracking-wider text-citria-pink hover:underline"
              >
                Ver categoría →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>

    </div>
  );
}
