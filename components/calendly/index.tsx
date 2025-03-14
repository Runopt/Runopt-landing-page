'use client';

import { useEffect, useState, useCallback } from 'react';

// Define Calendly interface
interface CalendlyInterface {
  initPopupWidget: (options: { url: string }) => void;
  closePopupWidget: () => void;
}

// Extend Window interface
declare global {
  interface Window {
    Calendly: CalendlyInterface;
  }
}

const CalendlyPopup: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const CALENDLY_URL = 'https://calendly.com/skyerunopt';

  // Load the Calendly script
  useEffect(() => {
    // Check if script is already loaded
    if (
      document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
    ) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () =>
      console.error('Failed to load Calendly widget script');
    document.head.appendChild(script);

    // Add CSS to fix close button visibility
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
      
      /* Ensure the popup has proper z-index */
      .calendly-overlay {
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (window.Calendly) {
        window.Calendly.closePopupWidget();
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Enhanced function to add close button manually if needed
  const ensureCloseButtonVisible = useCallback(() => {
    setTimeout(() => {
      const popupClose = document.querySelector('.calendly-popup-close');

      if (popupClose instanceof HTMLElement) {
        // Apply styles directly to the element
        popupClose.style.display = 'block';
        popupClose.style.visibility = 'visible';
        popupClose.style.opacity = '1';

        // If the close button has no content, add an X
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

  // Open Calendly popup
  const openCalendlyPopup = useCallback(() => {
    if (!scriptLoaded) {
      setLoading(true);
      return;
    }

    try {
      if (typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
        });

        // Ensure close button is visible
        ensureCloseButtonVisible();
      }
    } catch (error) {
      console.error('Error opening Calendly popup:', error);
    } finally {
      setLoading(false);
    }
  }, [scriptLoaded, ensureCloseButtonVisible]);

  // Handle opening when script loads after button click
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
