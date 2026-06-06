export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  releaseYear: number;
  maturityRating: string;
  duration: string;
  categoryIds: number[];
  isFeatured: boolean;
}

export interface Category {
  id: number;
  name: string;
}