// /**
//  * Analytics Utilities
//  *
//  * Handles both Google Analytics and custom backend analytics tracking.
//  * Collects basic user information without requiring login.
//  *
//  * NEXT.JS + FLASK ALTERNATIVE:
//  * - Install next-ga or @next/third-parties for GA integration
//  * - Use Next.js middleware for server-side analytics tracking
//  * - Flask backend would store analytics in PostgreSQL/MongoDB
//  */

// import { config } from "../config/api";
// import { apiClient } from "../config/api";

// // Initialize Google Analytics
// export function initGA() {
//   if (typeof window === "undefined") return;

//   const gaId = config.googleAnalyticsId;

//   if (!gaId) {
//     console.warn("Google Analytics ID not configured");
//     return;
//   }

//   // Load Google Analytics script
//   const script = document.createElement("script");
//   script.async = true;
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
//   document.head.appendChild(script);

//   // Initialize gtag
//   window.dataLayer = window.dataLayer || [];
//   function gtag(...args) {
//     window.dataLayer.push(args);
//   }
//   window.gtag = gtag;

//   gtag("js", new Date());
//   gtag("config", gaId);
// }

// // Track page views
// export function trackPageView(page) {
//   // Google Analytics
//   if (typeof window !== "undefined" && window.gtag) {
//     window.gtag("config", config.googleAnalyticsId, {
//       page_path: page,
//     });
//   }

//   // Custom backend analytics
//   try {
//     apiClient.trackPageView({
//       page,
//       timestamp: new Date().toISOString(),
//     });
//   } catch (error) {
//     console.error("Failed to track page view:", error);
//   }
// }

// // Track custom events
// export function trackEvent(event, category, label, value) {
//   // Google Analytics
//   if (typeof window !== "undefined" && window.gtag) {
//     window.gtag("event", event, {
//       event_category: category,
//       event_label: label,
//       value: value,
//     });
//   }

//   // Custom backend analytics
//   try {
//     apiClient.trackEvent({ event, category, label, value });
//   } catch (error) {
//     console.error("Failed to track event:", error);
//   }
// }

// // Collect basic visitor information (no PII, no login required)
// export function collectBasicInfo() {
//   if (typeof window === "undefined") return {};

//   return {
//     userAgent: navigator.userAgent,
//     language: navigator.language,
//     screenResolution: `${window.screen.width}x${window.screen.height}`,
//     viewport: `${window.innerWidth}x${window.innerHeight}`,
//     referrer: document.referrer,
//     timestamp: new Date().toISOString(),
//   };
// }

/**
 * Analytics Utilities (Frontend Only)
 *
 * Handles Google Analytics tracking without backend calls.
 * Uses NEXT_PUBLIC_GA_ID from .env.local
 */

// Initialize Google Analytics
export function initGA() {
  if (typeof window === "undefined") return;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    console.warn("Google Analytics ID not configured");
    return;
  }

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", gaId);
}

// Track page views
export function trackPageView(page) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: page,
    });
  }
}

// Track custom events
export function trackEvent(event, category, label, value) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Collect basic visitor information (no PII)
export function collectBasicInfo() {
  if (typeof window === "undefined") return {};

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  };
}
