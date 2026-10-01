import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import productsData from '../../data/products.json';

export default function FeaturedProducts({ onQuickView }) {
  // Select a small cross-category sample from the real catalog. This is an editorial selection, not a sales claim.
  const featured = productsData.filter(p => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-white border-t border-citria-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-citria-pink-light text-citria-pink font-semibold text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Selección Exclusiva</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-citria-cocoa tracking-tight">
            Una selección de <span className="text-citria-pink italic font-normal">CITRIA</span>
          </h2>
          <p className="text-sm text-citria-cocoa/75 mt-2.5">
            Descubre algunas piezas del catálogo y consulta disponibilidad y precio actualizado directamente por WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom CTA to full catalog */}
        <div className="mt-14 text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-citria-cocoa hover:bg-citria-pink text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Ver todas las referencias del catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
