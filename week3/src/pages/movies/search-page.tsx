import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MovieGrid } from "../../components/movies/movie-grid";
import { AppLayout } from "../../components/layout/app-layout";
import { movies } from "../../data/movies";
import { Route } from "../../routes/search";

export function SearchPage() {
  const { query } = Route.useSearch();
  const [value, setValue] = useState(query);
  const navigate = useNavigate({ from: "/search" });
  const normalized = query.trim().toLocaleLowerCase();
  const results = normalized ? movies.filter((movie) => `${movie.title} ${movie.originalTitle}`.toLocaleLowerCase().includes(normalized)) : [];
  function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); void navigate({ search: { query: value.trim() } }); }
  return <AppLayout><main className="mx-auto w-[min(1280px,88.9%)] flex-1 py-7 max-sm:w-[calc(100%-40px)]"><h1 className="mb-5 text-[25px] font-bold tracking-[-1.1px]">영화 검색</h1><form onSubmit={submit} className="mb-7 flex gap-2"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="영화 제목을 검색해보세요" className="min-w-0 flex-1 rounded-lg border border-[#dfe2e8] bg-white px-4 py-3 outline-none focus:border-[#345fe2]" /><button className="rounded-lg bg-[#345fe2] px-5 font-semibold text-white">검색</button></form>
    {!normalized ? <p className="text-sm text-[#777d87]">검색어를 입력해주세요.</p> : <><p className="mb-5 text-sm text-[#555a62]">‘{query}’ 검색 결과 <strong>{results.length}</strong>건</p>{results.length ? <MovieGrid movies={results} showDetails /> : <p className="py-12 text-center text-sm text-[#777d87]">검색 결과가 없어요.</p>}</>}
    {query && <p className="mt-6 text-xs text-[#8e929a]">검색 결과에서 영화를 선택하면 상세 페이지로 이동해요.</p>}
    </main></AppLayout>;
}
