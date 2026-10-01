# CITRIA.VE — Sitio Web Oficial & Catálogo Digital Comercial

Sitio web oficial, catálogo interactivo y plataforma de comercio conversacional para **CITRIA**, marca de accesorios de moda y lifestyle ubicada en **Lechería, estado Anzoátegui, Venezuela**.

Diseñado bajo la premisa de **descubrimiento → inspiración → confianza → consulta por WhatsApp → pedido**, respetando fielmente el modelo comercial conversacional de la marca (sin obligar a carritos ni checkouts genéricos).

---

## 🍊 Características Principales

- **Arquitectura Editorial & Playful Premium:** Paleta oficial Rosa/Fucsia CITRIA (`#FA2A6A`), Rosa pastel (`#FFE5ED`), acentos cítricos y tipografía de moda (*Playfair Display*, *Plus Jakarta Sans*, y acentos manuscritos *Caveat*).
- **Catálogo Digital Filtrable:** Búsqueda en tiempo real por código (`#023`), nombre o categoría, con filtros interactivos para todas las colecciones oficiales.
- **WhatsApp Commerce Contextual:** Cada producto genera automáticamente un enlace de WhatsApp con el mensaje precargado correspondiente a la pieza y su código específico.
- **Gestión de Favoritos ("Mis Favoritos"):** Los visitantes pueden marcar piezas como favoritas y enviar una consulta agrupada a WhatsApp con todos sus ítems seleccionados.
- **Detalle de Producto & Enlace Compartible:** Modal interactivo con galería fotográfica, especificaciones y soporte de deep-linking para compartir piezas en redes sociales (`/#/catalogo?item=...` y `/#/producto/...`).
- **Hub de Enlaces ("Linktree Killer"):** Vista dedicada en `/#/links` con accesos rápidos optimizados para la biografía de Instagram (@citria.ve).
- **100% Mobile First & Responsive:** Navegación fluida y botón flotante de WhatsApp siempre accesible.
- **Información Comercial Verificada:** Transparencia en condiciones (100% de pago para confirmar, sin cancelaciones posteriores, delivery local en Lechería, Puerto La Cruz y Barcelona).

---

## 📂 Estructura del Proyecto

```text
CITRIA/
├── public/
│   ├── favicon.svg               # Icono de marca cítrico en SVG
│   ├── robots.txt                # Configuración de rastreo para buscadores
│   └── sitemap.xml               # Mapa del sitio con rutas indexables
├── src/
│   ├── assets/                   # Recursos gráficos adicionales
│   ├── components/
│   │   ├── catalog/
│   │   │   └── ProductModal.jsx  # Modal de vista rápida y consulta
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ManifestSection.jsx   # Manifiesto "Universo CITRIA"
│   │   │   ├── CategoryGrid.jsx      # Grid de colecciones
│   │   │   ├── FeaturedProducts.jsx  # Piezas destacadas
│   │   │   ├── EditorialLifestyle.jsx
│   │   │   ├── HowToBuySection.jsx   # 4 Pasos de compra
│   │   │   ├── DeliveryPaymentsSection.jsx
│   │   │   ├── SpotifySection.jsx    # Teaser playlist oficial
│   │   │   └── FinalCTA.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            # Barra superior con menú responsive
│   │   │   ├── Footer.jsx            # Pie editorial con enlaces legales y Spotify
│   │   │   └── FloatingWhatsApp.jsx  # Botón flotante persistente
│   │   └── ui/
│   │       ├── BrandLogo.jsx         # Logo SVG adaptable
│   │       ├── CitrusBadge.jsx       # Etiquetas y pills
│   │       ├── ProductCard.jsx       # Card de producto con WhatsApp directo
│   │       └── FavoritesDrawer.jsx   # Drawer lateral de favoritos
│   ├── context/
│   │   └── WishlistContext.jsx       # Persistencia en localStorage
│   ├── data/
│   │   ├── brandInfo.js              # Datos comerciales unificados (WhatsApp, zonas, pagos, FAQs)
│   │   ├── categories.js             # Categorías oficiales del catálogo
│   │   └── products.json             # Catálogo de productos estructurado
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CatalogPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── AboutPage.jsx             # Sobre CITRIA (editorial y manifiesto)
│   │   ├── HowToBuyPage.jsx          # Cómo comprar (4 pasos y condiciones)
│   │   ├── DeliveryPaymentsPage.jsx  # Métodos de pago y delivery local
│   │   ├── FaqPage.jsx               # Preguntas frecuentes verificadas
│   │   ├── ContactPage.jsx           # Canales oficiales (WhatsApp, Instagram, Lechería)
│   │   ├── LinksHubPage.jsx          # Reemplazo de Linktree
│   │   ├── PrivacyPage.jsx           # Términos de privacidad
│   │   └── TermsPage.jsx             # Condiciones comerciales y cancelaciones
│   ├── App.jsx                       # Rutas y layout global
│   ├── index.css                     # Tailwind CSS y utilidades visuales
│   └── main.jsx                      # Entrada React con HashRouter
├── CITRIA_INFO_COMERCIAL.md          # Ficha única de verdad de datos comerciales
├── tailwind.config.js                # Colores (#FA2A6A, #FFE5ED, etc.) y fuentes
├── vite.config.js                    # Configuración de compilador Vite
└── package.json
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos
- **Node.js**: v18.0 o superior (recomendado v20+ o v24+)
- **npm**: v9+

### Instalación de dependencias
```bash
npm install
```

### Servidor de Desarrollo Local
```bash
npm run dev
```
Abre en tu navegador la URL que indique la consola (habitualmente `http://localhost:5173`).

### Compilar para Producción
```bash
npm run build
```
Generará los archivos optimizados listos para desplegar en la carpeta `dist/`.

### Previsualizar la Compilación de Producción
```bash
npm run preview
```

---

## 🛠️ Guía de Personalización y Mantenimiento

### 1. ¿Cómo agregar o modificar productos?
Los productos se encuentran centralizados en [`src/data/products.json`](file:///c:/Users/PC/OneDrive/Desktop/CITRIA/src/data/products.json).
Para agregar un nuevo producto, añade un objeto con esta estructura:

```json
{
  "id": "cartera-miyuki-040",
  "code": "#040",
  "name": "Cartera Miyuki Coral Sun",
  "category": "miyuki",
  "categoryName": "Carteras Miyuki",
  "featured": true,
  "badge": "Nuevo",
  "description": "Descripción de la pieza con detalles sobre colores, cuentas y estilo.",
  "details": [
    "Técnica: Tejido artesanal con cuentas Miyuki",
    "Medidas: 20 cm x 14 cm",
    "Cierre con broche magnético"
  ],
  "images": [
    "https://tudominio.com/foto1.jpg",
    "https://tudominio.com/foto2.jpg"
  ],
  "price": null,
  "availability": "Consultar disponibilidad"
}
```
> **Nota de precios:** Si en el futuro CITRIA desea mostrar precios fijos, basta con asignar un valor a `"price"` (por ejemplo `"price": "$45"` o `"price": "45 USD"`). Si se deja en `null`, la web automáticamente mostrará *"Consultar disponibilidad y precio por WhatsApp"*.

---

### 2. ¿Cómo actualizar las categorías?
Las categorías oficiales están definidas en [`src/data/categories.js`](file:///c:/Users/PC/OneDrive/Desktop/CITRIA/src/data/categories.js). Puedes modificar nombres, insignias o imágenes de cabecera para cada colección.

---

### 3. ¿Cómo cambiar el número de WhatsApp oficial o el mensaje?
Abre [`src/data/brandInfo.js`](file:///c:/Users/PC/OneDrive/Desktop/CITRIA/src/data/brandInfo.js) y edita:

```javascript
whatsappNumber: "584141984129",      // Sin signos '+' ni espacios para la API
whatsappFormatted: "+58 414-1984129" // Formato visual legible
```

En ese mismo archivo encontrarás las funciones:
- `getProductWhatsAppUrl(product)`: Configura el texto enviado al consultar un producto.
- `getFavoritesWhatsAppUrl(items)`: Configura el texto enviado al consultar múltiples piezas guardadas.
- `getGeneralWhatsAppUrl()`: Configura el texto de consultas generales.

---

### 4. ¿Cómo actualizar redes sociales y Spotify?
En [`src/data/brandInfo.js`](file:///c:/Users/PC/OneDrive/Desktop/CITRIA/src/data/brandInfo.js):
- `instagramUrl`: Enlace a `@citria.ve`.
- `spotifyPlaylistUrl`: Reemplaza la URL con la playlist definitiva de Spotify.
- `deliveryZones`: Puedes añadir o ajustar sectores de Lechería, Puerto La Cruz y Barcelona.

---

### 5. ¿Cómo activar Google Analytics 4 o Meta Pixel?
Abre [`index.html`](file:///c:/Users/PC/OneDrive/Desktop/CITRIA/index.html) y descomenta el bloque de script de Google Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Sustituye `G-XXXXXXXXXX` por el ID de medición oficial de CITRIA.

---

### 6. ¿Cómo evolucionar a un CMS (Sanity / Supabase / Airtable)?
La interfaz no tiene productos hardcoded dentro de los componentes. Para conectar una base de datos externa:
1. Reemplaza la importación de `products.json` en `CatalogPage.jsx` y `FeaturedProducts.jsx` por una llamada `fetch` o cliente SDK (ej. `@sanity/client` o `@supabase/supabase-js`).
2. Mantén la misma forma de campos (`id`, `code`, `name`, `category`, `images`, `description`).

---

## 🎨 Paleta de Color Oficial

| Nombre | Código HEX | Aplicación |
| :--- | :--- | :--- |
| **Rosa/Fucsia CITRIA** | `#FA2A6A` | Botones de acción, enlaces destacados, acentos |
| **Rosa Pastel** | `#FFE5ED` | Fondos secundarios, badges suaves |
| **Crema CITRIA** | `#FFF9F5` | Fondo principal cálido y editorial |
| **Marrón Cacao** | `#2A1810` | Tipografía principal, títulos con carácter |
| **Naranja Cítrico** | `#FF7A00` | Destellos veraniegos y contrastes |
| **Amarillo Cítrico** | `#FFD13B` | Detalles luminosos y notas vivas |

---

## 📱 Rutas del Sitio

- `/` — Inicio (Hero, Manifiesto, Categorías, Destacados, Editorial, Cómo comprar, Pagos/Delivery, Spotify, CTA final)
- `/#/catalogo` — Catálogo con buscador por código (#023), filtros y consulta directa
- `/#/producto/:id` — Ficha individual con galería, detalles y botón contextual de WhatsApp
- `/#/como-comprar` — Los 4 pasos del proceso conversacional y condiciones de reserva
- `/#/delivery-y-pagos` — Zonas de Lechería, PLC, Barcelona y métodos de pago
- `/#/sobre-citria` — Manifiesto de marca, filosofía y esencia artesanal
- `/#/faq` — 8 Preguntas frecuentes verificadas
- `/#/contacto` — Canales oficiales directos (WhatsApp y Instagram)
- `/#/links` — Hub optimizado para biografía de Instagram (reemplazo Linktree)
- `/#/privacidad` — Política de privacidad
- `/#/terminos` — Términos y condiciones de compra

---

© CITRIA.VE · Lechería, Estado Anzoátegui, Venezuela.
