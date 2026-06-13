export const config = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
};

// Mock API client until you connect Flask/Postgres
export const apiClient = {
  trackPageView: (data) => {
    console.log("Mock trackPageView:", data);
  },
  trackEvent: (data) => {
    console.log("Mock trackEvent:", data);
  },
};
