import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative h-[56.25vw] md:h-[50vw] lg:h-[45vw] xl:h-[40vw]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${movie.backdropUrl})`,
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-[35%] md:bottom-1/3 left-0 right-0 px-4 md:px-12 flex flex-col">
        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg max-w-xl lg:max-w-2xl">
          {movie.title}
        </h1>

        {/* Movie info */}
        <div className="flex items-center mt-2 md:mt-3 text-white/80 text-sm">
          <span className="text-green-500 font-semibold mr-2">98% Match</span>
          <span>{movie.releaseYear}</span>
          <span className="mx-2 text-white/40">•</span>
          <span className="border border-white/30 px-1 text-xs">{movie.maturityRating}</span>
          <span className="mx-2 text-white/40">•</span>
          <span>{movie.duration}</span>
          <span className="mx-2 text-white/40">•</span>
          <span className="text-white/80">HD</span>
        </div>

        {/* Description */}
        <p className="text-white text-sm md:text-base mt-2 md:mt-4 max-w-md md:max-w-xl lg:max-w-2xl drop-shadow-lg">
          {movie.description}
        </p>

        {/* Buttons */}
        <div className="flex space-x-3 mt-3 md:mt-5">
          <button className="flex items-center px-5 py-1.5 md:py-2 bg-white hover:bg-white/90 transition rounded text-black font-semibold">
            <Play className="w-5 h-5 mr-2" fill="black" />
            Play
          </button>
          <button className="flex items-center px-5 py-1.5 md:py-2 bg-gray-500/70 hover:bg-gray-500/50 transition text-white rounded font-semibold">
            <Info className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;