import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

export function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  const isBookmarked = movie.isBookmarked;
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <div className={`poster-fallback poster-fallback-${movie.id}`} aria-hidden="true">
          <span>{movie.originalTitle}</span>
        </div>
        <img
          className="poster-image"
          src={movie.posterPath}
          alt={`${movie.title} 포스터`}
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <button
          className={`bookmark-button${isBookmarked ? " is-active" : ""}`}
          type="button"
          aria-label={`${movie.title} ${isBookmarked ? "북마크 해제" : "북마크"}`}
          aria-pressed={isBookmarked}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img src={isBookmarked ? "/icons/bookmark-active.svg" : "/icons/bookmark.svg"} alt="" />
        </button>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <time>{movie.releaseDate}</time>
      </div>
    </article>
  );
}
