import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO, getGeneralWhatsAppUrl } from '../../data/brandInfo';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const url = getGeneralWhatsAppUrl(message.trim() || undefined);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Preview Popover */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-3xl shadow-2xl border border-citria-pink/20 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Popover Header */}
          <div className="bg-gradient-to-r from-citria-pink to-citria-orange p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-white/20 p-1 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight">CITRIA</h4>
                <p className="text-[10px] text-white/80">Atención personalizada · Lechería</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Popover Message Bubble */}
          <div className="p-4 bg-citria-pink-subtle/40 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-citria-pink/10 text-citria-cocoa leading-relaxed">
              <p className="font-medium text-citria-pink mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> ¡Hola! Bienvenida a CITRIA
              </p>
              <p>
                ¿Viste alguna pieza en el catálogo o tienes alguna pregunta sobre disponibilidad y delivery? Escríbenos directamente.
              </p>
            </div>
          </div>

          {/* Quick Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-citria-pink/10 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-citria-cream border border-citria-pink/20 focus:outline-none focus:border-citria-pink"
            />
            <button
              type="submit"
              className="p-2.5 bg-citria-pink hover:bg-citria-pink-hover text-white rounded-xl transition-colors flex-shrink-0"
              aria-label="Enviar a WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {!isOpen && (
          <span className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-citria-cocoa text-white text-xs font-medium rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Consultar por WhatsApp
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-citria-pink hover:bg-citria-pink-hover text-white flex items-center justify-center shadow-float hover:scale-105 active:scale-95 transition-all duration-200 z-10"
          aria-label="Contactar por WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-current" />
              {/* Online Ping indicator */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full animate-ping opacity-75" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
