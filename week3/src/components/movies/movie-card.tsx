import { Link } from "@tanstack/react-router";
import type { Movie } from "../../types/movie";
import { cn } from "../../utils/cn";

export function MovieCard({ movie, showDetails = false }: { movie: Movie; showDetails?: boolean }) {
  return <Link to="/movies/$movieId" params={{ movieId: String(movie.id) }} className="group block min-w-0">
    <div className="relative aspect-[.72] overflow-hidden rounded-[10px] bg-[#e8eaf0]">
      <div className={cn("absolute inset-0 flex items-end overflow-hidden bg-linear-to-br from-[#24364d] via-[#a44d50] to-[#151820] p-[18px] text-white", `poster-fallback-${movie.id}`)}><span className="relative z-1 text-[clamp(14px,1.6vw,23px)] font-bold leading-tight [text-shadow:0_2px_8px_#000]">{movie.originalTitle}</span></div>
      <img src={movie.posterPath} alt={`${movie.title} 포스터`} className="absolute inset-0 size-full object-cover" onError={(event) => { event.currentTarget.style.display = "none"; }} />
    </div>
    <div className="pt-[9px]"><h2 className="mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-semibold tracking-[-.4px]">{movie.title}</h2><p className="mb-1 text-[11px] text-[#707680]">{movie.originalTitle}</p><time className="block text-[11px] text-[#8e929a]">{movie.releaseDate}</time>{showDetails && <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#555a62]">{movie.overview}</p>}</div>
  </Link>;
}
