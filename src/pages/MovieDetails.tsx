import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { movies } from '../data/movies';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <div className="pt-20 px-4 text-center">Movie not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Backdrop */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${movie.backdropUrl})`,
          height: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative pt-[20vh] px-4 md:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-green-500">98% Match</span>
            <span>{movie.releaseYear}</span>
            <span className="border px-1">{movie.maturityRating}</span>
            <span>{movie.duration}</span>
          </div>

          <p className="text-lg mb-8">{movie.description}</p>

          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-white/90 transition">
              <Play className="w-5 h-5 mr-2" fill="black" />
              Play
            </button>
            <button className="flex items-center px-6 py-2 bg-gray-500/70 rounded hover:bg-gray-500/50 transition">
              <Plus className="w-5 h-5 mr-2" />
              My List
            </button>
            <button className="flex items-center px-6 py-2 bg-gray-500/70 rounded hover:bg-gray-500/50 transition">
              <ThumbsUp className="w-5 h-5 mr-2" />
              Rate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;