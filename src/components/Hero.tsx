'use client';

import { Button } from '@/components/ui/Button';
import { ChevronRight, Heart, Users, Church } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
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
  subtitle = "Connecting Communities Through Faith",
  description = "Uniting 5 churches across our community in fellowship, worship, and service to God and our neighbors.",
  backgroundImage = "/living-water-baptist-church.png",
  ctaButton = { text: "Find Your Church", href: "/churches" },
  secondaryButton = { text: "Learn About Us", href: "/about" }
}: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
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