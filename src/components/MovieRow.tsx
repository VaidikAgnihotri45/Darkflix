import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;

    const { scrollLeft, clientWidth } = rowRef.current;
    const scrollTo = direction === 'left' 
      ? scrollLeft - clientWidth * 0.75 
      : scrollLeft + clientWidth * 0.75;

    rowRef.current.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative mt-6 mb-4 px-4 md:px-12 space-y-0.5 group">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h2>
      
      {/* Scroll controls */}
      <div className="absolute top-[50%] left-0 -translate-y-1/2 w-12 h-full z-10 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => handleScroll('left')}
          className="bg-black/30 hover:bg-black/50 h-full w-12 flex items-center justify-center cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Movie row */}
      <div 
        ref={rowRef}
        className="flex items-center space-x-1.5 md:space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth py-2"
      >
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>

      {/* Scroll controls */}
      <div className="absolute top-[50%] right-0 -translate-y-1/2 w-12 h-full z-10 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => handleScroll('right')}
          className="bg-black/30 hover:bg-black/50 h-full w-12 flex items-center justify-center cursor-pointer transition-colors"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;