# Wings King — Landing Page

Landing page ficticia para "Wings King", restaurante de alitas y hamburguesas, creada como proyecto de portafolio. Sitio estático (HTML + CSS + JS), sin frameworks ni build step.

## Estructura

```
wings-king/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── menu.pdf     ← PDF de la carta (reemplázalo por el tuyo)
└── README.md
```

## Cómo poner tu propio PDF

1. Reemplaza `assets/menu.pdf` con tu archivo (debe llamarse exactamente `menu.pdf`, o bien actualiza la ruta en `index.html` dentro de la sección `#carta`, tanto en el `<object data="...">` como en el enlace de descarga).
2. Ábrelo localmente (`index.html`) para confirmar que se muestra en el visor incrustado.
3. Nota: algunos navegadores (sobre todo en iOS) no renderizan PDFs embebidos con `<object>`. Por eso siempre se muestra también el botón "Descargar PDF" como respaldo.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta a la raíz (o a una carpeta `docs/`).
2. Ve a **Settings → Pages** en el repositorio.
3. En **Source**, selecciona la rama (`main`) y la carpeta (`/root` o `/docs`).
4. Guarda: GitHub te dará una URL tipo `https://tu-usuario.github.io/tu-repo/`.
5. Verifica que `assets/menu.pdf` haya subido correctamente (GitHub a veces requiere Git LFS si el PDF es muy pesado; para un menú normal no debería ser necesario).

## Personalización rápida

- **Colores**: variables CSS en la parte superior de `styles.css` (`:root`).
- **Platos del menú**: tarjetas dentro de `<section class="menu">` en `index.html`.
- **Datos de contacto/horario**: `<section class="ubicacion">`.
- **Historia**: `<section class="historia">`.

## Notas técnicas

- Tipografías vía Google Fonts (Anton, Work Sans, JetBrains Mono).
- Iconos (alita, hamburguesa, llama, corona) son SVG inline, sin dependencias de imágenes externas.
- Animaciones respetan `prefers-reduced-motion`.
- Sin dependencias de build: se puede abrir `index.html` directamente o servir con cualquier servidor estático.
