// Configuración de Google AdSense
export const AD_CONFIG = {
  publisherId: 'ca-pub-4893619349370418',
  
  // Slots de anuncios (debes crear estos en tu cuenta de AdSense)
  slots: {
    leftSidebar: '1234567890',    // Sidebar izquierdo - 160x600
    rightSidebar: '1234567891',   // Sidebar derecho - 160x600
    bottomBanner: '1234567892',   // Banner inferior - 728x90
    mobileInline: '1234567893',   // Anuncio inline móvil - 320x50
    mobileBottom: '1234567894',   // Banner móvil inferior - 320x50
  },
  
  // Configuraciones de anuncios por posición
  positions: {
    sidebar: {
      desktop: { width: 160, height: 600 },
      tablet: { width: 120, height: 500 },
      mobile: null // No se muestran en móvil
    },
    sidebarBottom: {
      desktop: { width: 336, height: 280 },
      tablet: { width: 300, height: 250 },
      mobile: null // No se muestra en móvil
    },
    bottom: {
      desktop: { width: 728, height: 90 },
      tablet: { width: 468, height: 60 },
      mobile: { width: 320, height: 50 }
    },
    inline: {
      mobile: { width: 320, height: 50 }
    }
  }
};

// Detectar tipo de dispositivo
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width <= 575) return 'mobile';
  if (width <= 991) return 'tablet';
  return 'desktop';
};

// Obtener configuración de anuncio según la posición
export const getAdConfig = (position) => {
  const config = AD_CONFIG.positions[position];
  const deviceType = getDeviceType();
  
  return config[deviceType] || null;
};