import { useEffect, useState } from 'react';
import { AD_CONFIG, getAdConfig } from '../config/adConfig';

const AdBanner = ({ 
  position,
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  className = "",
  side = "" // "left" o "right" para sidebars
}) => {
  const [dimensions, setDimensions] = useState(getAdConfig(position));

  useEffect(() => {
    // Actualizar dimensiones en resize
    const handleResize = () => {
      const newDimensions = getAdConfig(position);
      setDimensions(newDimensions);
    };

    window.addEventListener('resize', handleResize);
    
    // Cargar anuncios cuando el componente se monta
    const loadAds = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle && dimensions) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.log('AdSense error:', err);
      }
    };

    // Delay para asegurar que el DOM está listo
    const timer = setTimeout(loadAds, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [position, dimensions]);

  // No renderizar si no hay dimensiones para este dispositivo
  if (!dimensions) {
    return null;
  }

  const adStyle = {
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    maxWidth: '100%'
  };

  let containerClass = `ad-container ${className}`;
  
  if (side === 'left' || side === 'right') {
    containerClass += ` ad-sidebar ${side}`;
  } else if (side === 'bottom-right') {
    containerClass += ' ad-sidebar-bottom';
  }

  return (
    <div className={containerClass}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...adStyle }}
        data-ad-client={AD_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      ></ins>
    </div>
  );
};

export default AdBanner;