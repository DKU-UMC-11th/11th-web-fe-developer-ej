import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "../../utils/cn";

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const links = [
    { to: "/" as const, label: "영화", active: pathname === "/" || pathname.startsWith("/movies/") },
    { to: "/search" as const, label: "검색", active: pathname === "/search" },
  ];
  return (
    <header className="flex h-[72px] items-center gap-9 border-b border-[#eceef1] bg-white px-[5.55%] max-sm:h-16 max-sm:gap-5 max-sm:px-5">
      <Link to="/" className="inline-flex shrink-0 items-center gap-2 text-[17px] font-bold"><span className="grid size-[19px] place-items-center rounded-[5px] border-2 border-current text-[11px]">▣</span>UMCine</Link>
      <nav aria-label="메인 메뉴" className="flex h-full items-center gap-[27px] text-[13px] max-sm:gap-4 max-sm:text-xs">
        {links.map((link) => <Link key={link.to} to={link.to} search={link.to === "/search" ? { query: "" } : undefined} className={cn("grid h-full place-items-center text-[#555a62]", link.active && "font-semibold text-[#17191e]")}>{link.label}</Link>)}
      </nav>
      <div className="ml-auto flex items-center gap-3 max-sm:gap-1.5"><Link to="/search" search={{ query: "" }} aria-label="검색" className="grid size-[34px] place-items-center rounded-[9px] border border-[#e2e4e8] bg-white text-[22px]">⌕</Link><button className="h-[34px] min-w-[58px] rounded-lg bg-[#345fe2] text-xs font-semibold text-white">로그인</button></div>
    </header>
  );
}
