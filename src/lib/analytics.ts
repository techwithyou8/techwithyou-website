/**
 * Analytics Helper
 * Centralized analytics tracking for Google Analytics, Plausible, or custom solutions
 */

import { env } from './env';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    plausible?: (event: string, options?: Record<string, unknown>) => void;
  }
}

interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

class Analytics {
  private isEnabled = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Check if user has consented to analytics
      const consent = localStorage.getItem('cookie-consent');
      this.isEnabled = consent === 'accepted';
    }
  }

  /**
   * Track page view
   */
  pageView(url: string) {
    if (!this.isEnabled) return;

    // Google Analytics
    if (window.gtag && env.googleAnalyticsId) {
      window.gtag('config', env.googleAnalyticsId, {
        page_path: url,
      });
    }

    // Plausible
    if (window.plausible) {
      window.plausible('pageview');
    }

    console.log('Page view tracked:', url);
  }

  /**
   * Track custom event
   */
  event(action: string, params?: EventParams) {
    if (!this.isEnabled) return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', action, params);
    }

    // Plausible
    if (window.plausible) {
      window.plausible(action, { props: params });
    }

    console.log('Event tracked:', action, params);
  }

  /**
   * Common tracking methods
   */
  
  trackContactFormSubmit(service: string) {
    this.event('contact_form_submit', {
      category: 'engagement',
      label: service,
    });
  }

  trackButtonClick(label: string) {
    this.event('button_click', {
      category: 'interaction',
      label,
    });
  }

  trackLinkClick(url: string) {
    this.event('link_click', {
      category: 'navigation',
      label: url,
    });
  }

  trackDownload(filename: string) {
    this.event('download', {
      category: 'engagement',
      label: filename,
    });
  }

  trackError(error: string) {
    this.event('error', {
      category: 'errors',
      label: error,
    });
  }

  trackSearch(query: string) {
    this.event('search', {
      category: 'engagement',
      label: query,
    });
  }

  trackSignup() {
    this.event('sign_up', {
      category: 'conversion',
    });
  }

  trackPurchase(value: number, currency: string = 'EUR') {
    this.event('purchase', {
      category: 'conversion',
      value,
      currency,
    });
  }

  /**
   * Enable or disable tracking
   */
  setConsent(consent: boolean) {
    this.isEnabled = consent;
    
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent ? 'granted' : 'denied',
      });
    }
  }
}

export const analytics = new Analytics();

/**
 * React hook for analytics
 */
export function useAnalytics() {
  return {
    trackPageView: (url: string) => analytics.pageView(url),
    trackEvent: (action: string, params?: EventParams) => analytics.event(action, params),
    trackContactFormSubmit: (service: string) => analytics.trackContactFormSubmit(service),
    trackButtonClick: (label: string) => analytics.trackButtonClick(label),
    trackLinkClick: (url: string) => analytics.trackLinkClick(url),
  };
}
