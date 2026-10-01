import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle, Instagram, ChevronDown, Sparkles } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';
import { CATEGORIES } from '../../data/categories';
import { useWishlist } from '../../context/WishlistContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { favorites, setIsFavoritesOpen } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Shop', path: '/catalogo' },
    { name: 'Cómo comprar', path: '/como-comprar' },
    { name: 'Delivery y Pagos', path: '/delivery-y-pagos' },
    { name: 'Sobre CITRIA', path: '/sobre-citria' },
    { name: 'FAQ', path: '/faq' },
  ];

  const generalWhatsappUrl = getGeneralWhatsAppUrl();

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'glass-header shadow-sm border-b border-citria-pink/15 py-2.5 sm:py-3'
        : 'bg-citria-cream/95 backdrop-blur-md py-3 sm:py-4'
    }`}>
      {/* Top Banner Notice - Responsive text sizes */}
      <div className="bg-citria-pink text-white text-[10px] sm:text-xs font-medium py-1 sm:py-1.5 px-3 text-center tracking-wider flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3 h-3 text-citria-yellow animate-pulse flex-shrink-0" />
        <span className="truncate">
          Venta conversacional por WhatsApp · Delivery en Lechería, PLC y Barcelona
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Official Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size="default" />
          </div>

          {/* Desktop Nav Items (visible on laptop & desktop: lg+) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            <NavLink
              to="/catalogo"
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-semibold transition-colors py-1 ${
                  isActive ? 'text-citria-pink' : 'text-citria-cocoa hover:text-citria-pink'
                }`
              }
            >
              Shop
            </NavLink>

            {/* Categorías Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-citria-cocoa hover:text-citria-pink transition-colors py-2"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <span>Categorías</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-citria-pink' : ''}`} />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-citria-pink/15 py-3 animate-in fade-in duration-150 z-50">
                  <div className="px-4 py-1.5 text-[10px] uppercase font-bold text-citria-pink tracking-wider flex items-center justify-between">
                    <span>Colecciones CITRIA</span>
                    <img src="/brand/citria-isotipo.png" alt="" className="w-4 h-4 object-contain opacity-70" />
                  </div>
                  {CATEGORIES.filter(c => c.id !== 'todas').map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/catalogo?categoria=${cat.id}`}
                      className="flex items-center justify-between px-4 py-2 text-xs text-citria-cocoa hover:bg-citria-pink-light/50 hover:text-citria-pink transition-colors"
                    >
                      <span>{cat.name}</span>
                      {cat.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-citria-pink-light text-citria-pink font-semibold">
                          {cat.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest font-semibold transition-colors py-1 ${
                    isActive ? 'text-citria-pink' : 'text-citria-cocoa hover:text-citria-pink'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons (Instagram, Favorites, WhatsApp, Hamburger) */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
            {/* Instagram Link (Tablet & Desktop) */}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center p-2 rounded-full hover:bg-citria-pink-light text-citria-cocoa hover:text-citria-pink transition-colors"
              aria-label="Instagram CITRIA"
              title="Instagram @citria.ve"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative p-2 rounded-full hover:bg-citria-pink-light text-citria-cocoa hover:text-citria-pink transition-colors"
              aria-label="Ver favoritos guardados"
              title="Mis favoritos"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-citria-pink text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* WhatsApp CTA Button (Desktop & Tablet) */}
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">WhatsApp</span>
              <span className="md:hidden">Chat</span>
            </a>

            {/* Mobile / Tablet Menu Toggle (visible below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-citria-cocoa hover:bg-citria-pink-light transition-colors"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full Screen / Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] sm:top-[98px] bottom-0 bg-white/98 backdrop-blur-xl border-t border-citria-pink/20 shadow-2xl overflow-y-auto px-5 py-6 transition-all duration-300 z-50">
          <div className="max-w-md mx-auto flex flex-col space-y-4 pb-12">
            
            {/* Header in Drawer with Official Isotipo */}
            <div className="flex items-center justify-between pb-3 border-b border-citria-pink/15">
              <div className="flex items-center gap-2.5">
                <img src="/brand/citria-isotipo.png" alt="CITRIA" className="w-7 h-7 object-contain" />
                <span className="font-serif font-bold text-citria-cocoa text-base">Menú CITRIA</span>
              </div>
              <span className="text-[11px] text-citria-pink font-semibold">Lechería, VE</span>
            </div>

            <Link
              to="/catalogo"
              className="text-base font-semibold text-citria-cocoa hover:text-citria-pink py-2 border-b border-citria-pink/10 flex items-center justify-between"
            >
              <span>Ver Todo el Catálogo</span>
              <span className="text-[10px] bg-citria-pink text-white px-2.5 py-0.5 rounded-full font-bold uppercase">Shop</span>
            </Link>

            {/* Categories pills for mobile */}
            <div className="py-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-citria-pink block mb-2.5">
                Colecciones Populares
              </span>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.filter(c => c.id !== 'todas').map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/catalogo?categoria=${cat.id}`}
                    className="text-xs text-citria-cocoa font-medium hover:text-citria-pink p-2.5 bg-citria-cream rounded-xl border border-citria-pink/10 flex items-center justify-between"
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="text-citria-pink text-xs">›</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav Links */}
            <div className="space-y-1 pt-1 border-t border-citria-pink/10">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm font-semibold text-citria-cocoa hover:text-citria-pink py-2"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/links"
                className="block text-sm font-semibold text-citria-cocoa hover:text-citria-pink py-2"
              >
                Links Rápidos (Bio Instagram)
              </Link>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-citria-pink text-white rounded-2xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Hablar por WhatsApp (+58 414-1984129)</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-citria-pink-light text-citria-pink-dark rounded-2xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir en Instagram @citria.ve</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
