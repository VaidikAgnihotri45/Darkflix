import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const delay = index % 5 * 0.1; // Stagger animation for each card in row

  return (
    <div 
      className="relative group min-w-[180px] h-[100px] md:min-w-[200px] md:h-[113px] lg:min-w-[240px] lg:h-[135px] rounded overflow-hidden transition-transform duration-300 ease-out cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div
        className={`w-full h-full bg-cover bg-center transition-transform duration-300 scale-100 ${
          isHovered ? 'scale-110' : 'scale-100 group-hover:scale-110'
        }`}
        style={{ backgroundImage: `url(${movie.posterUrl})` }}
      ></div>
      
      {/* Title & Info - Only show on hover */}
      <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-2 lg:p-3 opacity-0 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'group-hover:opacity-100'
      }`}>
        <h3 className="text-white font-semibold text-xs lg:text-sm truncate">{movie.title}</h3>
        <div className="flex items-center mt-1.5 text-xs">
          <span className="text-green-500 font-medium">98% Match</span>
          <span className="text-white/70 ml-1.5 text-[10px]">{movie.maturityRating}</span>
        </div>
        
        {/* Controls - Only show on hover */}
        <div className={`flex items-center justify-between mt-2 opacity-0 transition-opacity duration-200 delay-100 ${
          isHovered ? 'opacity-100' : 'group-hover:opacity-100'
        }`}>
          <div className="flex items-center space-x-1.5">
            <button className="w-6 h-6 rounded-full bg-white hover:bg-white/90 flex items-center justify-center">
              <Play className="w-3 h-3 text-black" fill="currentColor" />
            </button>
            <button className="w-6 h-6 rounded-full border border-white/50 hover:border-white flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </button>
            <button className="w-6 h-6 rounded-full border border-white/50 hover:border-white flex items-center justify-center">
              <ThumbsUp className="w-3 h-3 text-white" />
            </button>
          </div>
          <button className="w-6 h-6 rounded-full border border-white/50 hover:border-white flex items-center justify-center">
            <ChevronDown className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;