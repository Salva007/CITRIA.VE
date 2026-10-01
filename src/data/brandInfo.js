/**
 * CITRIA.VE - Información oficial de marca y datos comerciales
 * Fuente de verdad unificada para la web oficial y catálogo digital.
 */

export const BRAND_INFO = {
  name: "CITRIA",
  handle: "@citria.ve",
  tagline: "Descubre algo que se sienta como tú.",
  subtagline: "Accesorios, detalles y finds especiales para acompañar tu estilo, regalar o simplemente hacer parte de tu día.",
  
  // Canales oficiales de contacto
  whatsappNumber: "584141984129",
  whatsappFormatted: "+58 414-1984129",
  instagramUrl: "https://www.instagram.com/citria.ve",
  linktreeUrl: "https://linktr.ee/citria",
  spotifyPlaylistUrl: null,
  
  // Ubicación y cobertura
  location: "Lechería, estado Anzoátegui, Venezuela",
  deliveryZones: [
    { name: "Lechería", description: "Delivery local en toda la zona metropolitana de Lechería." },
    { name: "Puerto La Cruz", description: "Envíos y entregas coordinadas en PLC." },
    { name: "Barcelona", description: "Entregas coordinadas en zonas céntricas y residenciales." }
  ],
  
  // Condiciones comerciales oficiales
  commercialTerms: {
    confirmationPayment: "100% del pago para confirmar el pedido",
    cancellationPolicy: "Una vez confirmado el pedido, no se permiten cancelaciones, ya que la pieza se solicita especialmente para el cliente.",
    deliveryTime: "El tiempo de entrega varía según cada pieza y se informa de manera personalizada al realizar el pedido.",
    deliveryPricing: "El costo de delivery se calcula individualmente durante la conversación comercial dependiendo de la dirección exacta.",
    pricesDisclaimer: "Disponibilidad, precio y tiempo de entrega sujetos a confirmación por WhatsApp."
  },

  // Métodos de pago aceptados
  paymentMethods: [
    {
      id: "pago-movil",
      name: "Pago Móvil",
      icon: "Smartphone",
      description: "Método de pago disponible. Los datos para realizar el pago se coordinan directamente con CITRIA."
    },
    {
      id: "transferencia",
      name: "Transferencias",
      icon: "Building2",
      description: "Método de pago disponible. Los datos se coordinan directamente con CITRIA."
    },
    {
      id: "divisas",
      name: "Divisas en efectivo",
      icon: "Banknote",
      description: "Pago en divisas disponible; los detalles se coordinan directamente con CITRIA."
    },
    {
      id: "usdt",
      name: "USDT / Cripto",
      icon: "Coins",
      description: "Pago mediante USDT; los datos de recepción se coordinan directamente con CITRIA."
    },
    {
      id: "otros",
      name: "Otros métodos",
      icon: "CreditCard",
      description: "Otros métodos pueden coordinarse directamente con CITRIA."
    }
  ],

  // 4 Pasos de compra
  howToBuySteps: [
    {
      step: "01",
      title: "Encuentra tu favorito",
      description: "Explora nuestro catálogo digital y selecciona la pieza, color o accesorio que más se identifique con tu estilo.",
      badge: "Explora"
    },
    {
      step: "02",
      title: "Escríbenos por WhatsApp",
      description: "Toca el botón 'Consultar disponibilidad' en el producto para abrir WhatsApp con los datos de la pieza precargados.",
      badge: "Consulta directa"
    },
    {
      step: "03",
      title: "Confirma tu pedido",
      description: "Te indicaremos precio actualizado y disponibilidad. Realiza el 100% del pago con tu método preferido para apartar tu pieza.",
      badge: "100% para apartar"
    },
    {
      step: "04",
      title: "Recíbelo en tu zona",
      description: "Coordinamos el delivery directo en Lechería, Puerto La Cruz o Barcelona para que disfrutes de tu find especial.",
      badge: "Entrega local"
    }
  ],

  // Preguntas frecuentes verificadas
  faqs: [
    {
      question: "¿Dónde está ubicada CITRIA?",
      answer: "CITRIA está ubicada en Lechería, estado Anzoátegui, Venezuela."
    },
    {
      question: "¿Realizan delivery?",
      answer: "Sí. Actualmente realizamos delivery local en Lechería, Puerto La Cruz y Barcelona. El costo se calcula individualmente según tu ubicación al momento de la conversación."
    },
    {
      question: "¿Cómo sé si un producto está disponible?",
      answer: "Escríbenos por WhatsApp tocando el botón de cualquier producto para confirmar su disponibilidad inmediata o tiempo de preparación antes de realizar el pago."
    },
    {
      question: "¿Cómo puedo conocer el precio?",
      answer: "Dado que el catálogo cuenta con piezas exclusivas, importadas y handmade, el precio exacto y vigente se confirma durante la conversación de WhatsApp."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos Pago Móvil, transferencias bancarias nacionales, divisas en efectivo, USDT (Binance) y otros métodos previamente acordados con CITRIA."
    },
    {
      question: "¿Cuánto debo pagar para confirmar mi pedido?",
      answer: "Actualmente se requiere el 100% del pago para confirmar el pedido y apartar o solicitar tu pieza."
    },
    {
      question: "¿Cuánto tarda mi pedido?",
      answer: "El tiempo exacto de entrega depende de cada pieza (disponibilidad inmediata en stock vs. piezas personalizadas o bajo pedido) y se te informa claramente antes del pago."
    },
    {
      question: "¿Puedo cancelar un pedido una vez confirmado?",
      answer: "Una vez confirmado el pedido no se pueden realizar cancelaciones, ya que la pieza se gestiona y aparta específicamente para ti."
    }
  ]
};

/**
 * Generador de enlace contextual de WhatsApp para un producto individual
 */
export function getProductWhatsAppUrl(product) {
  const code = product.code ? ` (${product.code})` : '';
  const text = `Hola, CITRIA. Me interesa el producto: ${product.name}${code}. ¿Podrían indicarme disponibilidad y precio?`;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generador de enlace contextual de WhatsApp para consulta general o personalizada
 */
export function getGeneralWhatsAppUrl(customMessage) {
  const defaultText = "Hola, CITRIA. Me gustaría hacer una consulta sobre sus accesorios y catálogo.";
  const text = customMessage || defaultText;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generador de enlace de WhatsApp para múltiples favoritos
 */
export function getFavoritesWhatsAppUrl(items) {
  if (!items || items.length === 0) return getGeneralWhatsAppUrl();
  const itemList = items.map(item => `• ${item.name} (${item.code})`).join('\n');
  const text = `Hola, CITRIA. Estuve explorando su catálogo y me encantaron estas piezas:\n\n${itemList}\n\n¿Podrían indicarme disponibilidad y precio de cada una? ¡Muchas gracias!`;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
