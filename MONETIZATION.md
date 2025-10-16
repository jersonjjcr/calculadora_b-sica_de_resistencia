# 💰 Monetización con Google AdSense

## Configuración de Anuncios

### 📋 Pasos para configurar AdSense:

1. **Crear cuenta en Google AdSense:**
   - Ve a [Google AdSense](https://www.google.com/adsense/)
   - Solicita aprobación para tu sitio web

2. **Crear unidades de anuncios:**
   Una vez aprobado, crea estas unidades en tu panel de AdSense:
   
   - **Banner Superior**: 728x90 (Desktop) / 320x50 (Mobile)
   - **Cuadrado Medio**: 336x280 (Desktop) / 300x250 (Mobile)  
   - **Banner Inferior**: 728x90 (Desktop) / 320x50 (Mobile)

3. **Actualizar configuración:**
   Edita `src/config/adConfig.js` con tus IDs reales:

```javascript
export const AD_CONFIG = {
  publisherId: 'ca-pub-TU-PUBLISHER-ID',
  
  slots: {
    topBanner: 'TU-SLOT-ID-1',      
    middleSquare: 'TU-SLOT-ID-2',   
    bottomBanner: 'TU-SLOT-ID-3',   
    mobileBanner: 'TU-SLOT-ID-4',   
  }
};
```

### 🎯 Posicionamiento Estratégico:

- **Superior**: Después del título, antes del resistor
- **Medio**: Entre los controles y el resultado
- **Inferior**: Después del resultado final

### 📱 Responsive Design:

Los anuncios se adaptan automáticamente:
- **Desktop**: Banners 728x90, Cuadrado 336x280
- **Mobile**: Banners 320x50, Cuadrado 300x250

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