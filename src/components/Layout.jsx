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

      {/* Contenido principal con contenedor adicional debajo */}
      <div className="content-wrapper">
        {children}
        
        {/* Contenedor adicional debajo del contenido principal */}
        {showSidebars && (
          <div className="sidebar-bottom">
            <AdBanner 
              position="sidebarBottom"
              adSlot="1234567891" 
              adFormat="rectangle"
              side="bottom-right"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;