import { useState, useEffect } from 'react';
import AdBanner from './AdBanner';
import { getDeviceType } from '../config/adConfig';

const MobileAdBanner = ({ adSlot, className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(getDeviceType() === 'mobile');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Solo renderizar en móvil
  if (!isMobile) {
    return null;
  }

  return (
    <AdBanner 
      position="inline"
      adSlot={adSlot}
      adFormat="rectangle"
      className={`ad-inline ${className}`}
    />
  );
};

export default MobileAdBanner;