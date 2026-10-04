export function Pagination() {
  return <nav aria-label="페이지 이동" className="mx-auto mt-[30px] flex items-center justify-center gap-1">{["‹", "1", "2", "3", "4", "5", "›"].map((page) => <button key={page} className={`grid size-[30px] place-items-center rounded-[7px] text-[11px] ${page === "1" ? "bg-[#17191e] font-semibold text-white" : "text-[#626771]"}`}>{page}</button>)}</nav>;
}
