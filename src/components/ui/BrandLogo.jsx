import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BrandLogo - Renderiza el logotipo o isotipo oficial de CITRIA
 * @param {'default'|'white'|'isotipo'|'isotipo-white'} variant
 * @param {boolean} showSubtitle
 * @param {string} className
 * @param {number} height
 */
export default function BrandLogo({
  variant = 'default',
  showSubtitle = true,
  className = '',
  size = 'default' // 'sm', 'default', 'lg'
}) {
  const isWhite = variant === 'white' || variant === 'isotipo-white';
  const isIsotipo = variant === 'isotipo' || variant === 'isotipo-white';

  const logoSrc = isWhite ? '/brand/citria-logo-white.png' : '/brand/citria-logo.png';
  const isotipoSrc = isWhite ? '/brand/citria-isotipo-white.png' : '/brand/citria-isotipo.png';

  const heights = {
    sm: isIsotipo ? 'h-7 sm:h-8' : 'h-7 sm:h-8',
    default: isIsotipo ? 'h-9 sm:h-11' : 'h-8 sm:h-10 lg:h-11',
    lg: isIsotipo ? 'h-14 sm:h-16' : 'h-12 sm:h-14 lg:h-16'
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="CITRIA - Ir al inicio"
    >
      {isIsotipo ? (
        <img
          src={isotipoSrc}
          alt="CITRIA Isotipo Oficial"
          className={`${heights[size] || heights.default} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}
        />
      ) : (
        <div className="flex flex-col items-start">
          <img
            src={logoSrc}
            alt="CITRIA Logotipo Oficial"
            className={`${heights[size] || heights.default} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-sm`}
          />
          {showSubtitle && (
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-sans font-semibold mt-0.5 pl-0.5 ${
                isWhite ? 'text-citria-pink-light/80' : 'text-citria-cocoa/60'
              }`}
            >
              Lechería · VE
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

/**
 * BrandIsotipo - Componente dedicado para el isotipo de la 'C' con el gajo de cítrico
 */
export function BrandIsotipo({ variant = 'default', className = '', alt = 'CITRIA' }) {
  const isWhite = variant === 'white';
  const src = isWhite ? '/brand/citria-isotipo-white.png' : '/brand/citria-isotipo.png';

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
}
