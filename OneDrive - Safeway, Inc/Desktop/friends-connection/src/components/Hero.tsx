'use client';

import { Button } from '@/components/ui/Button';
import { ChevronRight, Heart, Users, Church } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImages?: string[];
  ctaButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const Hero = ({
  title = "Friends Connection Ministry",
  subtitle = "Together in Christ. Together on Mission.",
  description = "Uniting churches across our community in fellowship, worship, and service to God and our neighbors.",
  backgroundImages = ["/carousel-1.jpg", "/carousel-2.jpg", "/carousel-3.jpg"],
  ctaButton = { text: "Find Your Church", href: "/churches" },
  secondaryButton = { text: "Learn About Us", href: "/about" }
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!backgroundImages || backgroundImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div className="relative overflow-hidden min-h-screen lg:min-h-[85vh] xl:min-h-[90vh]">
      {/* Background Carousel */}
      {backgroundImages && backgroundImages.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          
          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 flex items-center min-h-screen lg:min-h-[85vh] xl:min-h-[90vh]">
        <div className="text-center w-full">
          {/* Ministry Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center text-white/90">
              <Church className="w-5 h-5 mr-2" />
              <span className="text-sm">5 Churches</span>
            </div>
            <div className="flex items-center text-white/90">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm">1000+ Members</span>
            </div>
            <div className="flex items-center text-white/90">
              <Heart className="w-5 h-5 mr-2" />
              <span className="text-sm">One Mission</span>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            {subtitle}
          </p>
          
          <p className="text-lg text-blue-200 mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaButton.href}>
              <Button variant="gradient" size="lg" className="shadow-xl hover:shadow-2xl">
                {ctaButton.text}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            {secondaryButton && (
              <Link href={secondaryButton.href}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;