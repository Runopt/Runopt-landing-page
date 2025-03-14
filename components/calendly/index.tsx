'use client';

import { useEffect, useState, useCallback } from 'react';


const CalendlyPopup: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const CALENDLY_URL = 'https://calendly.com/skyerunopt';

  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => console.error('Failed to load Calendly widget script');
    document.head.appendChild(script);


    const style = document.createElement('style');
    style.textContent = `
      /* Ensure the close button has content and is properly sized */
      .calendly-popup-close {
        width: 24px !important;
        height: 24px !important;
        position: absolute !important;
        top: 15px !important;
        right: 15px !important;
        color: #333 !important;
        cursor: pointer !important;
        z-index: 10000 !important;
      }
      
      /* Add close icon using pseudo-elements */
      .calendly-popup-close::before,
      .calendly-popup-close::after {
        content: '' !important;
        position: absolute !important;
        width: 2px !important;
        height: 18px !important;
        background-color: #333 !important;
        top: 3px !important;
        left: 11px !important;
      }
      
      .calendly-popup-close::before {
        transform: rotate(45deg) !important;
      }
      
      .calendly-popup-close::after {
        transform: rotate(-45deg) !important;
      }
    `;
    document.head.appendChild(style);

   
    return () => {
      const calendlyObj = (window as any).Calendly;
      if (calendlyObj && typeof calendlyObj.closePopupWidget === 'function') {
        calendlyObj.closePopupWidget();
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  
  const ensureCloseButtonVisible = useCallback(() => {
    setTimeout(() => {
      const popupClose = document.querySelector('.calendly-popup-close');
      
      if (popupClose instanceof HTMLElement) {

        popupClose.style.display = 'block';
        popupClose.style.visibility = 'visible';
        popupClose.style.opacity = '1';
        
        
        if (!popupClose.innerHTML.trim()) {
          popupClose.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" 
                    fill="#333333"/>
            </svg>
          `;
        }
      }
    }, 1000);
  }, []);


  const openCalendlyPopup = useCallback(() => {
    if (!scriptLoaded) {
      setLoading(true);
      return;
    }
    
    try {

      const calendlyObj = (window as any).Calendly;
      if (typeof window !== 'undefined' && calendlyObj && typeof calendlyObj.initPopupWidget === 'function') {
        calendlyObj.initPopupWidget({
          url: CALENDLY_URL,
        });
        

        ensureCloseButtonVisible();
      }
    } catch (error) {
      console.error('Error opening Calendly popup:', error);
    } finally {
      setLoading(false);
    }
  }, [scriptLoaded, ensureCloseButtonVisible]);

  useEffect(() => {
    if (loading && scriptLoaded) {
      openCalendlyPopup();
    }
  }, [loading, scriptLoaded, openCalendlyPopup]);

 

  return (
    <div className="calendly-container">
      <button
        title="Contact us"
        onClick={openCalendlyPopup}
        disabled={loading}
        className="calendly-button"
        style={{
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Loading...' : 'Contact us'}
      </button>
    </div>
  );
};

export default CalendlyPopup;
