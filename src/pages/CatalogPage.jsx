import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, MessageCircle, X, Sparkles, FileText } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import ProductModal from '../components/catalog/ProductModal';
import { CATEGORIES } from '../data/categories';
import productsData from '../data/products.json';
import { getGeneralWhatsAppUrl } from '../data/brandInfo';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria') || 'todas';
  const itemParam = searchParams.get('item');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state if URL search params change
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Deep-link to product modal if `item` param is present
  useEffect(() => {
    if (itemParam) {
      const found = productsData.find(p => p.id === itemParam || p.code === itemParam);
      if (found) {
        setSelectedProduct(found);
      }
    }
  }, [itemParam]);

  // Handle category change and update URL cleanly
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'todas') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', categoryId);
    }
    setSearchParams(searchParams);
  };

  // Filter products by category and search query (name, code, or description)
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'todas' || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.code && product.code.toLowerCase().includes(query)) ||
        product.description?.toLowerCase().includes(query) ||
        product.categoryName?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const whatsappGeneralUrl = getGeneralWhatsAppUrl("¡Hola, CITRIA! Estoy explorando su catálogo y me gustaría consultar disponibilidad de varias piezas.");

  return (
    <div className="min-h-screen bg-citria-cream pb-20">
      
      {/* Top Banner / Editorial Header */}
      <div className="bg-gradient-to-b from-citria-pink-light/40 to-citria-cream pt-10 pb-8 border-b border-citria-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-1.5">
                Catálogo Digital Oficial
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-citria-cocoa">
                Explora el Catálogo <span className="text-citria-pink italic font-normal">CITRIA</span>
              </h1>
              <p className="text-xs sm:text-sm text-citria-cocoa/75 mt-2 max-w-xl">
                Piezas numeradas por código. Consulta disponibilidad y precio directamente por WhatsApp.
              </p>
            </div>

            {/* Top Right Action: WhatsApp Inquiry */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filtering & Search Bar */}
      <div className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-citria-pink/15 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-citria-cocoa/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por código (#023), pieza o categoría..."
                className="w-full pl-10 pr-9 py-2.5 bg-citria-cream rounded-full text-xs text-citria-cocoa border border-citria-pink/20 focus:outline-none focus:border-citria-pink focus:ring-1 focus:ring-citria-pink transition-all placeholder:text-citria-cocoa/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-citria-cocoa/40 hover:text-citria-pink"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Active count notice */}
            <div className="text-xs text-citria-cocoa/70 hidden sm:block">
              Mostrando <strong className="text-citria-pink font-semibold">{filteredProducts.length}</strong> piezas encontradas
            </div>
          </div>

          {/* Horizontal Scrollable Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3.5 pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-citria-pink text-white shadow-sm scale-105'
                      : 'bg-citria-cream hover:bg-citria-pink-light/60 text-citria-cocoa/80 border border-citria-pink/15'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.id === 'miyuki' && <Sparkles className="w-3 h-3 text-citria-yellow" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Notice of commercial availability strictly according to PRD */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-citria-pink/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-citria-cocoa/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-citria-pink animate-pulse flex-shrink-0" />
            <span>
              <strong>Venta conversacional:</strong> Los precios y disponibilidad se confirman al momento por WhatsApp.
            </span>
          </div>
          <span className="text-citria-cocoa/60 italic text-[11px]">
            Lechería · Puerto La Cruz · Barcelona
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-citria-pink/15 my-8 p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-citria-pink-light flex items-center justify-center text-citria-pink">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-citria-cocoa mb-1">
              No encontramos piezas con ese criterio
            </h3>
            <p className="text-xs text-citria-cocoa/70 max-w-sm mx-auto mb-6">
              Prueba buscando por otro término, código o restablece los filtros de categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategorySelect('todas');
              }}
              className="px-6 py-2.5 bg-citria-pink text-white rounded-full text-xs font-semibold hover:bg-citria-pink-hover transition-colors"
            >
              Ver todas las categorías
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            // Remove item from query param without breaking history
            searchParams.delete('item');
            setSearchParams(searchParams);
          }}
        />
      )}
    </div>
  );
}
