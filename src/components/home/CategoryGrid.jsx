import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export default function CategoryGrid() {
  // Exclude 'todas' from the visual grid
  const categoriesToDisplay = CATEGORIES.filter(c => c.id !== 'todas');

  return (
    <section className="py-20 bg-citria-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-citria-pink block mb-2">
              Exploración por Categorías
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-citria-cocoa tracking-tight">
              Colecciones que expresan <span className="italic text-citria-pink font-normal">tu estilo</span>
            </h2>
          </div>
          <Link
            to="/catalogo"
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-citria-cocoa hover:text-citria-pink inline-flex items-center gap-1 group"
          >
            <span>Ver todo el catálogo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Visual Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoriesToDisplay.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalogo?categoria=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-citria-cocoa shadow-sm hover:shadow-card transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Background Image */}
              <img
                src={cat.heroImage}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-citria-cocoa/90 via-citria-cocoa/30 to-transparent group-hover:from-citria-cocoa/95 transition-all" />

              {/* Top Badge */}
              {cat.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-citria-cocoa text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                    {cat.badge}
                  </span>
                </div>
              )}

              {/* Card Footer Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest text-citria-pink-light font-semibold mb-1">
                  CITRIA · Find
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold group-hover:text-citria-pink-light transition-colors leading-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-white/70 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-citria-pink group-hover:translate-x-1 transition-transform">
                  <span>Ver piezas</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
