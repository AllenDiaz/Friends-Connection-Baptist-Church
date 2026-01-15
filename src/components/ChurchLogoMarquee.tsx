'use client';

import Image from 'next/image';
import { ChurchData } from './ChurchCard';

interface ChurchLogoMarqueeProps {
  churches: ChurchData[];
  speed?: number; // Duration in seconds for one complete cycle
  className?: string;
}

const ChurchLogoMarquee = ({ 
  churches, 
  speed = 30,
  className = '' 
}: ChurchLogoMarqueeProps) => {
  // Filter churches that have images (logos)
  const churchesWithLogos = churches.filter(church => church.image);
  
  // Duplicate the array to create seamless infinite scroll
  const duplicatedChurches = [...churchesWithLogos, ...churchesWithLogos];

  return (
    <div className={`w-full overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Our Church Network
        </h2>
        <p className="text-center text-gray-600">
          {churches.length} churches united in faith across the Philippines
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div 
          className="flex gap-12 items-center"
          style={{
            animation: `marquee ${speed}s linear infinite`,
            width: 'max-content',
          }}
        >
          {duplicatedChurches.map((church, index) => (
            <div
              key={`${church.id}-${index}`}
              className="flex-shrink-0 w-40 h-32 relative bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 group"
            >
              {church.image && (
                <>
                  <Image
                    src={church.image}
                    alt={`${church.name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    {church.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChurchLogoMarquee;
