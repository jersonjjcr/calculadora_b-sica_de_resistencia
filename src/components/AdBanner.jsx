import { useEffect, useState } from 'react';
import { AD_CONFIG, getAdConfig } from '../config/adConfig';

const AdBanner = ({ 
  position,
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  className = ""
}) => {
  const [dimensions, setDimensions] = useState(getAdConfig(position));

  useEffect(() => {
    // Actualizar dimensiones en resize
    const handleResize = () => {
      setDimensions(getAdConfig(position));
    };

    window.addEventListener('resize', handleResize);
    
    // Cargar anuncios cuando el componente se monta
    const loadAds = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
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
  }, [position]);

  const adStyle = {
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    maxWidth: '100%'
  };

  return (
    <div className={`ad-container ${className}`}>
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