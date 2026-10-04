import { MovieGrid } from "../../components/movies/movie-grid";
import { Pagination } from "../../components/movies/pagination";
import { AppLayout } from "../../components/layout/app-layout";
import { movies } from "../../data/movies";

export function MovieListPage() {
  return <AppLayout><main className="mx-auto w-[min(1280px,88.9%)] flex-1 py-7 max-sm:w-[calc(100%-40px)] max-sm:pt-6"><h1 className="mb-[22px] text-[25px] font-bold tracking-[-1.1px] max-sm:text-[22px]">영화 목록</h1><MovieGrid movies={movies} /><Pagination /></main></AppLayout>;
}
