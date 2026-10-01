# CITRIA — Integración de catálogo real

Este proyecto contiene los assets reales extraídos del catálogo CITRIA Octubre 2026.

## Datos
- 214 productos en `src/data/products.json`
- Manifest original en `public/assets/citria/CITRIA_products_manifest.csv` y `.json`
- Imágenes organizadas por categoría en `public/assets/citria/products/`

## Reglas
- No hay precios ficticios.
- La disponibilidad se consulta por WhatsApp.
- Cada producto utiliza su imagen local real del catálogo.
- Las referencias 072 y 128 se manejan como productos internos únicos para evitar sobrescritura.
- Franelas Custom usan identificadores internos; no se muestra un código comercial inexistente.
- Pareo Handmade se mantiene como pieza personalizada según el catálogo.

## WhatsApp
Los CTAs de producto utilizan +58 414-1984129 y precargan nombre/código del producto cuando corresponda.
