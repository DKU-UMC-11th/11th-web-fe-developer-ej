import type { Movie } from "../../types/movie";
import { MovieCard } from "./movie-card";

export function MovieGrid({ movies, showDetails = false }: { movies: Movie[]; showDetails?: boolean }) {
  return <div className="grid grid-cols-2 gap-x-[14px] gap-y-[22px] sm:grid-cols-3 sm:gap-[30px_18px] lg:grid-cols-5">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} showDetails={showDetails} />)}</div>;
}
