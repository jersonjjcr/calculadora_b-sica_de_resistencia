import AdBanner from './AdBanner';
import { useState, useEffect } from 'react';
import { getDeviceType } from '../config/adConfig';

const Layout = ({ children }) => {
  const [showSidebars, setShowSidebars] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const deviceType = getDeviceType();
      setShowSidebars(deviceType === 'desktop' || deviceType === 'tablet');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="main-container">
      {/* Sidebar izquierdo - solo en desktop/tablet */}
      {showSidebars && (
        <div className="sidebar left">
          <AdBanner 
            position="sidebar"
            adSlot="1234567890" 
            adFormat="auto"
            side="left"
          />
        </div>
      )}

      {/* Contenido principal */}
      <div className="content-wrapper">
        {children}
      </div>

      {/* Sidebar derecho - solo en desktop/tablet */}
      {showSidebars && (
        <div className="sidebar right">
          <AdBanner 
            position="sidebar"
            adSlot="1234567891" 
            adFormat="auto"
            side="right"
          />
        </div>
      )}
    </div>
  );
};

export default Layout;