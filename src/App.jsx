import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import FavoritesDrawer from './components/ui/FavoritesDrawer';
import { WishlistProvider } from './context/WishlistContext';

// Pages
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import HowToBuyPage from './pages/HowToBuyPage';
import DeliveryPaymentsPage from './pages/DeliveryPaymentsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LinksHubPage from './pages/LinksHubPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isLinksPage = location.pathname === '/links';

  return (
    <WishlistProvider>
      <ScrollToTop />
      
      {/* If viewing the dedicated Linktree bio page, render minimalist view */}
      {isLinksPage ? (
        <Routes>
          <Route path="/links" element={<LinksHubPage />} />
        </Routes>
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Main Navigation */}
          <Navbar />

          {/* Main View */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogo" element={<CatalogPage />} />
              <Route path="/producto/:id" element={<ProductDetailPage />} />
              <Route path="/sobre-citria" element={<AboutPage />} />
              <Route path="/como-comprar" element={<HowToBuyPage />} />
              <Route path="/delivery-y-pagos" element={<DeliveryPaymentsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/terminos" element={<TermsPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>

          {/* Main Footer */}
          <Footer />

          {/* Persistent Floating WhatsApp Action */}
          <FloatingWhatsApp />

          {/* Wishlist / Favorites Drawer */}
          <FavoritesDrawer />
        </div>
      )}
    </WishlistProvider>
  );
}
