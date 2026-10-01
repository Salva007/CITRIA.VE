import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import ManifestSection from '../components/home/ManifestSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import EditorialLifestyle from '../components/home/EditorialLifestyle';
import HowToBuySection from '../components/home/HowToBuySection';
import DeliveryPaymentsSection from '../components/home/DeliveryPaymentsSection';
import SpotifySection from '../components/home/SpotifySection';
import FinalCTA from '../components/home/FinalCTA';
import ProductModal from '../components/catalog/ProductModal';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Manifest (Universo CITRIA) */}
      <ManifestSection />

      {/* Visual Category Grid */}
      <CategoryGrid />

      {/* Featured Products Selection */}
      <FeaturedProducts onQuickView={(product) => setSelectedProduct(product)} />

      {/* Editorial & Lifestyle Section */}
      <EditorialLifestyle />

      {/* How to Buy 4-Step Process */}
      <HowToBuySection />

      {/* Delivery and Payments */}
      <DeliveryPaymentsSection />

      {/* Spotify Playlist Teaser */}
      <SpotifySection />

      {/* Final WhatsApp CTA */}
      <FinalCTA />

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
