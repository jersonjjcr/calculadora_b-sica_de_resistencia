# 💰 Monetización con Google AdSense

## Configuración de Anuncios

### 📋 Pasos para configurar AdSense:

1. **Crear cuenta en Google AdSense:**
   - Ve a [Google AdSense](https://www.google.com/adsense/)
   - Solicita aprobación para tu sitio web

2. **Crear unidades de anuncios:**
   Una vez aprobado, crea estas unidades en tu panel de AdSense:
   
   - **Sidebar Izquierdo**: 160x600 (Desktop) / 120x500 (Tablet)
   - **Sidebar Derecho**: 160x600 (Desktop) / 120x500 (Tablet)
   - **Banner Inferior**: 728x90 (Desktop) / 468x60 (Tablet) / 320x50 (Mobile)
   - **Anuncios Inline**: 320x50 (Solo móvil)

3. **Actualizar configuración:**
   Edita `src/config/adConfig.js` con tus IDs reales:

```javascript
export const AD_CONFIG = {
  publisherId: 'ca-pub-TU-PUBLISHER-ID',
  
  slots: {
    leftSidebar: 'TU-SLOT-ID-1',      // Sidebar izquierdo
    rightSidebar: 'TU-SLOT-ID-2',     // Sidebar derecho   
    bottomBanner: 'TU-SLOT-ID-3',     // Banner inferior   
    mobileInline: 'TU-SLOT-ID-4',     // Inline móvil superior
    mobileBottom: 'TU-SLOT-ID-5',     // Inline móvil inferior   
  }
};
```

### 🎯 Posicionamiento Estratégico:

- **Sidebars Laterales**: Anuncios verticales en desktop (160x600)
- **Anuncios Inline**: Solo en móvil, intercalados en el contenido
- **Banner Inferior**: Anuncio horizontal debajo de todo el contenido

### 📱 Responsive Design:

Los anuncios se adaptan automáticamente según dispositivo:
- **Desktop (992px+)**: Sidebars 160x600 + Banner inferior 728x90
- **Tablet (768-991px)**: Sidebars 120x500 + Banner inferior 468x60
- **Mobile (≤767px)**: Solo anuncios inline 320x50, sidebars ocultos

### 🔧 Características Implementadas:

- ✅ **Auto-loading** de anuncios
- ✅ **Responsive** según tamaño de pantalla
- ✅ **Tema adaptativo** (claro/oscuro)
- ✅ **Configuración centralizada**
- ✅ **Manejo de errores**

### 📊 Optimización para Revenue:

1. **Posicionamiento no intrusivo**
2. **Tamaños estándar de alta demanda**
3. **Responsive para todos los dispositivos**
4. **Carga asíncrona para mejor UX**

### 🚀 Deploy con Anuncios:

```bash
# Para GitHub Pages
npm run build
npm run deploy

# Para Vercel  
npm run build:vercel
# Luego deploy en Vercel dashboard
```

### ⚠️ Notas Importantes:

- Los slots ID (1234567890, etc.) son placeholders
- Reemplaza con tus IDs reales de AdSense
- Espera la aprobación de Google antes de ver anuncios reales
- Los anuncios de prueba aparecen durante desarrollo

### 📈 Métricas Sugeridas:

- **CTR objetivo**: 1-3%
- **RPM objetivo**: $1-5 (depende de geografía)
- **Viewability**: >70%

¡La monetización está lista! Solo necesitas configurar tu cuenta de AdSense real. 💰