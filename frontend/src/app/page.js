"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles, Users, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Skeleton } from "../components/ui/skeleton";
// import { Skeleton } from "../components/ui/skeleton";
import { PageLoader } from "../components/ui/PageLoader";
import { useEffect, useState } from "react";
import { trackPageView } from "../utils/analytics";

function FeatureCard({ feature }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        {!loaded && <Skeleton className="absolute inset-0" />}
        <ImageWithFallback
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="p-8">
        <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <feature.icon className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </Card>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    trackPageView("/");
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1597201278257-3687be27d954?...q=80&w=1080"
            alt="Aura Gardens luxury landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
              Aura Gardens
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where nature meets elegance. Experience tranquility in our meticulously curated gardens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/visit">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-base px-8 py-6">
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                  Explore Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Experience Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Aura Gardens the premier destination for elegant events and peaceful retreats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Pristine Landscapes",
                description: "Meticulously maintained gardens featuring lush greenery and seasonal blooms.",
                image: "https://images.unsplash.com/photo-1764969370921-7c8df49171cd?...q=80&w=1080",
              },
              {
                icon: Users,
                title: "Event Spaces",
                description: "Versatile venues perfect for weddings, corporate events, and private celebrations.",
                image: "https://images.unsplash.com/photo-1634507554990-2043ccc61e61?...q=80&w=1080",
              },
              {
                icon: Heart,
                title: "Peaceful Retreats",
                description: "Serene pathways and quiet corners for reflection and relaxation.",
                image: "https://images.unsplash.com/photo-1579847198181-412a0d0487d0?...q=80&w=1080",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Experience Aura Gardens?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Whether you're planning an event or seeking a peaceful escape, we're here to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-base px-8 py-6">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Visit
                </Button>
              </Link>
              <Link href="/visit">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                  <MapPin className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
