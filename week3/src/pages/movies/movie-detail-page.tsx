import { Link } from "@tanstack/react-router";
import { AppLayout } from "../../components/layout/app-layout";
import { movies } from "../../data/movies";
import { Route } from "../../routes/movies.$movieId";

export function MovieDetailPage() {
  const { movieId } = Route.useParams();
  const movie = movies.find((item) => item.id === Number(movieId));
  if (!movie) return <AppLayout><main className="grid flex-1 place-items-center"><div className="text-center"><p className="mb-4 text-lg font-semibold">영화를 찾을 수 없어요.</p><Link to="/" className="text-sm text-[#345fe2]">영화 목록으로 돌아가기</Link></div></main></AppLayout>;
  return <AppLayout><main className="mx-auto w-full max-w-[1280px] flex-1 px-[5.55%] py-9"><section className="relative isolate overflow-hidden rounded-2xl bg-[#1b2029] text-white"><img src={movie.backdropPath} alt="" className="absolute inset-0 -z-2 size-full object-cover opacity-35" onError={(event) => { event.currentTarget.style.display = "none"; }} /><div className="absolute inset-0 -z-1 bg-linear-to-r from-[#12151c]/95 via-[#12151c]/75 to-[#12151c]/20" /><div className="max-w-3xl px-8 py-16 sm:px-14 sm:py-24"><p className="mb-3 text-sm text-white/75">{movie.originalTitle} · {movie.releaseDate}</p><h1 className="mb-3 text-3xl font-bold sm:text-5xl">{movie.title}</h1><p className="mb-6 text-base text-white/80">{movie.tagline}</p><div className="mb-7 flex flex-wrap gap-2">{movie.genres.map((genre) => <span key={genre} className="rounded-full border border-white/40 px-3 py-1 text-xs">{genre}</span>)}<span className="rounded-full border border-white/40 px-3 py-1 text-xs">{movie.runtime}</span></div><h2 className="mb-2 text-lg font-semibold">줄거리</h2><p className="max-w-xl text-sm leading-7 text-white/85">{movie.overview}</p></div></section><Link to="/" className="mt-6 inline-flex text-sm text-[#345fe2]">← 영화 목록</Link></main></AppLayout>;
}
