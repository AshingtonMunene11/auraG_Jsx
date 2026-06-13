// import Navigation from "@/components/Navigation";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { PageLoadingSkeleton } from "@/components/LoadingSkeleton";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Suspense fallback={<PageLoadingSkeleton />}>
          {children}
        </Suspense>
        <Footer />
        <WhatsAppButton />
        <Toaster />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
