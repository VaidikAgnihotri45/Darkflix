import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { categories, getFeaturedMovie, getMoviesByCategory } from '../data/movies';

const Home: React.FC = () => {
  const featuredMovie = getFeaturedMovie();

  if (!featuredMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero movie={featuredMovie} />
      
      {/* Movie Rows */}
      <div className="relative -mt-16 z-10">
        {categories.map((category) => (
          <MovieRow 
            key={category.id}
            title={category.name}
            movies={getMoviesByCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;