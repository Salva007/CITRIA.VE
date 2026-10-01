import React from 'react';
import { Music, Play, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export default function SpotifySection() {
  return (
    <section className="py-14 bg-white border-t border-citria-pink/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-citria-cocoa via-neutral-900 to-citria-cocoa p-6 sm:p-8 text-white shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Subtle Spotify green glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Left info */}
          <div className="flex items-center gap-5 relative z-10 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Music className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                <span>Vibes & Moda</span>
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                <span>CITRIA Playlist</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Escucha CITRIA mientras exploras
              </h3>
              <p className="text-xs text-white/70 max-w-md mt-1">
                Canciones seleccionadas para conectar con el estilo libre, soleado y colorido de la marca.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href={BRAND_INFO.spotifyPlaylistUrl || BRAND_INFO.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{BRAND_INFO.spotifyPlaylistUrl ? 'Abrir en Spotify' : 'Ver en Linktree'}</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
