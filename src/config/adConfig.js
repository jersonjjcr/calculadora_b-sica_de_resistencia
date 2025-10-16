// Configuración de Google AdSense
export const AD_CONFIG = {
  publisherId: 'ca-pub-4893619349370418',
  
  // Slots de anuncios (debes crear estos en tu cuenta de AdSense)
  slots: {
    topBanner: '1234567890',      // Banner superior - 728x90
    middleSquare: '1234567891',   // Cuadrado medio - 336x280
    bottomBanner: '1234567892',   // Banner inferior - 728x90
    mobileBanner: '1234567893',   // Banner para móviles - 320x50
  },
  
  // Configuraciones de anuncios por posición
  positions: {
    top: {
      desktop: { width: 728, height: 90 },
      mobile: { width: 320, height: 50 }
    },
    middle: {
      desktop: { width: 336, height: 280 },
      mobile: { width: 300, height: 250 }
    },
    bottom: {
      desktop: { width: 728, height: 90 },
      mobile: { width: 320, height: 50 }
    }
  }
};

// Detectar si es móvil
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Obtener configuración de anuncio según la posición
export const getAdConfig = (position) => {
  const config = AD_CONFIG.positions[position];
  return isMobile() ? config.mobile : config.desktop;
};